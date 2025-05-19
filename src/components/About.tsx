import { FaUserTie, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="border-b-4 border-blue-600 pb-2">About Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/profile-placeholder.jpg" 
                alt="Profile"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in web development. 
              I love turning complex problems into simple, beautiful, and intuitive solutions. 
              With expertise in both front-end and back-end development, I create seamless 
              user experiences with clean, efficient code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUserTie className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-gray-600">3+ Years</p>
                  <p className="text-sm text-gray-500">Full Stack Development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-600">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500">University Name, Year</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
