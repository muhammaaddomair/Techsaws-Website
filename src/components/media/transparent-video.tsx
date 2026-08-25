"use client";

import { useEffect, useRef } from "react";

interface TransparentVideoProps {
  src: string;
  className?: string;
}

export function TransparentVideo({ src, className }: TransparentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { willReadFrequently: true });

    if (!video || !canvas || !context) {
      return;
    }

    let animationFrame = 0;
    let stopped = false;
    let started = false;

    const drawFrame = () => {
      if (video.videoWidth && video.videoHeight) {
        if (
          canvas.width !== video.videoWidth ||
          canvas.height !== video.videoHeight
        ) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frameData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = frameData.data;

        for (let index = 0; index < pixels.length; index += 4) {
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const brightness = Math.max(red, green, blue);

          if (brightness < 28) {
            pixels[index + 3] = 0;
          } else if (brightness < 86) {
            pixels[index + 3] = Math.round(((brightness - 28) / 58) * 255);
          }
        }

        context.putImageData(frameData, 0, 0);
      }
    };

    const queueFrame = () => {
      if (stopped) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        drawFrame();
        queueFrame();
      });
    };

    const start = async () => {
      if (started) {
        return;
      }

      started = true;

      try {
        await video.play();
      } catch {
        // Autoplay can be blocked in unusual browser settings; the first frame
        // still renders once metadata is available.
      }

      drawFrame();
      queueFrame();
    };

    const resetAndStart = () => {
      started = false;
      void start();
    };

    video.addEventListener("loadeddata", start, { once: true });
    video.addEventListener("canplay", start, { once: true });
    video.addEventListener("playing", start, { once: true });
    video.addEventListener("seeked", resetAndStart);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void start();
    }

    return () => {
      stopped = true;
      video.removeEventListener("loadeddata", start);
      video.removeEventListener("canplay", start);
      video.removeEventListener("playing", start);
      video.removeEventListener("seeked", resetAndStart);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-contain"
        aria-label="AI automation product preview"
        role="img"
      />
    </div>
  );
}
