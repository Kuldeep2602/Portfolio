import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import InteractiveSignalGarden from '../components/InteractiveSignalGarden';

const socialLinks = [
  { name: 'Resume', icon: FileText, href: '/resume', internal: true },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Kuldeep2602' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/kuldeep-singh2602/' },
  { name: 'Contact', icon: Mail, href: 'https://cal.com/kuldeep-singh' }
];

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 105,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="relative min-h-[86vh] overflow-hidden px-1 py-4 md:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.nav variants={itemVariants} className="abstract-panel rounded-full px-5 py-3 mb-8 flex items-center justify-between gap-4">
        <Link to="/" className="abstract-mono text-sm font-bold tracking-[0.18em] text-gray-950 dark:text-white">
          KULDEEP
        </Link>
        <div className="flex items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300">
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
        </div>
      </motion.nav>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <InteractiveSignalGarden />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid content-start gap-5"
        >
          <div className="abstract-note rotate-[-2deg] p-5 md:p-6">
            <p className="abstract-mono text-xs uppercase tracking-[0.18em] text-white/80 mb-3">System note</p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Building deterministic multi-agent systems that behave like real software.
            </h2>
          </div>

          <div className="abstract-blue-note rotate-[1deg] p-5 md:p-6">
            <p className="abstract-mono text-xs uppercase tracking-[0.18em] text-gray-950/60 mb-3">Stack</p>
            <p className="abstract-mono text-sm leading-relaxed">
              Python / TypeScript / LangGraph / ReAct / GCP / ClickHouse / PostgreSQL
            </p>
          </div>

          <div className="abstract-panel rounded-2xl p-5">
            <p className="abstract-mono text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400 mb-3">Now</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              SDE at Clevrr AI.
            </p>
          </div>

           </motion.div>
      </section>

      <motion.section variants={itemVariants} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/projects"
            className="abstract-panel group rounded-2xl p-5 min-h-[140px] flex flex-col justify-between hover:-translate-y-1"
          >
            <span className="abstract-mono text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">01</span>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Projects</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="abstract-panel group rounded-2xl p-5 min-h-[140px] flex flex-col justify-between rotate-[-1deg] hover:-translate-y-1"
          >
            <span className="abstract-mono text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">02</span>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">About</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Experience and skills.</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          {socialLinks.slice(0, 2).map((item, index) => {
            const CardIcon = item.icon;
            const className = `abstract-panel group rounded-2xl p-5 min-h-[140px] flex flex-col justify-between hover:-translate-y-1 ${index === 1 ? 'rotate-[1deg]' : ''}`;
            const content = (
              <>
                <CardIcon className="w-5 h-5 text-gray-900 dark:text-white" />
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.internal ? 'Open page' : 'Open link'}</p>
                </div>
              </>
            );

            return item.internal ? (
              <Link key={item.name} to={item.href} className={className}>
                {content}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          })}
      </motion.section>
    </motion.div>
  );
};

export default LandingPage;
