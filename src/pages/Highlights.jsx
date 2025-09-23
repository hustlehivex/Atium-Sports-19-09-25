import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Trophy, Star, Zap, Home } from 'lucide-react'
import whoarewe from '../assets/bg-images/Who are we.png';
import NetflixCarousel from '../components/NetflixCarousel';
import acheivements from '../assets/bg-images/Acheivements.png';


const Highlights = ({ navigateToPage }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const achievements = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AssessPro Deployment",
      description: "Gymnastics athletes at SDAT's AGB Complex: real-time fitness monitoring and performance tracking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sports Science Partners",
      description: "Collaborating with India's leading sports science organizations to advance athletic performance"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "ValueCorn Startup",
      description: "Proud ValueCorn startup supporting innovation in sports technology and athlete development"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Insights",
      description: "Advanced analytics platform providing coaches and athletes with actionable performance data"
    }
  ]

  const visionGoals = [
    {
      title: "Global Expansion",
      description: "Expanding our sports-tech platform to international markets and diverse athletic communities"
    },
    {
      title: "AI Integration",
      description: "Implementing artificial intelligence to provide predictive analytics and personalized training recommendations"
    },
    {
      title: "Community Building",
      description: "Creating a global network of athletes, coaches, and sports science professionals"
    }
  ]

  const goBackToHome = () => {
    navigateToPage('home')
  }

  return (
    <div className="min-h-screen bg-gradient-hero text-white">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-20 left-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goBackToHome}
          className="btn-secondary flex items-center space-x-2 px-4 py-2 text-sm"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </motion.button>
      </motion.div>

      {/* Hero Section - Who We Are */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                variants={fadeInUp}
                className="space-y-8"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight"
                >
                  <span className="block gradient-texts">Who We Are</span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed"
                >
                  ATIUM Sports is India's first sports-tech platform for sports clubs and academies 
                  to elevate athletic performance using sports science. We provide athlete management, 
                  real-time insights, and training monitoring solutions that empower athletes to reach 
                  their full potential.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed"
                >
                  We partner with sports science pioneers to simplify performance tracking and create 
                  a comprehensive ecosystem where technology meets athletic excellence.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <div className="aspect-square bg-gradient-feature rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
  {/* Image fills the background */}
  <img
    src={whoarewe}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Foreground content */}
  
</div>


                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center"
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What We've Done Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-gradient-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Placeholder */}
              <motion.div
                variants={fadeInUp}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-square bg-gradient-card rounded-3xl shadow-2xl flex items-center justify-center">
                 {/* Image fills the background */}
                  <img
                    src={whoarewe}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeInUp}
                className="space-y-8 order-1 lg:order-2"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl font-bold font-display leading-tight"
                >
                  <span className="gradient-texts">What We've Done</span>
                </motion.h2>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed"
                >
                  We provide an athlete management system that tracks and monitors training programs, 
                  delivers real-time insights into fitness, and enables collaboration among coaches, 
                  athletes, and sports science experts.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-white/90 leading-relaxed"
                >
                  Our flagship "ATIUM AssessPro" is currently being used for gymnastics athletes 
                  at SDAT's AGB Complex, revolutionizing how performance is measured and improved.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold gradient-texts">500+</div>
                    <div className="text-sm text-white/80">Athletes Trained</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold gradient-texts">50+</div>
                    <div className="text-sm text-white/80">Programs Offered</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/*Image Section*/}
      <NetflixCarousel />

 {/* Vision & Goals Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-20 lg:py-32 bg-gradient-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6">
                <span className="gradient-texts">Vision & Goals</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Where we're heading and how we plan to revolutionize sports technology globally
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {visionGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{goal.title}</h3>
                  <p className="text-white/80 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cta flex items-center space-x-2 text-lg px-8 py-4 mx-auto"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Grid */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6">
                <span className="gradient-texts">Key Achievements</span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Our journey of innovation and impact in the sports technology space
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-gradient-accent mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

     


    </div>
  )
}

export default Highlights
