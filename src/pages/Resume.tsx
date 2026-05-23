import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCode,
  FiDownload,
  FiGithub
} from 'react-icons/fi';

const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1ctL2I9ny8lbBlTI-TtiVyNXWK4K1rfbT/view?usp=sharing';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kuldeep-singh2602/';
const GITHUB_URL = 'https://github.com/Kuldeep-Clevrr';
const LEETCODE_URL = 'https://leetcode.com/u/Kuldeep2602/';

const resumeContactItems = [
  { label: '+91 63789 86140', href: 'tel:+916378986140' },
  { label: 'kuldeeprathore1637@gmail.com', href: 'mailto:kuldeeprathore1637@gmail.com' },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'GitHub', href: GITHUB_URL, external: true },
  { label: 'LeetCode', href: LEETCODE_URL, external: true }
];

const skills = [
  {
    title: 'Programming',
    color: 'var(--acid)',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'AI & Development',
    color: 'var(--red)',
    items: ['LangChain', 'ReAct Agents', 'MCP', 'Prompt Engineering', 'Context Engineering', 'RAG', 'Django', 'Node.js', 'Next.js']
  },
  {
    title: 'Cloud & Infra',
    color: 'var(--blue)',
    items: ['PostgreSQL', 'ClickHouse', 'MongoDB', 'Docker', 'AWS EC2', 'GCP Cloud Run', 'GKE', 'Cloud SQL', 'Git']
  }
];

const experiences = [
  {
    company: 'Clevrr AI',
    role: 'SDE Intern',
    period: 'Jan 2026 - Present',
    location: 'Bengaluru, India',
    focus: 'Built deterministic multi-agent orchestration, GCP sandbox infra, and real-time ETL APIs for an AI analytics platform.',
    bullets: [
      'Architected a multi-agent execution pipeline to replace probabilistic LLM-driven actions with deterministic tool orchestration, improving reliability and execution determinism.',
      'Developed multiple sub-ReAct agents orchestrated by a parent agent and integrated into async workflows for parallel execution.',
      'Built a GCP sandbox from scratch mirroring production: Cloud Run, Cloud SQL PostgreSQL, and GKE-hosted ClickHouse.',
      'Developing backend APIs for real-time ETL ingestion and normalization across Shopify, Meta Ads, Google Ads, etc.'
    ]
  },
  {
    company: 'WhatBytes',
    role: 'Full Stack Developer Intern',
    period: 'Oct 2025 - Jan 2026',
    location: 'Bengaluru, India',
    focus: 'Redesigned an LLM evaluation dashboard, integrated polling for Celery progress, and built Stripe billing flows.',
    bullets: [
      'Redesigned an LLM evaluation dashboard using Next.js, modular CSS, and component refactoring, reducing redundant code and improving maintainability by 25%.',
      'Integrated REST APIs with real-time polling to track Celery task progress, reducing response latency by 25 seconds.',
      'Integrated Stripe and built end-to-end billing flows, enabling subscription management for enterprise clients.',
      'Collaborated in an Agile environment, resolving pre-production bugs via Postman testing and code reviews.'
    ]
  }
];

const projects = [
  {
    title: 'AI Assessment Creator',
    stack: 'LLM, Prompt Engineering, React.js, TypeScript, Node.js, MongoDB, Redis, BullMQ',
    href: 'https://app.kuldeep2602.me/home',
    focus: 'Async BullMQ plus Redis LLM flow with schema-bound prompts and validation repair.',
    bullets: [
      'Designed an async LLM execution flow using BullMQ, Redis workers, and WebSocket events to stream real-time progress.',
      'Architected a deterministic LLM generation pipeline that translates teacher specifications into schema-bound prompts with validation and repair guardrails.',
      'Developed the full-stack surface with React.js, Node.js, MongoDB, and Zustand state management.'
    ]
  },
  {
    title: 'AI-Powered Analytics Agent',
    stack: 'Python, LangGraph, ReAct Agent, MCP, Gemini API',
    href: 'https://lang-agent-ajdr.vercel.app/',
    focus: 'Agent-based Shopify analytics app using LangGraph, ReAct reasoning, and natural language insights.',
    bullets: [
      'Developed a full-stack AI application analyzing Shopify store data using language models and agent-based architecture.',
      'Implemented a ReAct pipeline to process e-commerce data and generate natural language insights from store metrics.',
      'Built autonomous LangChain agents for multi-step reasoning, data extraction, and business recommendations.',
      'Integrated Shopify API, vector databases, and conversational AI for real-time analytics and reporting.'
    ]
  },
  {
    title: 'Buzz',
    stack: 'React, TypeScript, Node.js, Express.js, MongoDB, Custom UI Library',
    href: 'https://buzz-fe-1.vercel.app',
    focus: 'Link parsing and deferred-reading product with custom UI components and responsive UX.',
    bullets: [
      'Built an intelligent link parsing system that extracts key content from URLs, improving information retrieval by 40%.',
      'Developed a custom UI component library optimized for performance and design consistency, reducing load times by 25%.',
      'Designed a system for managing deferred reading links to reduce tab overload and cognitive load.',
      'Implemented responsive design for seamless UX across desktop and mobile.'
    ]
  }
];

const education = [
  {
    school: 'Bennett University',
    detail: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2022 - 2026',
    score: 'GPA: 8.6'
  },
  {
    school: 'Vidhya Bharti International School',
    detail: 'Class XII',
    period: '2021',
    score: 'Percentage: 96.8%'
  }
];

const certifications = [
  'Algorithmic Toolbox - UC San Diego',
  'Node.js & MongoDB: Developing Back-end Database Applications - IBM',
  'Exploratory Data Analysis for Machine Learning - IBM',
  'Improving Deep Neural Networks - DeepLearning.AI'
];

const focusColumns = [
  {
    lines: [
      {
        cut: 'AI enthusiast who experiments with prompts',
        keep: 'Applied AI Engineer building deterministic LangGraph, ReAct, and MCP systems.'
      },
      {
        cut: 'LLMs taking random actions in production',
        keep: 'Parent agents route sub-agents through explicit tools, async jobs, and guardrails.'
      },
      {
        cut: 'Only frontend portfolio projects',
        keep: 'Full-stack plus cloud work across APIs, ETL, dashboards, PostgreSQL, ClickHouse, and GCP.'
      }
    ]
  },
  {
    lines: [
      {
        cut: 'Needs heavy supervision to ship',
        keep: 'Built a production-like GCP sandbox from scratch with Cloud Run, Cloud SQL, GKE, and ClickHouse.'
      },
      {
        cut: 'Can talk about AI but not data plumbing',
        keep: 'Developing real-time ingestion and normalization for Shopify, Meta Ads, Google ads, etc.'
      },
      {
        cut: 'Refactor with no business value',
        keep: 'Reduced LLM dashboard maintenance by 25% and Celery progress latency by 25 seconds .'
      }
    ]
  },
  {
    lines: [
      {
        cut: 'A generic MERN candidate',
        keep: 'Can explain deterministic tool orchestration, BullMQ/Redis LLM workers, and validation-repair pipelines.'
      },
      {
        cut: 'Only academic fundamentals',
        keep: '200+ LeetCode problems, 8.6 GPA, and projects that connect agents to real product workflows.'
      },
      {
        cut: 'Nice resume, unclear fit',
        keep: 'Best fit: AI product teams needing someone comfortable across agents, backend, infra, Full-stack.'
      }
    ]
  }
];

const sectionMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 }
};

const Resume = () => {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden px-1 py-4 text-gray-950 md:py-8 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.nav
        {...sectionMotion}
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

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <motion.div
          {...sectionMotion}
          transition={{ duration: 0.4 }}
          className="abstract-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full border-2 border-gray-950 bg-[var(--red)] shadow-[12px_12px_0_rgba(17,17,17,0.12)]" />
          <p className="abstract-sticker mb-5 rotate-[-2deg]">Resume</p>
          <h1 className="relative z-10 max-w-4xl text-5xl font-extrabold leading-[0.9] tracking-tight text-gray-950 md:text-8xl dark:text-white">
            Kuldeep Singh
          </h1>
          <p className="relative z-10 mt-5 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Applied AI Engineer building deterministic multi-agent systems with LangGraph, ReAct, and MCP, backed by full-stack and cloud engineering experience.
          </p>

          <div className="relative z-10 mt-7 flex flex-wrap gap-2">
            {resumeContactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="abstract-mono rounded-full border-2 border-gray-950/20 bg-[#fffdf7] px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                data-cursor-hover
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.aside
          {...sectionMotion}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="grid content-start gap-5"
        >
          <div className="abstract-note rotate-[1deg] p-5">
            <p className="abstract-mono mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70">View mode</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-white">{focusMode ? 'Focus' : 'Full'}</h2>
                <p className="mt-1 text-sm font-semibold text-white/80">
                  {focusMode ? 'Short signals only.' : 'Tap to Focus'}
                </p>
              </div>
              <button
                type="button"
                aria-pressed={focusMode}
                onClick={() => setFocusMode((current) => !current)}
                className={`relative h-12 w-24 rounded-full border-2 border-gray-950 transition-colors ${focusMode ? 'bg-[var(--acid)]' : 'bg-white/70'}`}
                data-cursor-hover
              >
                <span className={`absolute top-1 h-9 w-9 rounded-full border-2 border-gray-950 bg-white shadow-[3px_3px_0_rgba(17,17,17,0.18)] transition-transform ${focusMode ? 'translate-x-11' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>

          <a
            href={RESUME_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="abstract-panel group rounded-2xl p-5 min-h-[150px] flex flex-col justify-between hover:-translate-y-1"
            data-cursor-hover
          >
            <FiDownload className="h-6 w-6 text-gray-950 dark:text-white" />
            <div>
              <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">Download</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Open Drive resume</p>
            </div>
            <FiArrowUpRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-blue-400" />
          </a>
        </motion.aside>
      </section>

      {focusMode ? (
        <motion.section
          {...sectionMotion}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-5 rounded-[2rem] border-2 border-gray-950 bg-[#050505] p-5 text-white shadow-[12px_12px_0_rgba(17,17,17,0.14)] dark:border-white/15 sm:p-6 lg:p-7"
        >
          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-serif text-4xl leading-none tracking-tight text-white md:text-5xl">
                  I am?
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="abstract-mono text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  noise off
                </span>
                <span className="h-8 w-8 rounded-full border-2 border-white bg-[var(--red)] shadow-[0_12px_28px_rgba(255,59,23,0.35)]" />
              </div>
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {focusColumns.map((column, columnIndex) => (
                <motion.div
                  key={column.lines[0].keep}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: columnIndex * 0.06 }}
                  className="max-w-xl"
                >
                  <div className="space-y-4">
                    {column.lines.map((line) => (
                      <p key={line.keep} className="text-[15px] font-semibold leading-7 text-white/25 md:text-base xl:text-lg">
                        <span className="line-through decoration-white/25 decoration-2">
                          {line.cut}
                        </span>{' '}
                        <span className="text-white">
                          {line.keep}
                        </span>
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.div
          {...sectionMotion}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-5 grid gap-5"
        >
          <section className="abstract-panel rounded-[2rem] p-5 sm:p-6">
            <div className="mb-5 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-950 bg-[var(--acid)] text-gray-950 shadow-[5px_5px_0_rgba(17,17,17,0.12)]">
                <FiCode className="h-5 w-5" />
              </div>
              <div>
                <p className="abstract-mono text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Technical Skills</p>
                <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white">Toolkit</h2>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {skills.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 10, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                  transition={{ duration: 0.25, delay: 0.05 * index }}
                  className="border-2 border-gray-950 bg-[#fffdf7] p-4 shadow-[6px_6px_0_rgba(17,17,17,0.10)] dark:border-white/15 dark:bg-white/[0.04]"
                >
                  <span className="abstract-mono inline-flex border-2 border-gray-950 px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-950" style={{ backgroundColor: group.color }}>
                    {group.title}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="rounded-full border-2 border-gray-950/20 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#111] dark:text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article key={experience.company} className="abstract-panel rounded-[2rem] p-5">
                <p className="abstract-mono mb-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">{experience.period}</p>
                <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">{experience.role}</h3>
                <p className="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">{experience.company} / {experience.location}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--red)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="abstract-panel rounded-[2rem] p-5 sm:p-6">
            <div className="mb-5 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-gray-950 bg-[var(--blue)] text-gray-950 shadow-[5px_5px_0_rgba(17,17,17,0.12)]">
                <FiGithub className="h-5 w-5" />
              </div>
              <div>
                <p className="abstract-mono text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Projects</p>
                <h2 className="text-3xl font-extrabold text-gray-950 dark:text-white">Selected Builds</h2>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block border-2 border-gray-950 bg-[#fffdf7] p-4 shadow-[6px_6px_0_rgba(17,17,17,0.10)] transition-transform hover:-translate-y-1 dark:border-white/15 dark:bg-white/[0.04] ${index === 1 ? 'rotate-[0.5deg]' : index === 2 ? 'rotate-[-0.5deg]' : ''}`}
                  data-cursor-hover
                >
                  <h3 className="text-xl font-extrabold text-gray-950 dark:text-white">{project.title}</h3>
                  <p className="abstract-mono mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{project.stack}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="abstract-panel rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-3">
                <FiBookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="border-l-2 border-gray-950/30 pl-4">
                    <h3 className="font-extrabold text-gray-950 dark:text-white">{item.school}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.detail}</p>
                    <p className="abstract-mono mt-1 text-xs font-bold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">{item.period} / {item.score}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="abstract-panel rounded-[2rem] p-5">
              <div className="mb-4 flex items-center gap-3">
                <FiAward className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-extrabold text-gray-950 dark:text-white">Certifications</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <span key={certification} className="rounded-full border-2 border-gray-950/20 bg-white px-3 py-2 text-xs font-bold text-gray-700 shadow-sm dark:border-white/10 dark:bg-[#111] dark:text-gray-300">
                    {certification}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Resume;
