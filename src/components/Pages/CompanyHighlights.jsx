import React from "react";
import { motion } from "framer-motion";

function CompanyHighlights() {
  return (
    <div className="bg-gradient-to-b from-#0b1220 to-#08121c text-white min-h-screen">
      {/* Hero / Who We Are */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Who We Are</h2>
          <p className="text-lg text-gray-300">
            ATIUM Sports is India’s first sports-tech platform for sports clubs
            and academies to elevate athletic performance using sports science,
            offering athlete management, real-time insights, and training
            monitoring. We partner with sports science pioneers to simplify
            performance tracking.  
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/2"
        >
          <img
            src="/path/to/who-we-are-image.jpg"
            alt="Who we are"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2"
        >
          <img
            src="/path/to/what-we-do-image.jpg"
            alt="What we do"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">What We Do</h2>
          <p className="text-lg text-gray-300">
            We provide an athlete management system that tracks and monitors
            training programs, delivers real-time insights into fitness, and
            enables collaboration among coaches, athletes, and sports science
            experts. Our “ATIUM AssessPro” is used for gymnastics athletes at
            SDAT’s AGB Complex.  
          </p>
        </motion.div>
      </motion.section>

      {/* Achievements Grid Section */}
      <motion.section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Highlights & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "AssessPro deployment", description: "Gymnastics athletes at SDAT’s AGB Complex: real-time fitness monitoring", icon: "/icons/chart.svg" },
            { title: "Partners in Sports Science", description: "Collaborating with India’s leading sports science organizations", icon: "/icons/science.svg" },
            { title: "ValueCorn Startup", description: "Proud ValueCorn startup supporting innovation in sports tech", icon: "/icons/startup.svg" },
            // add more as needed
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-linear-gradient-dark rounded-2xl p-6 shadow-md hover:shadow-lg"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values / Join Us etc. */}
      {/* ... */}
    </div>
  );
}

export default CompanyHighlights;
