import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.div 
      className="h-screen bg-[#fff46b] text-black p-4 md:p-8 flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <br />
        <br />
      
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-10">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <p className="text-lg md:text-xl mb-6">
              Have a project in mind or want to collaborate? 
              Feel free to reach out !!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:kuldeeprathore1637@gmail.com" 
                className="flex items-center text-base md:text-lg font-medium group"
              >
                <FiMail className="mr-4" size={24} />
                <span className="border-b-2 border-transparent group-hover:border-black transition-all">
                  kuldeeprathore1637@gmail.com
                </span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kuldeep-singh2602/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xl font-medium group"
              >
                <FiLinkedin className="mr-4" size={24} />
                <span className="border-b-2 border-transparent group-hover:border-black transition-all">
                kuldeep-singh2602
                </span>
              </a>
              
              <a 
                href="https://github.com/Kuldeep2602" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xl font-medium group"
              >
                <FiGithub className="mr-4" size={24} />
                <span className="border-b-2 border-transparent group-hover:border-black transition-all">
                Kuldeep2602
                </span>
              </a>
             
            </div>
          </div>
          
          <div className="bg-black text-white p-6 md:p-8 rounded-2xl md:rounded-3xl h-full">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
