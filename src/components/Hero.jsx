import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Download, 
  Code,
  Briefcase,
  FolderOpen,
  FileText,
  CheckCircle
} from 'lucide-react';

const Hero = () => {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloadComplete, setDownloadComplete] = React.useState(false);

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', color: 'hover:text-gray-300' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', color: 'hover:text-sky-400' },
  ];

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      const cvUrl = '/Vindya_Madubhashini_SE.pdf.pdf'; 
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Vindya-Madubhashini-CV.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 3000);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('CV download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              width: Math.random() * 100 + 'px',
              height: Math.random() * 100 + 'px',
            }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh'],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6"
            >
              <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Open for Collaboration</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vindya</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">UI/UX <br />Designer</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              I am an undergraduate passionate about UI/UX, frontend, and mobile development,
              creating user-friendly and visually appealing digital experiences while continuously improving through hands-on projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch <ArrowRight size={20} />
              </motion.button>
              
              {/* Download CV Button with States */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`btn-secondary flex items-center justify-center gap-2 relative ${
                  downloadComplete ? 'bg-green-500/20 border-green-500' : ''
                }`}
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : downloadComplete ? (
                  <>
                    <CheckCircle size={20} className="text-green-500" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download CV
                  </>
                )}
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center ${link.color} transition-colors duration-300`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  background: 'linear-gradient(45deg, #3B82F6, #10B981, #8B5CF6) border-box',
                  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '4px',
                }}
              />
              
              {/* Profile Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img 
                    src="/my-image.jpeg" 
                    alt="Vindya Madubhashini" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Code size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 left-1/4 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-secondary to-emerald-400 rounded-xl flex items-center justify-center shadow-xl"
              >
                <Briefcase size={20} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 right-1/4 translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center shadow-xl"
              >
                <FolderOpen size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;