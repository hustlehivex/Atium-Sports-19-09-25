import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Users, Zap, Award } from 'lucide-react'

const About = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -100])

  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Transforming potential into performance through structured excellence."
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "Building a supportive ecosystem where athletes thrive together."
    },
    {
      icon: Zap,
      title: "Innovation-First",
      description: "Cutting-edge training methods and technology integration."
    },
    {
      icon: Award,
      title: "Results-Oriented",
      description: "Measurable progress and continuous improvement for all levels."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-base relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-white">
                <span className="gradient-texts">About Atium Sports</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Atium Sports exists to empower athletes. Our mission is simple: to transform 
              potential into performance. We blend cutting-edge training methods, innovative 
              technology, and a passion for sports to create an ecosystem where athletes thrive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Whether you're just starting out or already competing at a professional level, 
              we're here to guide, challenge, and inspire you. Our comprehensive approach 
              ensures every athlete reaches their full potential.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
              
              {/* Floating Text Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">Athletes</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 right-8 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-accent-600">50+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">Programs</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-8 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">Sports</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-accent-600">100%</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">Dedication</div>
              </motion.div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary-300 dark:border-primary-600 rounded-full opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent-300 dark:border-accent-600 rounded-full opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


