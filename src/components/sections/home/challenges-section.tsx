import Image from "next/image";

import ChallengeImg01 from "../../../../public/images/challenges-01-img.png";

function ChallengesSection() {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home-hero-img.png')",
      }}
    >
      <div className="page-layout section-tight">
        <div className="w-full h-full flex justify-between">
          <div className="flex flex-col">
            <p className="mb-8 text-base font-manrope font-extrabold uppercase tracking-[0.32em] text-sub-heading relative inline-block">
              Challenges
              <span className="absolute bottom-3 left-0 -z-10 h-5 w-full rounded-full bg-sub-heading/20 blur-xl" />
            </p>

            <h1 className="text-4xl font-manrope font-medium max-w-87.5 mb-3">
              Challenges We Solve
            </h1>
            <p className="text-lg leading-relaxed font-light max-w-md">
              Modern businesses don&apos;t struggle because of a lack of tools.
              They struggle because their systems don&apos;t scale. We help
              organizations eliminate operational friction, improve execution,
              and build systems that support growth.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="glass-bg-dark h-90 w-160 rounded-2xl overflow-hidden relative">
              <Image
                src={ChallengeImg01}
                alt=""
                className="w-full h-auto bg-cover bg-center absolute"
              />
              <div className="relative z-10 w-full h-full py-4 px-8 flex flex-col justify-between">
                <h1 className="text-5xl font-light font-heading">
                  Manual Operations & Inefficient Workflows
                </h1>
                <p className="text-lg font-light max-w-sm">
                  Teams waste time on repetitive tasks, disconnected tools, and
                  manual processes that limit productivity and slow execution.
                </p>
              </div>
            </div>
            <div className="glass-bg-dark h-90 w-160 rounded-2xl overflow-hidden relative">
              <Image
                src={ChallengeImg01}
                alt=""
                className="w-full h-auto bg-cover bg-center absolute"
              />
              <div className="relative z-10 w-full h-full py-4 px-8 flex flex-col justify-between">
                <h1 className="text-5xl font-light font-heading">
                  Manual Operations & Inefficient Workflows
                </h1>
                <p className="text-lg font-light max-w-sm">
                  Teams waste time on repetitive tasks, disconnected tools, and
                  manual processes that limit productivity and slow execution.
                </p>
              </div>
            </div>
            <div className="glass-bg-dark h-90 w-160 rounded-2xl overflow-hidden relative">
              <Image
                src={ChallengeImg01}
                alt=""
                className="w-full h-auto bg-cover bg-center absolute"
              />
              <div className="relative z-10 w-full h-full py-4 px-8 flex flex-col justify-between">
                <h1 className="text-5xl font-light font-heading">
                  Manual Operations & Inefficient Workflows
                </h1>
                <p className="text-lg font-light max-w-sm">
                  Teams waste time on repetitive tasks, disconnected tools, and
                  manual processes that limit productivity and slow execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;
