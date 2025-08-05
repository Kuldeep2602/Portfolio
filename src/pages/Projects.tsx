import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Buzz',
    description: 'A social media platform allowing users to connect, share posts, and engage with content. Built with React, Node.js, and MongoDB for a seamless user experience.',
    imageUrl: 'https://i.ibb.co/7TML0nQ/Screenshot-2025-05-19-014707.png',
    demoUrl: 'https://buzz-fe-1.vercel.app',
    codeUrl: 'https://github.com/Kuldeep2602/buzz',
    tags: ['React', 'Node.js', 'MongoDB', 'tailwindcss']
  },
  {
    title: 'CI/CD Pipeline with GitHub Actions & AWS',
    description: 'Created a Next.js birthday greeting application with multiple themes. Configured GitHub Actions workflow for automated deployments. Set up secure SSH deployment to AWS EC2. Implemented PM2 for Node.js process management. Established zero-downtime deployments. Reduced deployment time from 30+ minutes to under 5 minutes. Eliminated manual deployment errors.',
    imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://ci-cd-bday.vercel.app/',
    codeUrl: 'https://lnkd.in/gxq4nsZb',
    tags: ['GitHub Actions', 'AWS EC2', 'Next.js', 'PM2']
  },
  {
    title: 'Chat-Room',
    description: 'A real-time chat application with Socket.IO. Create/join rooms and chat instantly.',
    imageUrl: 'https://i.ibb.co/gM4K5mTV/Screenshot-2025-05-19-015559.png',
    demoUrl: 'https://chat-app-fe-psi.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/chat_app_be',
    tags: ['React', 'Socket.IO', 'Node.js']
  },
  {
    title: 'News App',
    description: 'A modern news application with real-time updates and bookmark functionality.',
    imageUrl: 'https://i.ibb.co/8nnLfHDD/Screenshot-2025-05-19-020139.png',
    demoUrl: 'https://expo.dev/accounts/kuldeepsingh1637/projects/news-app/builds/f9a57e9e-3d55-4644-983d-a059ba1c0e35',
    codeUrl: 'https://github.com/Kuldeep2602/news-app',
    tags: ['React Native', 'API', 'Firebase']
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Hover over each card to see more details and links.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
