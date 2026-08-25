"use client";

import { useMemo, useState } from "react";
import {
  siAnthropic,
  siApollographql,
  siAsana,
  siCalendly,
  siClickup,
  siDropbox,
  siGmail,
  siGoogledocs,
  siGoogledrive,
  siGooglegemini,
  siGooglecalendar,
  siGooglemeet,
  siGooglesheets,
  siGoogleslides,
  siHubspot,
  siMailchimp,
  siSquarespace,
  siTypeform,
  siWebflow,
  siZoom,
} from "simple-icons";

const tabs = ["All Apps", "CRMs", "Marketing", "Calendar", "AI", "File Management"];

type AppItem = {
  name: string;
  icon: string;
  color: string;
  categories: string[];
};

const localIcons = {
  zoom: siZoom,
  googlemeet: siGooglemeet,
  googleslides: siGoogleslides,
  apollographql: siApollographql,
  squarespace: siSquarespace,
  webflow: siWebflow,
  mailchimp: siMailchimp,
  googledrive: siGoogledrive,
  dropbox: siDropbox,
  googledocs: siGoogledocs,
  gmail: siGmail,
  googlesheets: siGooglesheets,
  calendly: siCalendly,
  googlecalendar: siGooglecalendar,
  typeform: siTypeform,
  anthropic: siAnthropic,
  googlegemini: siGooglegemini,
  asana: siAsana,
  clickup: siClickup,
  hubspot: siHubspot,
} as const;

const localBrandLogos: Record<string, string> = {
  microsoftteams: "/assets/brand/technology/microsoft-teams.svg",
  microsoftoutlook: "/assets/brand/technology/microsoft-outlook.svg",
  apify: "/assets/brand/technology/apify.svg",
  docusign: "/assets/brand/technology/docusign.svg",
  pandadoc: "/assets/brand/technology/pandadoc.png",
  typeform: "/assets/brand/technology/typeform.svg",
  microsoft: "/assets/brand/technology/microsoft.svg",
  groq: "/assets/brand/technology/groq.svg",
  salesforce: "/assets/brand/technology/salesforce.svg",
  openai: "/assets/brand/technology/openai.svg",
  mondaydotcom: "/assets/brand/technology/monday.svg",
};

const apps: AppItem[] = [
  { name: "Zoom", icon: "zoom", color: "2D8CFF", categories: ["All Apps", "Calendar"] },
  { name: "Microsoft Teams", icon: "microsoftteams", color: "6264A7", categories: ["All Apps", "Calendar"] },
  { name: "Google Meet", icon: "googlemeet", color: "00897B", categories: ["All Apps", "Calendar"] },
  { name: "Outlook", icon: "microsoftoutlook", color: "0078D4", categories: ["All Apps", "Calendar"] },
  { name: "Google Slides", icon: "googleslides", color: "FBBC04", categories: ["All Apps", "Marketing"] },
  { name: "Phantom Buster", icon: "ghost", color: "FFFFFF", categories: ["All Apps", "Marketing"] },
  { name: "Apollo", icon: "apollographql", color: "FFFFFF", categories: ["All Apps", "CRMs", "Marketing"] },
  { name: "Instantly", icon: "zapier", color: "FF4A00", categories: ["All Apps", "Marketing", "CRMs"] },
  { name: "Apify", icon: "apify", color: "0B3A75", categories: ["All Apps", "Marketing"] },
  { name: "Squarespace", icon: "squarespace", color: "FFFFFF", categories: ["All Apps", "Marketing"] },
  { name: "Webflow", icon: "webflow", color: "146EF5", categories: ["All Apps", "Marketing"] },
  { name: "MailChimp", icon: "mailchimp", color: "FFE01B", categories: ["All Apps", "Marketing"] },
  { name: "Docusign", icon: "docusign", color: "4C6EF5", categories: ["All Apps", "File Management"] },
  { name: "PandaDoc", icon: "pandadoc", color: "00B875", categories: ["All Apps", "File Management"] },
  { name: "Google Drive", icon: "googledrive", color: "FCCD48", categories: ["All Apps", "File Management"] },
  { name: "Dropbox", icon: "dropbox", color: "0061FF", categories: ["All Apps", "File Management"] },
  { name: "Google Docs", icon: "googledocs", color: "4285F4", categories: ["All Apps", "File Management"] },
  { name: "Gmail", icon: "gmail", color: "EA4335", categories: ["All Apps", "Marketing"] },
  { name: "Google Sheets", icon: "googlesheets", color: "0F9D58", categories: ["All Apps", "File Management"] },
  { name: "Microsoft 365 Calendar", icon: "microsoft", color: "0078D4", categories: ["All Apps", "Calendar"] },
  { name: "Calendly", icon: "calendly", color: "006BFF", categories: ["All Apps", "Calendar"] },
  { name: "Google Calendar", icon: "googlecalendar", color: "4285F4", categories: ["All Apps", "Calendar"] },
  { name: "Typeform", icon: "typeform", color: "FFFFFF", categories: ["All Apps", "Marketing"] },
  { name: "Groq", icon: "groq", color: "F55036", categories: ["All Apps", "AI"] },
  { name: "Anthropic Claude", icon: "anthropic", color: "D4A27F", categories: ["All Apps", "AI"] },
  { name: "ChatGPT", icon: "openai", color: "FFFFFF", categories: ["All Apps", "AI"] },
  { name: "Google Gemini AI", icon: "googlegemini", color: "8AB4F8", categories: ["All Apps", "AI"] },
  { name: "Salesforce", icon: "salesforce", color: "00A1E0", categories: ["All Apps", "CRMs"] },
  { name: "Asana", icon: "asana", color: "F06A6A", categories: ["All Apps", "CRMs"] },
  { name: "ClickUp", icon: "clickup", color: "7B68EE", categories: ["All Apps", "CRMs"] },
  { name: "Monday.com", icon: "mondaydotcom", color: "FF3D57", categories: ["All Apps", "CRMs"] },
  { name: "HubSpot", icon: "hubspot", color: "FF7A59", categories: ["All Apps", "CRMs", "Marketing"] },
];

function AppIcon({ app }: { app: AppItem }) {
  const icon = localIcons[app.icon as keyof typeof localIcons];
  const brandLogo = localBrandLogos[app.icon];
  const iconColor = app.color === "FFFFFF" ? "111111" : app.color;

  return (
    <span className="grid size-12 shrink-0 place-items-center">
      {brandLogo ? (
        // These are bundled project assets, so they never depend on a runtime CDN.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brandLogo}
          alt=""
          className={`size-12 object-contain ${app.icon === "openai" ? "brightness-0" : ""}`}
        />
      ) : icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-11"
          fill={`#${iconColor}`}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span
          aria-hidden="true"
          className="grid size-12 place-items-center text-base font-black tracking-[-0.04em]"
          style={{ color: `#${iconColor}` }}
        >
          {app.name
            .split(/\s|\./)
            .filter(Boolean)
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </span>
      )}
    </span>
  );
}

export function TechnologySection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const visibleApps = useMemo(() => {
    if (activeTab === "All Apps") {
      return apps;
    }

    const matching = apps.filter((app) => app.categories.includes(activeTab));
    const extras = apps.filter((app) => !app.categories.includes(activeTab));
    return [...matching, ...extras].slice(0, 16);
  }, [activeTab]);

  return (
    <section className="bg-white px-4 py-24 text-black sm:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="w-full text-[48px] font-medium leading-[1.18] tracking-[-0.045em] text-black/42">
          <span className="text-black">Technology.</span>{" "}
          We work confidently across hundreds of apps - so you don&apos;t have to. From setup to seamless integration, we handle it all while you focus on what matters.
        </h2>

        <div className="mx-auto mt-24 w-full max-w-[1280px] border-b border-black/10">
          <div className="flex flex-wrap gap-8">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-5 text-base font-semibold transition ${
                    isActive
                      ? "border-b border-blue-500 text-blue-500"
                      : "text-black/54 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1280px] gap-x-16 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleApps.map((app) => (
            <div
              key={`${activeTab}-${app.name}`}
              className="flex min-h-12 items-center gap-4"
            >
              <AppIcon app={app} />
              <span className="text-lg font-semibold tracking-[-0.04em] text-black">
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
