export type TimelineItemProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
  active?: boolean;
  glowDot?: boolean;
  breathing?: boolean;
  index?: number;
};

export const experiences: TimelineItemProps[] = [
  {
    title: "Software Engineer",
    company: "Aptaero (formerly Airline Choice)",
    date: "2023 — PRESENT",
    description: "Focus on soft skills, system design and security.",
    bullets: [
      "Architected and implemented Digital Boarding Pass distribution for Android and iOS, including the end-to-end pipeline for pass generation and updates on both platforms.",
      "Lead team to successfully convert Xamarin based project to a new MAUI project and transition appropriate customers.",
      "Updated API authentication to utilize encoding/decoding JWT tokens",
      "Created and deployed multiple security related applications to airports utilizing biometric recognition for secure vetting.",
      "Integrated Swagger into legacy .NET APIs + autogenerating clients on appropriate applications.",
    ],
    tags: ["MAUI", "ASP.NET", "Azure Devops", "VMware", "Postman"],
    active: true,
    breathing: true,
  },
  {
    title: "Junior Developer",
    company: "Airline Choice",
    glowDot: true,
    date: "2022 — 2023",
    description: "Given the opportunity to focus on technical skills and fundamentals.",
    bullets: [
      "Converted VB.NET project to latest .NET framework.",
      "Developed a Report Generator application utilized internally to autonomously email scheduled reports to all customers.",
      "Helped transition team off of Team Foundation Studio (TFS) and onto .git workflow.",
      "Supported bugfixing and feature requests for Airline Choice Mobile.",
      "Developed and Certified with SITA an application for transmitting printer/scanner data to Airline Choice DCS via Citrix.",
    ],
    tags: ["Winforms", "C#", "SQL", "Xamarin", "Cron"],
  },
];
