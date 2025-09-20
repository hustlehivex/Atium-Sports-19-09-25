import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'

const Events = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [1000, 2000], [0, -200])

  const events = [
    {
      title: "Elite Performance Camp",
      date: "March 15-17, 2024",
      location: "Atium Sports Complex",
      participants: "50 Athletes",
      time: "9:00 AM - 5:00 PM",
      description: "Intensive 3-day camp focusing on speed, agility, and mental toughness for competitive athletes.",
      type: "Training Camp",
      featured: true
    },
    {
      title: "Youth Development Tournament",
      date: "March 22, 2024",
      location: "Community Sports Center",
      participants: "200 Athletes",
      time: "8:00 AM - 6:00 PM",
      description: "Annual tournament showcasing young talent with skill competitions and team matches.",
      type: "Tournament",
      featured: false
    },
    {
      title: "Coaching Excellence Workshop",
      date: "March 29, 2024",
      location: "Atium Training Center",
      participants: "30 Coaches",
      time: "10:00 AM - 4:00 PM",
      description: "Professional development workshop for coaches focusing on modern training methodologies.",
      type: "Workshop",
      featured: false
    },
    {
      title: "Community Sports Day",
      date: "April 5, 2024",
      location: "Central Park",
      participants: "500+ Athletes",
      time: "9:00 AM - 7:00 PM",
      description: "Free community event with sports activities, competitions, and family fun.",
      type: "Community Event",
      featured: false
    }
  ]

  return (
    <section id="events" className="section-padding bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="w-full h-[120%] bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 25, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-40 right-32 w-32 h-32 bg-accent-500 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-40 left-1/3 w-48 h-48 bg-primary-500 rounded-full blur-xl"
            />
          </div>
          
          {/* Sports-themed overlay pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/20 rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Events & Highlights
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From grassroots tournaments to elite showcases, Atium Sports is present where 
            the action happens. Join our events and be part of a growing community of athletes 
            who are redefining performance.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-primary-200 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${event.featured ? 'lg:col-span-2' : ''} glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Event Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.type === 'Training Camp' ? 'bg-primary-500/20 text-primary-200' :
                      event.type === 'Tournament' ? 'bg-accent-500/20 text-accent-200' :
                      event.type === 'Workshop' ? 'bg-green-500/20 text-green-200' :
                      'bg-purple-500/20 text-purple-200'
                    }`}>
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {event.title}
                  </h3>

                  <p className="text-white/80 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-white/70">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center space-x-2 mt-6"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Event Visual */}
                <div className={`${event.featured ? 'lg:w-80' : 'lg:w-64'} h-48 lg:h-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-semibold">
                      {event.date.split(',')[0]}
                    </div>
                    <div className="text-white/70 text-sm">
                      {event.date.split(',')[1]}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Events
            </h3>
            <p className="text-white/80 mb-6">
              Don't miss out on upcoming training camps, tournaments, and community events. 
              Join our newsletter to be the first to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events


