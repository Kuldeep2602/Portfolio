import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Me
              </h1>
              <div className="w-24 h-1.5 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create 
                seamless user experiences and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines clean code, thoughtful design, and performance 
                optimization to deliver exceptional digital products.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'MySql', 'WebRtc', 'C++'].map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-gray-900 text-white px-6 py-4 rounded-2xl text-center font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-gray-800 mb-6 overflow-hidden border-4 border-blue-500/20">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-4xl">KS</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Kuldeep Singh</h3>
              <p className="text-blue-400 font-medium mb-6">Full Stack Developer</p>
              
              <div className="w-full space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <FiMapPin className="text-blue-400" />
                  <span>Noida, India</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <FiMail className="text-blue-400" />
                  <a href="mailto:kuldeeprathore1637@gmail.com" className="hover:text-white transition-colors">
                    kuldeeprathore1637@gmail.com
                  </a>
                </div>
              </div>
              
              <a 
                href="https://drive.google.com/file/d/1cGQj3yYtoyOuGP9HOnSbSQ8Ygy_Qzh68/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
