export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface BuildLogItem {
  year: string;
  title: string;
  role: string;
  description: string;
}

export interface PortfolioConfig {
  name: string;
  role: string;
  headline: string;
  description: string;
  location: string;
  status: string;
  academicLevel: string;
  education: {
    degree: string;
    specialization: string;
    college: string;
    university: string;
    status: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  skills: {
    programming: string[];
    aiMl: string[];
    web: string[];
    tools: string[];
  };
  projects: ProjectItem[];
  buildLog: BuildLogItem[];
}

export const portfolio: PortfolioConfig = {
  name: "Ashutosh Kumar Sharma",
  role: "AI/ML Developer | Full-Stack Developer | Problem Solver",
  headline: "AI/ML Developer & Full-Stack Developer",
  description:
    "Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, building practical AI-powered products, web applications, and developer tools.",
  location: "India",
  status: "Building",
  academicLevel: "Second Year",
  education: {
    degree: "B.Tech — Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    college: "Khalsa College of Engineering and Technology",
    university: "Affiliated with IKGPTU",
    status: "CURRENTLY PURSUING",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ashutosh.sharma.cse@gmail.com",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ak3121091-ctrl",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
  },
  skills: {
    programming: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"],
    aiMl: ["Machine Learning", "Computer Vision", "OpenCV", "AI APIs", "Data Processing"],
    web: ["React", "Next.js", "Node.js", "REST APIs", "Responsive UI"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Linux"],
  },
  projects: [
    {
      id: "campuspilot-ai",
      name: "CampusPilot AI",
      category: "AI / EdTech Platform",
      description:
        "An AI-powered study assistant designed to help students manage learning, revision, productivity and exam preparation.",
      technologies: ["Next.js", "React", "AI", "AWS", "DynamoDB", "Lambda"],
      features: [
        "AI-powered Q&A",
        "Study planner",
        "Exam reminders",
        "To-do management",
        "Previous-year-question analysis",
        "PDF/OCR based study assistance",
      ],
      githubUrl: "", // LINK COMING SOON
      liveUrl: "",   // LINK COMING SOON
    },
    {
      id: "gesture-recognition",
      name: "Hand Gesture Recognition System",
      category: "Computer Vision / Machine Learning",
      description:
        "Computer vision system that detects and recognizes hand gestures using camera input.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      features: [
        "Real-time webcam tracking",
        "Hand landmark detection",
        "Multi-gesture recognition",
      ],
      githubUrl: "", // LINK COMING SOON
      liveUrl: "",
    },
    {
      id: "haven-coffee",
      name: "Haven Coffee Shop",
      category: "Web Engineering / Frontend UI",
      description:
        "A modern responsive coffee shop website focused on clean UI, product presentation and responsive frontend design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive layout",
        "Product presentation",
        "Micro-interactions",
      ],
      githubUrl: "", // LINK COMING SOON
      liveUrl: "",
    },
    {
      id: "ai-study-assistant",
      name: "AI Study Assistant",
      category: "AI Productivity / Workspace",
      description:
        "An experimental AI-powered productivity and learning platform combining study planning, AI assistance and focus features.",
      technologies: ["React", "Next.js", "AI", "AWS"],
      features: [
        "Interactive study roadmap",
        "Contextual AI assistance",
        "Session focus manager",
      ],
      githubUrl: "", // LINK COMING SOON
      liveUrl: "",
    },
  ],
  buildLog: [
    {
      year: "2026",
      title: "Programming Club Coordinator",
      role: "Leadership & Mentorship",
      description:
        "Organizing programming sessions and helping students learn C++ and problem solving.",
    },
    {
      year: "2026",
      title: "AI / ML Development",
      role: "Applied AI & Computer Vision",
      description:
        "Building projects around computer vision, AI assistants and intelligent applications.",
    },
    {
      year: "2026",
      title: "Full-Stack Development",
      role: "Modern Web Engineering",
      description:
        "Developing modern web applications using React, Next.js and backend technologies.",
    },
  ],
};
