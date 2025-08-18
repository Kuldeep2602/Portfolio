import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Buzz',
    description: 'A social media platform allowing users to connect, share posts, and engage with content.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/800/600?random=1',
    demoUrl: 'https://buzz-kuldeep2602.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/buzz'
  },
  {
    id: 2,
    title: 'CI/CD Pipeline with GitHub Actions & AWS',
    description: 'Created a Next.js birthday greeting application with multiple themes. Configured GitHub Actions workflow for automated deployments. Set up secure SSH deployment to AWS EC2. Implemented PM2 for Node.js process management. Established zero-downtime deployments. Reduced deployment time from 30+ minutes to under 5 minutes. Eliminated manual deployment errors.',
    tags: ['GitHub Actions', 'AWS EC2', 'Next.js', 'PM2'],
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://ci-cd-bday.vercel.app/',
    codeUrl: 'https://lnkd.in/gxq4nsZb'
  },
  {
    id: 3,
    title: 'Chat-Room',
    description: 'A real-time chat application with Socket.IO. Create/join rooms and chat instantly.',
    tags: ['React', 'Socket.IO', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=2',
    demoUrl: 'https://chat-app-fe-psi.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/chat_app_be'
  },
  {
    id: 4,
    title: 'News App',
    description: 'A modern news application with real-time updates and bookmark functionality.',
    tags: ['React Native', 'API', 'Firebase'],
    image: 'https://picsum.photos/800/600?random=3',
    demoUrl: 'https://expo.dev/accounts/kuldeepsingh1637/projects/news-app/builds/f9a57e9e-3d55-4644-983d-a059ba1c0e35',
    codeUrl: 'https://github.com/Kuldeep2602/news-app'
  },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-200">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-medium">
            Kuldeep Singh
          </Link>
  
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Projects</h1>
         
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                      >
                        View Code <FiArrowRight className="ml-1" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                      >
                        Live Demo <FiExternalLink className="ml-1 text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default Work;
