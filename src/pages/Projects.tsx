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
    imageUrl: 'https://images.unsplash.com/photo-1607082349566-0c3c1cf485e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://buzz-kuldeep2602.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/buzz',
    tags: ['React', 'Node.js', 'MongoDB', 'tailwindcss']
  },
  {
    title: 'Chat-Room Application',
    description: 'A real-time chat application with Socket.IO. Create/join rooms and chat instantly with other users.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://chat-app-fe-psi.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/chat_app_be',
    tags: ['React', 'Socket.IO', 'Node.js', 'Real-time']
  },
  {
    title: 'News Mobile App',
    description: 'A modern news application with real-time updates and bookmark functionality built with React Native.',
    imageUrl: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://expo.dev/accounts/kuldeepsingh1637/projects/news-app/builds/f9a57e9e-3d55-4644-983d-a059ba1c0e35',
    codeUrl: 'https://github.com/Kuldeep2602/news-app',
    tags: ['React Native', 'API', 'Firebase', 'Mobile']
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations.',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    demoUrl: '#',
    codeUrl: 'https://github.com/Kuldeep2602/Portfolio',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with course management, video streaming, and progress tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    demoUrl: '#',
    codeUrl: '#',
    tags: ['React', 'Node.js', 'MySQL', 'Express']
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, team features, and advanced filtering.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    demoUrl: '#',
    codeUrl: '#',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI']
  },

  
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
