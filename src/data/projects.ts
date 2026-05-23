
export interface Project {
  id: number;
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Assessment Creator',
    description: 'An async LLM-powered assessment generation platform that turns teacher specifications into validated, schema-bound assessments.',
    highlights: [
      'Designed BullMQ and Redis workers to decouple long-running LLM generation from the request cycle.',
      
    ],
    tags: ['LLM', 'Prompt Engineering', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'BullMQ'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=75',
    demoUrl: 'https://app.kuldeep2602.me/home',
    codeUrl: 'https://github.com/Kuldeep-Clevrr/Task-manager'
  },
  {
    id: 2,
    title: 'AI-Powered Analytics Agent',
    description: 'A full-stack AI analytics application that uses agentic reasoning to analyze Shopify store data and generate business insights.',
    highlights: [
      'Implemented a LangGraph and ReAct pipeline for multi-step reasoning over e-commerce metrics.',
      
    ],
    tags: ['Python', 'LangGraph', 'ReAct Agent', 'Gemini API', 'Shopify API', 'LangChain'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=75',
    demoUrl: 'https://lang-agent-ajdr.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/lang_agent'
  },
  {
    id: 3,
    title: 'Buzz',
    description: 'An intelligent link management app for parsing URLs, extracting key content, and saving deferred reading links.',
    highlights: [
      'Built an intelligent link parsing system that improves information retrieval from URLs.',
      'Developed a custom UI component library for performance and design consistency.',
      'Designed a deferred-reading workflow to reduce tab overload and cognitive load.'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Custom UI Library'],
    image: 'https://i.ibb.co/7TML0nQ/Screenshot-2025-05-19-014707.png',
    demoUrl: 'https://buzz-fe-1.vercel.app',
    codeUrl: 'https://github.com/Kuldeep2602/buzz'
  },
  {
    id: 4,
    title: 'CI/CD Pipeline with GitHub Actions & AWS',
    description: 'Implemented a zero-downtime CI/CD pipeline with GitHub Actions for automated deployment to AWS EC2, managed by PM2.',
    tags: ['GitHub Actions', 'AWS EC2', 'Next.js', 'PM2'],
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=75',
    demoUrl: 'https://ci-cd-bday.vercel.app/',
    codeUrl: 'https://lnkd.in/gxq4nsZb'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'An e-commerce app with secure Google OAuth/JWT authentication and seamless Razorpay payment integration.',
    image: '/images/ecommerce-new.png',
    demoUrl: 'https://e-com-ashen-iota.vercel.app',
    codeUrl: 'https://github.com/Kuldeep2602/e-commerce',
    tags: ['React', 'Node.js', 'Express', 'Tailwind', 'OAuth', 'Razorpay']
  },
  {
    id: 6,
    title: 'Chat-Room',
    description: 'A real-time chat application with Socket.IO. Create/join rooms and chat instantly.',
    tags: ['React', 'Socket.IO', 'Node.js'],
    image: 'https://i.ibb.co/gM4K5mTV/Screenshot-2025-05-19-015559.png',
    demoUrl: 'https://chat-app-fe-psi.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/chat_app_be'
  },
  {
    id: 7,
    title: 'Vigovia Travel Platform',
    description: 'A comprehensive travel planning platform with detailed pdf generator.',
    tags: ['React', 'Node.js', 'MongoDB', 'Authentication', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=75',
    demoUrl: 'https://vigovia-travel.vercel.app',
    codeUrl: 'https://github.com/Kuldeep2602/vigovia-travel'
  },
  {
    id: 8,
    title: 'News App',
    description: 'A modern news application with real-time updates and bookmark functionality.',
    tags: ['React Native', 'API', 'Firebase'],
    image: 'https://i.ibb.co/8nnLfHDD/Screenshot-2025-05-19-020139.png',
    demoUrl: 'https://expo.dev/accounts/kuldeepsingh1637/projects/news-app/builds/f9a57e9e-3d55-4644-983d-a059ba1c0e35',
    codeUrl: 'https://github.com/Kuldeep2602/news-app'
  },
];
