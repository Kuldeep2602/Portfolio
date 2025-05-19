import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: [
      'Led a team of 5 developers to build a scalable e-commerce platform using React and Node.js',
      'Improved application performance by 40% through code optimization and implementing best practices',
      'Mentored junior developers and conducted code reviews to ensure code quality'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Digital Creations',
    duration: '2018 - 2020',
    description: [
      'Developed and maintained responsive web applications using React and Redux',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Reduced page load time by 30% through performance optimization'
    ]
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'WebStart Agency',
    duration: '2016 - 2018',
    description: [
      'Built and maintained client websites using HTML, CSS, and JavaScript',
      'Worked closely with the design team to implement UI/UX designs',
      'Assisted in the development of internal tools and applications'
    ]
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Work Experience</h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute left-0 h-full w-0.5 bg-blue-500 top-0 transform -translate-x-1/2 group-first:top-1/2 group-last:h-1/2" />
              <div className="relative pl-10">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 top-1.5" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
