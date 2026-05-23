import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import GlassBubbleText from '../components/GlassBubbleText';
import { projects, type Project } from '../data/projects';

const ProjectActions = ({ project }: { project: Project }) => {
  if (!project.codeUrl && !project.demoUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="abstract-mono inline-flex items-center bg-white dark:bg-white/10 hover:bg-[var(--blue)] text-gray-950 dark:text-gray-100 font-bold uppercase tracking-[0.08em] rounded-lg px-4 py-2 gap-2 text-xs transition-all duration-300 border-2 border-gray-950 dark:border-white/20 shadow-[4px_4px_0_rgba(17,17,17,0.10)]"
        >
          <FiArrowRight className="w-4 h-4 shrink-0" /> Code
        </a>
      )}
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="abstract-mono inline-flex items-center bg-[var(--red)] hover:bg-[var(--acid)] text-white hover:text-gray-950 font-bold uppercase tracking-[0.08em] rounded-lg px-4 py-2 gap-2 text-xs transition-all duration-300 border-2 border-gray-950 shadow-[4px_4px_0_rgba(17,17,17,0.10)]"
        >
          <FiExternalLink className="w-4 h-4 shrink-0" /> Demo
        </a>
      )}
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-5 md:p-6 text-gray-900 dark:text-white transition-colors duration-300">
      <nav className="py-2 px-1 sm:px-4 mb-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="abstract-mono text-sm font-bold uppercase tracking-[0.14em] text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 text-center"
        >
          <p className="abstract-sticker rotate-[-2deg] mb-4">Selected Works</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-950 dark:text-white mb-3 tracking-tight">
            <GlassBubbleText shimmer>Projects</GlassBubbleText>
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            AI systems, full-stack products, and infrastructure builds.
          </p>
        </motion.div>

        <section>
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group abstract-panel rounded-3xl p-4 sm:p-5 hover:-translate-y-1 ${index % 2 === 0 ? 'rotate-[0.3deg]' : 'rotate-[-0.3deg]'}`}
              >
                <div className="flex flex-col md:flex-row gap-5 items-start">
                  <div className="relative w-full md:w-2/5 h-48 sm:h-56 md:h-52 overflow-hidden rounded-2xl shrink-0 border-2 border-gray-950 dark:border-white/15">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 transform group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-950/40 via-transparent to-transparent" />
                    <span className="abstract-sticker absolute left-3 top-3 rotate-[-4deg] bg-[var(--red)] text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="w-full md:w-3/5 min-w-0 py-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 7).map((tag) => (
                        <span
                          key={tag}
                          className="abstract-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] text-gray-950 dark:text-white bg-[var(--acid)]/80 dark:bg-white/10 px-2.5 py-1 rounded-full border border-gray-950/20 dark:border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className="list-disc list-outside ml-4 mb-5 text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                        {project.highlights.slice(0, 2).map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <ProjectActions project={project} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
