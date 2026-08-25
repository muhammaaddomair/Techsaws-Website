import ScrollExpand from "@/components/ui/scroll-expand";

// Placeholder background for the scroll-expand frame until a dedicated
// image for this section is provided.
const SCROLL_EXPAND_BG = "/images/ai-automation-architecture-hero.png";

function WhySection() {
  return (
    <section className="bg-white">
      <div style={{ height: "220vh" }}>
        <ScrollExpand
          src={SCROLL_EXPAND_BG}
          alt="Systems TechSaws has built for clients"
          title="Why TechSaws"
          scrollHint="Scroll to see how we build"
          useWindowScroll
          startWidth={29}
          startHeight={41}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.35}
          scrollDistance={1.2}
          holdDistance={0.35}
          smoothing={0.1}
          overlayScrim={0.45}
        >
          <h3 className="max-w-2xl text-3xl font-manrope font-medium text-white md:text-5xl">
            We build systems, not one-off fixes.
          </h3>
          <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-white/75">
            Every engagement is engineered to work as one connected layer —
            automation, backend, security, and revenue systems that scale
            with you instead of piling up as more things to maintain.
          </p>
        </ScrollExpand>
      </div>
    </section>
  );
}

export default WhySection;
