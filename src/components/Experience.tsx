import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  type: 'work' | 'education';
}

interface TimelineItemProps {
  experience: ExperienceItem;
  isLast: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading the frontend development team, implementing new features, and improving application performance.',
    icon: <FaBriefcase className="text-blue-600 text-xl" />,
    type: 'work',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Creations',
    period: '2020 - 2022',
    description: 'Developed and maintained web applications using React, Node.js, and MongoDB.',
    icon: <FaBriefcase className="text-blue-600 text-xl" />,
    type: 'work',
  },
  {
    id: 3,
    title: 'Master of Computer Science',
    company: 'Tech University',
    period: '2018 - 2020',
    description: 'Specialized in Web Technologies and Machine Learning.',
    icon: <FaGraduationCap className="text-blue-600 text-xl" />,
    type: 'education',
  },
  {
    id: 4,
    title: 'Bachelor of Technology',
    company: 'State University',
    period: '2014 - 2018',
    description: 'Computer Science and Engineering.',
    icon: <FaGraduationCap className="text-blue-600 text-xl" />,
    type: 'education',
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-4 top-4 h-full w-0.5 bg-blue-200"></div>
      )}
      <div className="absolute left-0 mt-1">
        <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-blue-600 rounded-full">
          {experience.icon}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{experience.title}</h3>
            <p className="text-blue-600 font-medium">{experience.company}</p>
          </div>
          <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {experience.period}
          </span>
        </div>
        <p className="mt-3 text-gray-600">{experience.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="border-b-4 border-blue-600 pb-2">Experience & Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaBriefcase className="mr-2 text-blue-600" />
              Work Experience
            </h3>
            <div className="relative">
              {experiences
                .filter(exp => exp.type === 'work')
                .map((exp, index, array) => (
                  <TimelineItem 
                    key={exp.id} 
                    experience={exp}
                    isLast={index === array.length - 1}
                  />
                ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-600" />
              Education
            </h3>
            <div className="relative">
              {experiences
                .filter(exp => exp.type === 'education')
                .map((exp, index, array) => (
                  <TimelineItem 
                    key={exp.id} 
                    experience={exp}
                    isLast={index === array.length - 1}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
