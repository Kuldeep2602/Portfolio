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
    image: 'https://i.ibb.co/7TML0nQ/Screenshot-2025-05-19-014707.png',
    demoUrl: 'https://buzz-fe-1.vercel.app',
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
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Google OAuth + JWT security, Razorpay payments (INR ready), automated order notifications, and lightning-fast Tailwind CSS. Zero to production-ready with authentication, payments, admin panel, and email automation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    demoUrl: 'https://e-com-ashen-iota.vercel.app',
    codeUrl: 'https://github.com/Kuldeep2602/e-commerce',
    tags: ['React', 'Node.js', 'Express', 'Tailwind', 'OAuth', 'Razorpay']
  },
  {
    id: 4,
    title: 'Chat-Room',
    description: 'A real-time chat application with Socket.IO. Create/join rooms and chat instantly.',
    tags: ['React', 'Socket.IO', 'Node.js'],
    image: 'https://i.ibb.co/gM4K5mTV/Screenshot-2025-05-19-015559.png',
    demoUrl: 'https://chat-app-fe-psi.vercel.app/',
    codeUrl: 'https://github.com/Kuldeep2602/chat_app_be'
  },
  {
    id: 5,
    title: 'News App',
    description: 'A modern news application with real-time updates and bookmark functionality.',
    tags: ['React Native', 'API', 'Firebase'],
    image: 'https://i.ibb.co/8nnLfHDD/Screenshot-2025-05-19-020139.png',
    demoUrl: 'https://expo.dev/accounts/kuldeepsingh1637/projects/news-app/builds/f9a57e9e-3d55-4644-983d-a059ba1c0e35',
    codeUrl: 'https://github.com/Kuldeep2602/news-app'
  },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Navigation */}
      <nav className="py-4 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-3">My Projects</h1>
          <p className="text-base text-gray-600 font-light">A showcase of my recent work</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/50 p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-2/5 overflow-hidden rounded-xl h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-full md:w-3/5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-blue-600/80 bg-blue-50/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-medium text-gray-800/90 mb-3 group-hover:text-blue-600/90 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-600/80 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-3">
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white/40 hover:bg-white/60 text-gray-700/90 font-medium shadow-md rounded-lg px-4 py-2 gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg backdrop-blur-md border border-white/40"
                        >
                          <FiArrowRight className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-blue-100/60 hover:bg-blue-200/60 text-blue-700/90 font-medium shadow-md rounded-lg px-4 py-2 gap-2 text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg backdrop-blur-md border border-white/40"
                        >
                          <FiExternalLink className="w-4 h-4" /> Demo
                        </a>
                      )}
                    </div>
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
