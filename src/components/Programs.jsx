import { motion } from 'framer-motion'
import { Trophy, Users, Target, Zap, ArrowRight } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      icon: Trophy,
      title: "Elite Training Programs",
      description: "Custom-designed to enhance speed, agility, and endurance. Our elite programs are tailored for serious athletes looking to reach the next level.",
      features: ["Personalized Training Plans", "Performance Analytics", "Expert Coaching", "Competition Preparation"],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50 dark:bg-primary-900/20"
    },
    {
      icon: Users,
      title: "Youth Development Camps",
      description: "Nurturing the next generation with skills, discipline, and mentorship. Building character and athleticism in young athletes.",
      features: ["Age-Appropriate Training", "Character Building", "Mentorship Programs", "Fun Learning Environment"],
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50 dark:bg-accent-900/20"
    },
    {
      icon: Target,
      title: "Team Solutions",
      description: "Helping clubs and academies scale performance with structure and data. Comprehensive team development programs.",
      features: ["Team Analytics", "Strategic Planning", "Coaching Development", "Performance Metrics"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Zap,
      title: "Sports Technology Integration",
      description: "We align with cutting-edge tools like STATSports to give athletes measurable progress and data-driven insights.",
      features: ["Performance Tracking", "Data Analytics", "Technology Integration", "Real-time Feedback"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="programs" className="section-padding bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text mb-6">
            Programs & Services
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training solutions designed to elevate your athletic performance 
            and unlock your full potential across all levels and sports.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`${program.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl border border-white/20 dark:border-white/10`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-6 py-3 px-4 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-12 py-4"
          >
            View All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs


