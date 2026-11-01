export const profile = {
  name: "Panadda Kusalapatcharin",
  shortName: "Panadda K.",
  firstName: "Panadda",
  initials: "G",
  role: "Senior Software Engineer",
  tagline:
    "I build and modernize enterprise fleet management systems, and keep them stable in production.",
  location: "Nonthaburi, Thailand",
  available: true,
  availableText: "Available for new opportunities",
  summary:
    "Senior Software Engineer specializing in enterprise fleet management systems, with 5+ years leading legacy-to-modern platform migrations (C# .NET to Java Spring Boot and Vue.js) and driving production stability through root-cause analysis. Proven track record mentoring engineers and coordinating cross-border delivery across Japan, China, and Vietnam teams.",
  phone: "(+66) 084-673-0296",
  email: "p.kusalapatcharin@gmail.com",
  linkedin: {
    label: "Panadda K.",
    url: "https://www.linkedin.com/in/p-kslpchr/",
  },
  github: { label: "ma12chx", url: "https://github.com/ma12chx" },
  resume: "Panadda-K_Resume.pdf",
};

export const highlights = [
  {
    title: "Platform migration",
    text: "Moved enterprise fleet management systems from C# (.NET) to Java (Spring Boot) and Vue.js.",
  },
  {
    title: "Production stability",
    text: "Cut recurring production incidents by fixing them at the root cause instead of patching symptoms.",
  },
  {
    title: "Cross-border delivery",
    text: "Aligned requirements between headquarters in Japan and development teams in China and Vietnam.",
  },
];

export const experience = [
  {
    company: "Transtron (Thailand) Co., Ltd.",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Jun 2024 – Present",
        bullets: [
          "Lead design, development, and maintenance of enterprise fleet management systems, translating customer requirements into scalable technical solutions.",
          "Reduced recurring production incidents through root-cause analysis and preventive fixes.",
          "Serve as technical consultant on code reviews, improving code quality and mentoring team members on best practices.",
          "Refactor legacy modules to improve scalability and maintainability.",
          "Manage deployments to internal test and production environments via Apache Guacamole.",
          "Author UI and functional design documentation used by cross-functional teams across 3 countries.",
          "Coordinate with headquarters (Japan) and development teams (China, Vietnam) to align requirements and resolve cross-border issues.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Mar 2021 – May 2024",
        bullets: [
          "Migrated enterprise fleet management systems from C# (.NET) to Java (Spring Boot) and Vue.js.",
          "Performed root-cause analysis on production incidents, reducing recurring issues at their source.",
          "Built and executed unit and integration test suites, improving release reliability.",
          "Deployed and maintained internal test and production environments through Apache Guacamole.",
          "Authored UI and functional design documentation.",
        ],
      },
    ],
  },
  {
    company: "Befirst-IT Network Solution Co., Ltd.",
    roles: [
      {
        title: "Software Developer",
        period: "Jul 2019 – Feb 2021",
        bullets: [
          "Developed and maintained web-based management systems using HTML/CSS, JavaScript, PHP, and MySQL.",
          "Designed and implemented features aligned with customer requirements.",
          "Provided post-deployment support and system maintenance.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Tixniverse",
    context: "Personal project, 2026",
    text: "A personal web application for collecting and keeping track of event tickets (concerts, fan meetings, festivals and more).",
    tags: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "SweetAlert2",
      "Supabase",
      "GitHub Actions",
      "GitHub Pages",
    ],
    url: "https://github.com/ma12chx/Tixniverse",
    accent: "purple",
    liveDemo: "https://ma12chx.github.io/Tixniverse/",
  },
  {
    title: "Message Sending Optimization",
    context: "On-the-Job Training, 2025",
    text: "Led performance work on message sending and cut redundant database accesses by refactoring logic, working on-site with the Chinese development team.",
    tags: ["JavaScript", "Performance", "Refactoring"],
    accent: "red",
  },
  {
    title: "Let's Hue",
    context: "Senior project, 2019",
    text: "A web-based order and delivery system with an integrated chatbot, built as the senior project for a Bachelor of Science in Computer Science.",
    tags: ["Node.js", "Web app", "Line Chatbot"],
    accent: "gold",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["Vue.js", "React.js", "Tailwind CSS"],
  },
  { group: "Backend", items: ["Spring Boot", ".NET"] },
  { group: "Programming", items: ["Java", "JavaScript", "C#", "Python"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SSMS", "Cassandra"] },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Docker", "Windows", "Linux", "Apache Guacamole"],
  },
];

export const languages = [
  { name: "Thai", level: "Native" },
  { name: "English", level: "TOEIC 845" },
];

export const training = {
  title: "On-the-Job Training",
  org: "Fujitsu Nanjing Software Technology Co., Ltd.",
  period: "Jan 2025 – Mar 2025",
  bullets: [
    "Led performance optimization to improve message sending performance.",
    "Reduced redundant database accesses through logic refactoring.",
    "Collaborated on-site with the Chinese development team on system optimization initiatives.",
  ],
};

export const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "King Mongkut's University of Technology North Bangkok",
  period: "2015 – 2019",
};
