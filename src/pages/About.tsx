import type { CSSProperties } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiBriefcase,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'Clevrr AI',
    href: 'https://getclevrr.com/',
    location: 'Bengaluru, India',
    period: 'Jan 2026 - Present',
    accent: 'var(--red)',
    bullets: [
      'Architected a multi-agent execution pipeline that replaces probabilistic LLM-driven actions with deterministic tool orchestration for more reliable production execution.',
      'Developed multiple sub-ReAct agents orchestrated by a parent agent and integrated them into async workflows for parallel execution.',
      'Built a GCP sandbox mirroring production with Cloud Run for frontend/backend services, Cloud SQL for PostgreSQL, and a GKE-hosted ClickHouse cluster.',
      'Developing backend APIs for real-time ETL ingestion and normalization across Shopify, Meta Ads, and Razorpay for an AI analytics platform unifying 50+ channels.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'WhatBytes',
    href: 'https://www.whatbytes.com/',
    location: 'Bengaluru, India',
    period: 'Oct 2025 - Jan 2026',
    accent: 'var(--blue)',
    bullets: [
      'Redesigned an LLM evaluation dashboard using Next.js, modular CSS, and component refactoring, reducing redundant code and improving maintainability by 25%.',
      'Integrated REST APIs with real-time polling to track Celery task progress, reducing response latency by 25 seconds.',
      'Integrated Stripe and built end-to-end billing flows for enterprise subscription management.',
      'Collaborated in an Agile environment, resolving pre-production bugs through Postman testing and code reviews.'
    ]
  }
];

const profileDiscStyle = {
  width: 178,
  height: 178,
  '--disc-a': '#ff3b17',
  '--disc-b': '#d9ff3f',
  '--disc-accent': '#111111'
} as CSSProperties;

const metrics = [
  // { label: 'LeetCode', value: '200+' },
  // { label: 'Channels', value: '50+' },
  // { label: 'GPA', value: '8.6' }
];

const contactItems = [
  { id: 'phone', label: '+91 63789 86140', value: '+916378986140', icon: FiPhone },
  { id: 'email', label: 'kuldeeprathore1637@gmail.com', value: 'kuldeeprathore1637@gmail.com', icon: FiMail }
] as const;

const About = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [copiedContact, setCopiedContact] = useState<'phone' | 'email' | null>(null);

  const copyContact = async (kind: 'phone' | 'email', value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(kind);
      window.setTimeout(() => setCopiedContact(null), 1500);
    } catch {
      setCopiedContact(null);
    }
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden px-1 py-4 text-gray-950 md:py-8 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="abstract-panel rounded-full px-5 py-3 mb-8 flex items-center justify-between gap-4"
      >
        <Link to="/" className="abstract-mono text-sm font-bold tracking-[0.18em] text-gray-950 dark:text-white">
          KULDEEP
        </Link>
        <div className="flex items-center gap-4 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300">
          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
        </div>
      </motion.nav>

      <div className="mb-5 grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="abstract-panel relative overflow-hidden rounded-[2rem] p-5 lg:sticky lg:top-6 lg:self-start"
        >
          <div className="absolute -right-12 -top-12 opacity-20">
            <div className="vinyl-disc" style={profileDiscStyle}>
              <span className="vinyl-cover">
                <span>KS</span>
              </span>
              <span className="vinyl-hole" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="vinyl-disc mb-5" style={profileDiscStyle}>
              <span className="vinyl-cover">
                <span>KS</span>
              </span>
              <span className="vinyl-hole" />
            </div>

            
            <h1 className="text-3xl font-extrabold text-gray-950 dark:text-white">Kuldeep Singh</h1>
            <p className="abstract-sticker mt-4 bg-[var(--acid)]">Software Engineer</p>

            <div className="mt-5 grid w-full grid-cols-3 gap-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-2 border-gray-950 bg-[#fffdf7] px-2 py-3 shadow-[4px_4px_0_rgba(17,17,17,0.10)] dark:border-white/15 dark:bg-white/[0.04]">
                  <p className="text-2xl font-extrabold text-gray-950 dark:text-white">{metric.value}</p>
                  <p className="abstract-mono mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 w-full space-y-2.5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const copied = copiedContact === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => copyContact(item.id, item.value)}
                    className="w-full min-w-0 rounded-xl border-2 border-gray-950/20 bg-[#fffdf7] px-3 py-3 text-sm text-gray-700 shadow-sm transition-colors hover:bg-[var(--blue)] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Icon className="shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="truncate">{copied ? `${item.id === 'phone' ? 'Phone' : 'Email'} copied` : item.label}</span>
                    </span>
                  </button>
                );
              })}

              <a
                href="https://www.linkedin.com/in/kuldeep-singh2602/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border-2 border-gray-950/20 bg-[#fffdf7] px-3 py-3 text-sm text-gray-700 shadow-sm transition-colors hover:bg-[var(--blue)] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
              >
                <FiLinkedin className="shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="truncate">LinkedIn</span>
                <FiArrowUpRight className="shrink-0" />
              </a>

              <div className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border-2 border-gray-950/20 bg-[#fffdf7] px-3 py-3 text-sm text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
                <FiMapPin className="shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="truncate">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col gap-5"
        >
          

          <section id="experience" className="abstract-panel rounded-[2rem] p-5 sm:p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-950 bg-[var(--red)] text-white shadow-[5px_5px_0_rgba(17,17,17,0.12)]">
                <FiBriefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="abstract-mono text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Experience</p>
                <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white">Recent Work</h2>
              </div>
            </div>

            <div className="space-y-5">
              {experiences.map((experience, index) => {
                const isActive = activeExperience === index;

                return (
                  <motion.article
                    key={experience.company}
                    onMouseEnter={() => setActiveExperience(index)}
                    onFocus={() => setActiveExperience(index)}
                    whileHover={{ y: -4, rotate: index === 0 ? -0.4 : 0.4 }}
                    className={`relative overflow-hidden rounded-2xl border-2 p-5 transition-colors ${
                      isActive
                        ? 'border-gray-950 bg-[#fffdf7] dark:border-white/20 dark:bg-white/[0.06]'
                        : 'border-gray-950/20 bg-white/55 dark:border-white/10 dark:bg-white/[0.03]'
                    }`}
                  >
                    <div className="absolute right-4 top-4 h-12 w-12 rounded-full border-2 border-gray-950 bg-[var(--accent)] opacity-90 shadow-[5px_5px_0_rgba(17,17,17,0.10)]" style={{ '--accent': experience.accent } as CSSProperties} />
                    <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="abstract-mono mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">{experience.period}</p>
                        <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">{experience.role}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                          <a href={experience.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline dark:text-blue-400">
                            {experience.company}
                            <FiArrowUpRight />
                          </a>
                          <span>/</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="relative z-10 mt-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--red)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default About;
