import {
  Users,
  Award,
  Trophy,
  Building2,
} from "lucide-react";
export const personalInfo = {
  name: "Vishwas Yeleshwaram",
  title: "Developer • Leader • Researcher",
  tagline: "Building innovative solutions at the intersection of technology and impact",
  email: "yvishwas40@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishwas40/",
  github: "https://github.com/yvishwas40",
  location: "Hyderabad, India",
};

export const aboutMe = {
  bio: `I'm a passionate technologist and leader with a deep interest in building solutions that make a difference. With experience spanning software development, research, and community leadership, I thrive on tackling complex problems and driving meaningful impact.

My journey has taken me through various roles - from leading technical teams to publishing research papers, from organizing major events to securing internships at top organizations. I believe in the power of technology to transform lives and am committed to continuous learning and innovation.`,
  highlights: [
    "Full-stack development expertise",
    "Published researcher in AI/ML",
    "Community builder & mentor",
    "Award-winning project leader",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Evenza Event Management Platform",
    description: "Designed and developed a full-stack event management platform that streamlines the entire event lifecycle—from event creation and attendee registration to payments, check-ins, and real-time communication—delivering a smooth and efficient experience for both organizers and participants.",
    technologies: ["Node.js", "Express.js", "mongodb", "React", "Sheets API"],
    link: "https://evenza-2pms.vercel.app/",
    github: "https://github.com/yvishwas40/Evenza.git",
    featured: true,
  },
  {
    id: 2,
    title: "Mathematics Premier League (MPL)",
    description: "A full-stack cricket-themed mathematics quiz game that simulates real match flow while reinforcing problem-solving skills. The platform supports team management, parallel matches, animated in-game events, and persistent game history storage, offering an engaging and scalable competitive learning experience.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://mpl2025.vercel.app/",
    github: "https://github.com/rmccbit/mpl2025.git",
    featured: true
  },{
  id: 3,
  title: "My Digital Dairy – Life Tracking Dashboard",
  description: "A personal life-tracking Digital Dairy that enables users to log daily activities, mood, habits, and finances through a clean, calendar-driven experience. The application is built with a scalable, type-safe architecture, real-time cloud storage, and smooth animations to deliver a reliable and intuitive self-tracking system.",
  technologies: [
    "Next.js 14 (App Router)",
    "TypeScript",
    "Firebase Firestore",
    "Firebase Authentication",
    "Tailwind CSS",
    "Framer Motion"
  ],
  link: "https://digital-dairy-two.vercel.app/",
  github: "https://github.com/vishwaschary40/Digital-Dairy.git",
  featured: true
},


  {
    id: 4,
    title: "Pravah – Smart Document Verification System",
    description: "An AI-powered document verification platform that automates authenticity checks using computer vision, OCR, and deep learning. The system enables secure document ingestion, real-time validation, and anomaly detection to identify tampered or fraudulent documents with high accuracy.",
    technologies: [
      "Computer Vision",
      "OCR (Tesseract, EasyOCR)",
      "Deep Learning",
      "FastAPI",
      "Firebase",
      "LLMs"
    ],
    link: "https://github.com/Intell-Alpha/Pravah.git",
    github: "https://github.com/Intell-Alpha/Pravah.git",
    featured: false
  },
  {
    id: 5,
    title: "Insurance Claim Intelligence Engine",
    description: "An AI-driven claim analysis system that leverages Retrieval-Augmented Generation (RAG) to answer policy-related queries from insurance documents. The engine extracts structured entities from natural language inputs, retrieves relevant clauses with high precision, and generates transparent, audit-ready decisions with clear justifications.",
    technologies: [
      "RAG (LangChain)",
      "FAISS",
      "Pinecone",
      "spaCy",
      "Regex",
      "FastAPI",
      "Streamlit"
    ],
    link: "https://github.com/yvishwas40/Insurance-Claim.git",
    github: "https://github.com/yvishwas40/Insurance-Claim.git",
    featured: true
  },
  {
    id: 6,
    title: "AI Journal App",
    description: "A full-stack AI-powered journaling application that analyzes user entries in real time to generate personalized summaries and mood insights. The platform focuses on secure data handling and an intuitive timeline-based experience to enhance self-reflection and daily engagement.",
    technologies: [
      "MERN Stack",
      "TailwindCSS",
      "Google Gemini LLM",
      "JWT Authentication",
      "MongoDB"
    ],
    link: "https://ai-journal-app-phi.vercel.app/",
    github: "https://github.com/yvishwas40/AI-journal-app.git",
    featured: true
  },
  {
    id: 7,
    title: "Recipe Recommender",
    description: "A machine learning–based recipe recommendation system that suggests personalized dishes based on user preferences and available ingredients. The application leverages text-based feature extraction and dimensionality reduction to deliver accurate, intuitive, and fast recipe discovery through a simple interactive web interface.",
    technologies: [
      "Python",
      "Machine Learning",
      "TF-IDF",
      "PCA",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Flask / Streamlit"
    ],
    link: "#",
    github: "https://github.com/yvishwas40/Recipe-Recommender",
    featured: true
},
{
  id: 8,
  title: "Regional Voice Assistant with Agentic AI",
  description: "A voice-first AI agent designed for real-time, interactive services with an agentic backend. The system supports low-latency speech recognition, intelligent task planning, and natural voice responses, enabling seamless conversational workflows through a live web dashboard.",
  technologies: [
    "Python",
    "FastAPI",
    "WebSockets",
    "faster-whisper",
    "edge-tts",
    "Groq LLM",
    "Agentic AI"
  ],
  link: "https://github.com/yvishwas40/voice_agent.git",
  github: "https://github.com/yvishwas40/voice_agent.git",
  featured: false
},
{
  id: 9,
  title: "Sudhee – Ramanujan Maths Club Fest Website",
  description: "The official event website for Sudhee, the annual fest of the Ramanujan Maths Club. The platform provides event details, schedules, and announcements through a fast, responsive, and visually engaging interface, designed to effectively showcase the fest and improve participant outreach.",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Vercel"
  ],
  link: "https://rmcsudhee.vercel.app",
  github: "https://github.com/rmccbit/Sudhee_website",
  featured: true
},
{
  id: 10,
  title: "EcoMart – Sustainable E-commerce Platform",
  description: "A sustainability-focused e-commerce platform inspired by Walmart’s UI that helps users make environmentally conscious shopping decisions. Each product features an eco score, detailed sustainability metadata, and greener alternatives, along with a gamified eco-points system to encourage responsible purchasing.",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "FastAPI",
    "Python",
    "Pandas",
    "Docker",
    "REST APIs",
    "Rule-Based Scoring System"
  ],
  link: "https://github.com/yvishwas40/ecomart.git",
  github: "https://github.com/yvishwas40/ecomart.git",
  featured: true
}

];

export const leadershipRoles = [
  {
    id: 1,
    role: "Vice President",
    organization: "Ramanujan Maths Club - CBIT",
    duration: "2024 - Present",
    description: "Leading a team of 30+ members to organize math workshops, competitions, and outreach programs,Organized the annual fest 'Sudhee' with 500+ participants.",
    icon: Users,
  },
  {
    id: 2,
    role: "Campus Ambassador ",
    organization: "GeeksforGeeks",
    duration: "2024 - 2025",
    description: "served as a bridge between GeeksforGeeks and my college community, promoting technical awareness and engagement. My role involved organizing events, spreading opportunities related to coding and development, and helping peers access valuable resources to strengthen their programming skills. ",
    icon: Users,
  },
  {
    id: 3,
    role: "Editor - Business",
    organization: "Transcendent CBIT",
    duration: "2024 - 2025",
    description: "Overseeing all business-related content to ensure accuracy and quality. Writing and analyzing insightful articles, reports, and newsletters. Collaborating with writers to maintain editorial standards and streamline content creation processes, thereby enhancing overall efficiency and engagement.",
    icon: Award,
  },
  {
    id: 4,
    role: "Organizer",
    organization: "NeuroVerse Tech Fest",
    duration: "2025",
    description: "Organized Tech Fest 'NeuroVerse' with 1000+ attendees, coordinating logistics, managing teams, and ensuring smooth execution of events and workshops.",
    icon: Trophy,
  },
];

export const research = [
  {
    id: 1,
    title: "Entropy-Guided Active Learning Framework with Hybrid Acoustic and Deep Self-Supervised Features for Dysarthria Detection",
    publication: "IEEE International Conference on Information and Communication Technology (CICT-2025).",
    year: "2025",
    abstract: "Proposed a novel active learning framework combining acoustic and deep self-supervised features to improve dysarthria detection accuracy with reduced labeled data requirements.",
    link: "https://drive.google.com/file/d/1CgNpU4kcUkX2LzXO7mdwCdZfGe47Mgwi/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Application of financial mathematics for personal finance management",
    publication: "5th Research Day 2023 - CBIT",
    year: "2023",
    abstract: "How financial mathematics empowers individuals to make informed personal finance decisions by applying concepts such as compound interest, risk assessment, and portfolio optimization. It demonstrates real-world applications in budgeting, investing, debt management, and retirement planning to achieve long-term financial security.",
    link: "https://drive.google.com/file/d/1IAgTI3gs7WZi_Pqdx79oFK1CRhmdmrp3/view?usp=sharing",
  }
];

export const mediaEvents = [
  {
    id: 1,
    title: "Best Innovation Project Award 2025",
    event: "Annual Excellence Awards - CSI Hyderabad Chapter",
    date: "June 2025",
    description: "Developing an AI-powered document verification system that automates authenticity checks using computer vision and deep learning.",
    type: "innovation",
  },
  {
    id: 2,
    title: "YUVA-2024 – Best Young Leader Award",
    event: "Yuva - NSS CBIT",
    date: "January 2024",
    description: "Recognized for outstanding leadership and community service.",
    type: "award",
  },
  {
    id: 3,
    title: "Best Poster Presentation Award",
    event: "Sudhee 2025",
    date: "March 2025",
    description: "Presented reseach Recipe Recommender System at Sudhee 2025 and won Best Poster Presentation Award.",
    type: "award",
  },
  {
    id: 4,
    title: "Workshop speaker and mentor",
    event: "RMC ML Bootcamp",
    date: "November 2024",
    description: "Conducted hands-on workshop on Mathematical Foundations of Machine Learning for 100+ students.",
    type: "workshop",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Hackweek 2025",
    organization: "CBIT Open Source Community",
    year: "2025",
    description: "contributed 30+ PRs to open-source projects, winning top 10th place among 1000+ participants.",
  },
  {
    id: 2,
    title: "Finalist - Code for Good Challenge",
    organization: "JP Morgan Chase & Co.",
    year: "2024",
    description: "Developed application For digitalizing Subhiksha NGO operations, reaching finals.",
  },
  {
    id: 3,
    title: "Best Article in Business Section - college magazine",
    organization: "Transcendent CBIT",
    year: "january",
    description: "Recognized for insightful analysis on 'The Future of Fintech' and 'Great Indian Scams' in the college magazine.",
  },
  {
    id: 4,
    title: "Global Rank 681",
    organization: "CodeChef Starters 131 Contest",
    year: "2024",
    description: "Achieved a global rank of 681 among 15,000+ participants in the competitive programming contest.",
  },
];

export const internships = [
  {
    id: 1,
    company: "IIIT Sricity",
    role: "Research Intern",
    duration: "August 2025 - November 2025",
    description: "Worked on semi supervised learning techniques for medical speech analysis, focusing on dysarthria detection for lesser labelled data scenarios.",
    logo: Building2,
  },
  {
    id: 2,
    company: "Vishwam AI X IIIT Hyderabad",
    role: "AI Intern",
    duration: "June 2025 - August 2025",
    description: "Worked on local language LLMs and agentic AI systems for voice-first applications.",
    logo: Building2,
  },
  {
    id: 3,
    company: "Bluestocks",
    role: "SDE Intern",
    duration: "January 2025 - February 2025",
    description: "Worked as a Software Development Engineer Intern at Bluestocks Finance, leading agile development efforts while building and integrating scalable backend services with optimized databases. Contributed to the end-to-end development and deployment of an IPO-tracking web platform, collaborating closely with frontend, UI/UX, and QA teams to ensure performance and timely delivery.",
    logo: Building2,
  },
];

export const certifications = [
  {
    id: 1,
    name: "AI - Associate",
    issuer: "Salesforce - Trailhead",
    date: "2024",
  },
  {
    id: 2,
    name: "Foundations of Data Science",
    issuer: "Infosys Springboard",
    date: "2024",
  },
  {
    id: 3,
    name: "Full Stack Web Development Certificate",
    issuer: "Udemy",
    date: "2023",
  }
];

export const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "Java", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "Django", "Spring Boot"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] }
];
