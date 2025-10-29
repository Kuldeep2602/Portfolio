import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import { projects } from '../data/projects';

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
                    <OptimizedImage
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
