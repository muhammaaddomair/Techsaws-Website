import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroAgentTabs } from "@/components/sections/hero-agent-tabs";
import { TopAutomationHero } from "@/components/home/top-automation-hero";
import { type CSSProperties } from "react";
import {
  ArrowUp,
  Check,
  LoaderCircle,
  Mic,
  Plus,
  X,
} from "lucide-react";

const frictionItems = [
  "Manual handoffs slow every request",
  "Teams copy data between disconnected tools",
  "Leads and tickets wait for human routing",
  "Hard to see what is blocked or overdue",
  "Every process needs more effort to scale",
  "Customers feel the delay before you do",
];

const automationWins = [
  "Automated and clear intake workflows",
  "Systems update each other without busywork",
  "AI triage routes work to the right owner",
  "Live status, alerts, and audit trails",
  "Scale operations with a system that works for you",
  "Customers get faster, more consistent responses",
];

const contactInterestItems = [
  "AI Automation",
  "Backend Systems",
  "Cyber Defense",
  "Revenue Growth",
  "Conversion Systems",
  "Digital Architecture",
];

const budgetItems = ["10k - 30k", "30k-80k", "80k+"];

const heroPromptLines = [
  "Generate LinkedIn and Instagram posts and publish the content,",
  "then send follow-up emails to all clients.",
];

const heroExecutionTasks = [
  "Creating post",
  "Uploading content to social media handles",
  "Sending cold emails",
];

const aiAutomationFaqs = [
  {
    question: "What can AI automation handle for my business?",
    answer:
      "It can handle repeatable workflows like content creation, lead routing, CRM updates, follow-up emails, support triage, reporting, and tool-to-tool data movement.",
  },
  {
    question: "Can you connect AI agents to our existing tools?",
    answer:
      "Yes. We connect automations with CRMs, websites, inboxes, spreadsheets, databases, APIs, social platforms, helpdesks, and internal dashboards.",
  },
  {
    question: "Will the automation need human approval?",
    answer:
      "It can. We can design workflows with approval steps for sensitive actions like publishing content, sending outreach, updating records, or escalating customers.",
  },
  {
    question: "How do you make AI workflows reliable?",
    answer:
      "We use structured inputs, clear rules, validations, logs, fallback paths, and monitoring so the system can run consistently and be reviewed when needed.",
  },
  {
    question: "How quickly can an AI automation go live?",
    answer:
      "A focused workflow can often be launched in phases within weeks, while larger systems with multiple integrations are planned around clear milestones.",
  },
  {
    question: "Can you improve an automation we already have?",
    answer:
      "Yes. We can audit existing automations, remove brittle steps, improve prompts and logic, add tracking, and connect missing systems.",
  },
];

const pixelLines = [
  { top: 18, left: 8, width: 42, delay: "0s", duration: "3.6s" },
  { top: 32, left: 28, width: 58, delay: "-1.6s", duration: "4.2s" },
  { top: 51, left: 2, width: 66, delay: "-0.8s", duration: "3.8s" },
  { top: 62, left: 44, width: 40, delay: "-2.4s", duration: "3.5s" },
  { top: 76, left: 16, width: 52, delay: "-1s", duration: "4s" },
  { top: 25, left: 68, width: 48, delay: "-2s", duration: "4.4s" },
  { top: 44, left: 82, width: 38, delay: "-2.8s", duration: "3.4s" },
  { top: 70, left: 72, width: 62, delay: "-1.4s", duration: "4.1s" },
];

function PixelMotionPanel({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={`relative h-36 overflow-hidden bg-transparent ${
        featured ? "sm:h-44" : "sm:h-36"
      }`}
    >
      {pixelLines.map((line, index) => (
        <span
          key={index}
          className="pixel-line"
          style={
            {
              "--line-top": `${line.top}%`,
              "--line-left": `${line.left}%`,
              "--line-width": `${line.width}px`,
              "--line-delay": line.delay,
              "--line-duration": line.duration,
            } as CSSProperties
          }
        />
      ))}
      {featured ? (
        <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-[0_18px_50px_rgba(255,255,255,0.12)]">
          <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-black" />
        </span>
      ) : (
        <span className="question-drift absolute left-1/2 top-1/2 z-10 grid size-10 place-items-center rounded-full bg-white text-sm font-bold text-black shadow-[0_16px_40px_rgba(255,255,255,0.14)]">
          ?
        </span>
      )}
    </div>
  );
}

export function AutomationContactSection() {
  return (
    <section className="flex h-[90vh] overflow-hidden bg-white px-6 py-8 text-black sm:px-10 lg:py-10 xl:px-[120px]">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 self-center lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-10">
          <h2 className="max-w-xl text-[44px] font-medium leading-[1.08] tracking-[-0.06em] text-black sm:text-[54px] lg:text-[62px]">
            Tell us about your next stage.
          </h2>

          <div>
            <p className="text-[18px] font-semibold tracking-[-0.04em]">
              Our Testimonials:
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full border border-black/18 text-xl font-black">
                C
              </span>
              <span className="grid size-12 place-items-center rounded-full border border-black/18 text-center text-xs font-black leading-none">
                V
                <span className="text-[10px] tracking-[0.16em]">...</span>
              </span>
            </div>
          </div>
        </div>

        <form action="#" method="post" className="w-full">
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Name
              </span>
              <input
                name="name"
                type="text"
                placeholder="Evan"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Company
              </span>
              <input
                name="company"
                type="text"
                placeholder="Microsoft"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Your Email
              </span>
              <input
                name="email"
                type="email"
                placeholder="evan@microsoft.com"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
            <label className="block">
              <span className="text-[16px] font-semibold tracking-[-0.04em]">
                Your Phone
              </span>
              <input
                name="phone"
                type="tel"
                placeholder="Your number phone"
                className="mt-4 h-8 w-full border-0 border-b border-black/20 bg-transparent px-0 text-[14px] text-black outline-none placeholder:text-black/22 focus:border-black"
              />
            </label>
          </div>

          <fieldset className="mt-8">
            <legend className="text-[16px] font-semibold tracking-[-0.04em]">
              I&apos;m interested in...
            </legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {contactInterestItems.map((item) => (
                <label key={item} className="cursor-pointer">
                  <input
                    type="checkbox"
                    name="interest"
                    value={item}
                    className="peer sr-only"
                  />
                  <span className="inline-flex h-11 items-center justify-center rounded-full border border-black/20 px-5 text-[15px] font-medium tracking-[-0.04em] transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white hover:border-black">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="text-[16px] font-semibold tracking-[-0.04em]">
              Project Budget (USD)
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {budgetItems.map((item) => (
                <label key={item} className="cursor-pointer">
                  <input
                    type="radio"
                    name="budget"
                    value={item}
                    className="peer sr-only"
                  />
                  <span className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/20 px-6 text-[16px] font-medium tracking-[-0.04em] transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white hover:border-black">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block">
            <span className="text-[16px] font-semibold tracking-[-0.04em]">
              Tell us about your project.
            </span>
            <textarea
              name="project"
              rows={3}
              placeholder="Write something concise..."
              className="mt-4 w-full resize-none border-0 border-b border-black/20 bg-transparent px-0 text-[14px] leading-6 text-black outline-none placeholder:text-black/22 focus:border-black"
            />
          </label>

          <button
            type="submit"
            className="mt-9 inline-flex h-13 w-full max-w-[420px] items-center justify-center rounded-full bg-black text-[18px] font-semibold tracking-[-0.04em] text-white transition hover:-translate-y-0.5 hover:bg-black/84"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

function AutomationHeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-28 text-white sm:px-10 xl:px-[120px]">
      <div className="automation-hero-gradient absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.88)_86%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1.2px)] [background-size:26px_26px] opacity-[0.06]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
          AI Automation Services
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
          AI agents that run the work.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-white/68 sm:text-xl">
          Turn repeatable marketing, sales, support, and operations tasks into
          workflows that plan, write, publish, update systems, and follow up.
        </p>

        <div className="chatgpt-composer mt-10 w-full max-w-[640px] overflow-hidden rounded-[28px] border border-black/14 bg-white p-3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="chatgpt-input-field min-h-[112px] rounded-[20px] bg-white px-4 py-4 text-sm leading-6 text-zinc-900 sm:text-base">
            {heroPromptLines.map((line, index) => (
              <span
                key={line}
                className={`chatgpt-typed-line chatgpt-typed-line-${index + 1}`}
                style={
                  {
                    "--typing-width": `${line.length}ch`,
                  } as CSSProperties
                }
              >
                {line}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center text-black">
                <Plus className="size-5" />
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center text-black">
                <Mic className="size-5" />
              </span>
              <span className="chatgpt-send grid size-10 place-items-center rounded-full bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <ArrowUp className="size-5" />
              </span>
            </div>
          </div>
        </div>

        <div className="chatgpt-execution-panel mt-4 w-full max-w-[640px] overflow-hidden rounded-[24px] border border-white/70 bg-white p-4 text-left shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
          <div className="relative flex min-h-7 items-center gap-3">
            <LoaderCircle className="chatgpt-execution-spinner size-5 shrink-0 text-blue-300" />
            <Check className="chatgpt-execution-done-icon size-5 shrink-0 rounded-full bg-emerald-400 p-1 text-black" />
            <p className="chatgpt-execution-title text-sm font-semibold text-black/78">
              Executing task
            </p>
            <p className="chatgpt-execution-complete-title text-sm font-semibold text-black">
              Task executed
            </p>
          </div>

          <div className="chatgpt-execution-tasks mt-2 space-y-1">
            {heroExecutionTasks.map((task, index) => (
              <div
                key={task}
                className={`chatgpt-execution-task chatgpt-execution-task-${index + 1} flex items-center gap-3 px-3 py-1`}
              >
                <span className="chatgpt-task-loader relative size-4 shrink-0 rounded-full border border-black/18 border-t-blue-500" />
                <span className="min-w-0 flex-1 text-sm font-medium text-black/66">
                  {task}
                </span>
                <span className="chatgpt-task-check grid size-5 shrink-0 place-items-center rounded-full bg-emerald-400 text-black">
                  <Check className="size-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiAutomationShowcase() {
  return (
    <>
      <AutomationHeroSection />

      <section className="relative isolate overflow-hidden bg-black px-7 py-10 sm:px-12 lg:px-20">
        <HeroAgentTabs />
      </section>

      <section className="relative isolate overflow-hidden bg-[#070707] px-6 py-24 text-white sm:px-10 lg:py-28 xl:px-[120px]">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.055),transparent_34%),linear-gradient(180deg,#090909_0%,#050505_100%)]" />

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.045em] text-white">
              No doubt, scaling operations is hard.
              <span className="block pt-3">
                Without automation, it is even harder.
              </span>
            </h2>
            <p className="mt-4 text-[16px] font-medium text-white/50">
              We know it, we have built through it.
            </p>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <PixelMotionPanel />
              <h3 className="mt-16 text-[16px] font-semibold tracking-[-0.04em] text-white/76">
                Your business without automation
              </h3>
              <ul className="mt-9 space-y-5">
                {frictionItems.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[14px] font-medium text-white/66">
                    <X className="mt-1 size-4 shrink-0 text-white/42" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:-mt-10">
              <PixelMotionPanel featured />
              <h3 className="mt-16 text-[24px] font-semibold tracking-[-0.04em] text-white">
                Your business with{" "}
                <span className="techsaws-underline relative inline-block">
                  TechSaws
                </span>{" "}
                automation
              </h3>
              <ul className="mt-9 space-y-5">
                {automationWins.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[16px] font-medium text-white">
                    <Check className="mt-1 size-4 shrink-0 text-white/62" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TopAutomationHero />

      <FaqSection
        items={aiAutomationFaqs}
        heading={
          <>
            <span className="text-white">FAQs.</span> Answers to the most
            common questions about building reliable AI workflows, agents, and
            integrations.
          </>
        }
      />

      <CtaSection
        title="Automate Your Next Workflow"
        description="Turn repetitive marketing, sales, support, and operations tasks into AI-powered systems that plan, execute, publish, update, and follow up without manual busywork."
        buttonText="Start AI Automation"
      />
    </>
  );
}


