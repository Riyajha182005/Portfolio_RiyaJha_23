export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  contact: ContactInfo;
  resumeUrl: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI / Automation' | 'Machine Learning' | 'Web & Software';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TechnicalSkills {
  languages: string[];
  aiMl: string[];
  aiAutomation: string[];
  web: string[];
  databasesTools: string[];
  concepts: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: TechnicalSkills;
  skillCategories: SkillCategory[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Riya Jha',
    title: 'Software Developer & AI Engineer',
    bio: 'Engineering student with hands-on experience in software development, Generative AI, and enterprise applications. Passionate about building practical solutions and exploring emerging technologies.',
    contact: {
      phone: '9711024310',
      email: 'connectwithriya23@gmail.com',
      location: 'Delhi, India',
      linkedin: 'linkedin.com/in/RiyaJha',
      linkedinUrl: 'https://linkedin.com/in/RiyaJha',
      github: 'github.com/RiyaJha',
      githubUrl: 'https://github.com/RiyaJha',
    },
    resumeUrl: 'assets/resume.pdf',
  },
  education: [
    {
      institution: 'Guru Gobind Singh Indraprastha University',
      degree: 'Bachelor of Technology in Information Technology',
      period: '2023 - 2027',
      location: 'Delhi, India',
      gpa: '9.24 / 10.00',
      description:
        'Engineering student with hands-on experience in software development, Generative AI, and enterprise applications. Passionate about building practical solutions and exploring emerging technologies.',
    },
  ],
  experience: [
    {
      company: 'Pneumax Pneumatic India Pvt. Ltd.',
      role: 'SE Intern',
      period: 'Jun 2026 – Aug 2026',
      location: 'Greater Noida, UP',
      highlights: [
        'Worked on the company’s internal Vendor Portal software to support vendor-related business workflows.',
        'Worked with vendor information modules including general information, specific information, warranty information, and vendor-submitted remarks.',
        'Supported software testing, debugging, and validation of vendor portal features.',
      ],
      skills: ['.NET Core', 'Vendor Portals', 'Software Testing', 'Debugging', 'Enterprise Software'],
    },
    {
      company: 'Defence Research and Development Organisation (DRDO) – SSPL',
      role: 'Research Intern',
      period: 'Feb 2026 – Apr 2026',
      location: 'Delhi, India',
      highlights: [
        'Worked on predictive maintenance and reliability analysis of Power MOSFETs used in defense systems.',
        'Analyzed failure patterns and semiconductor device data to support reliability assessment.',
        'Explored failure-rate prediction under accelerated stress conditions.',
      ],
      skills: ['Predictive Maintenance', 'Reliability Analysis', 'Semiconductor Analysis', 'Python', 'Failure-Rate Prediction'],
    },
    {
      company: 'IGDTUW',
      role: 'Generative AI Intern',
      period: 'Jun 2025 – Jul 2025',
      location: 'Delhi, India',
      highlights: [
        'Worked with Generative AI and Large Language Models for practical automation use cases.',
        'Applied prompt optimization techniques to improve LLM output quality.',
        'Explored LLM-based automation workflows and AI-assisted solutions.',
      ],
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Automation Workflows', 'Python'],
    },
  ],
  projects: [
    {
      title: 'AI Scholarship Alert System',
      technologies: ['Python', 'n8n', 'LLMs', 'Telegram API'],
      category: 'AI / Automation',
      description: 'An AI-driven automated alert and chatbot platform delivering targeted scholarship notifications to users in real time.',
      highlights: [
        'Built an AI-powered Telegram chatbot that delivers real-time scholarship alerts to users through automated workflows.',
        'Designed automated workflows using n8n for processing scholarship information and handling message delivery.',
        'Integrated LLM capabilities to generate intelligent responses and improve user interaction.',
      ],
      githubUrl: 'https://github.com/RiyaJha',
    },
    {
      title: 'RAG + Calculator Agent',
      technologies: ['Python', 'LangGraph', 'Claude', 'FAISS'],
      category: 'AI / Automation',
      description: 'An intelligent multi-agent system combining computational calculation agents with context-aware knowledge-base retrieval.',
      highlights: [
        'Developed an AI application combining a calculator agent with knowledge-base search using LangGraph.',
        'Implemented retrieval-augmented generation using FAISS for searching and retrieving relevant information from a knowledge base.',
        'Integrated Claude as the LLM to process queries and generate context-aware responses.',
      ],
      githubUrl: 'https://github.com/RiyaJha',
    },
    {
      title: 'Invisible Cloak',
      technologies: ['Python', 'OpenCV', 'Computer Vision'],
      category: 'Machine Learning',
      description: 'Real-time computer vision masking and cloak effect rendering using color detection and dynamic background subtraction.',
      highlights: [
        'Developed a real-time object masking application using color detection and background subtraction.',
        'Implemented computer vision techniques to detect and mask selected objects in real-time video frames.',
      ],
      githubUrl: 'https://github.com/RiyaJha',
    },
  ],
  skills: {
    languages: ['Python', 'C++', 'JavaScript'],
    aiMl: ['Machine Learning', 'Generative AI', 'NumPy', 'Pandas', 'OpenCV', 'Prompt Engineering'],
    aiAutomation: ['LangChain', 'LangGraph', 'n8n', 'LLMs', 'RAG', 'FAISS'],
    web: ['HTML', 'CSS', 'JavaScript', 'Angular', '.NET Core'],
    databasesTools: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    concepts: ['Data Structures & Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Automation', 'Database Systems'],
  },
  skillCategories: [
    {
      category: 'Languages',
      skills: ['Python', 'C++', 'JavaScript'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Generative AI', 'NumPy', 'Pandas', 'OpenCV', 'Prompt Engineering'],
    },
    {
      category: 'AI Agents & Automation',
      skills: ['LangChain', 'LangGraph', 'n8n', 'LLMs', 'RAG', 'FAISS'],
    },
    {
      category: 'Web Development',
      skills: ['Angular', 'HTML', 'CSS', 'JavaScript', '.NET Core'],
    },
    {
      category: 'Databases & Tools',
      skills: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
    {
      category: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Automation', 'Database Systems'],
    },
  ],
};
