import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'REST APIs', level: 85 },
  ],
  database: [
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MySQL', level: 70 },
    { name: 'Firebase', level: 75 },
  ],
  mobile: [
    { name: 'React Native', level: 75 },
    { name: 'Flutter', level: 65 },
    { name: 'Mobile UI/UX', level: 80 },
  ],
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill: Skill, index: number) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="border-b-4 border-blue-600 pb-2">My Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            icon={<FaCode className="text-blue-600 text-xl" />} 
            skills={skills.frontend} 
          />
          <SkillCategory 
            title="Backend Development" 
            icon={<FaServer className="text-blue-600 text-xl" />} 
            skills={skills.backend} 
          />
          <SkillCategory 
            title="Database" 
            icon={<FaDatabase className="text-blue-600 text-xl" />} 
            skills={skills.database} 
          />
          <SkillCategory 
            title="Mobile Development" 
            icon={<FaMobile className="text-blue-600 text-xl" />} 
            skills={skills.mobile} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
