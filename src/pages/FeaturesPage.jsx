import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Why Atium Sports",
    content: `ATIUM Sports is available across iOS, Android, and Web platforms—each
      specially curated. Supporting 80+ sports and all user roles (Athletes,
      Coaches, Executives, Admin, Medical Staff, Physiotherapists,
      Psychologists, Sports Scientists), Atium ensures seamless collaboration.
      A flexible access control system adapts to roles and attributes,
      ensuring customized, secure, and role-specific functionality.`,
    image: "/images/why.png",
  },
  {
    title: "Customizations",
    content: `ATIUM supports multiple Indian and international languages. Coaches can
      customize and add their own exercises, trainings, workouts, and forms
      for monitoring and assessments.`,
    image: "/images/customizations.png",
  },
  {
    title: "Data Analysis",
    content: `Over 60 specialized dashboards provide a unified view of athlete test
      results and performance metrics. A custom dashboard builder adds
      powerful analytical capabilities. Get on-the-spot insights with our
      Gen-AI assistant.`,
    image: "/images/data-analysis.png",
  },
  {
    title: "Dravid AI",
    content: `Our Nexgen AI Assistant, powered by Anthropic Claude 3.5, guides and
      supports coaches and athletes. Inspired by Rahul Dravid, it symbolizes
      strength, resilience, and excellence. Version 1.2 answers queries on
      fitness and sports science. Future versions will offer deeper insights,
      agent support, and real-time analysis.`,
    image: "/images/dravid-ai.png",
  },
  {
    title: "Planning & Calendar",
    content: `A feature-rich calendar with templates streamlines planning for training,
      assessments, medical appointments, and events. Collaborators can edit
      athlete plans, with edit histories maintained for transparency.`,
    image: "/images/calendar.png",
  },
  {
    title: "Exercises, Trainings & Assessments",
    content: `Select from a catalog of scientifically validated exercises and
      assessments, or personalize your own. Use the program builder to plan
      for weeks or months, instantly linked to your calendar.`,
    image: "/images/exercises.png",
  },
  {
    title: "Monitoring & Readiness",
    content: `Track wellness using easy questionnaires with scores and dashboards.
      Internal and external load tracking (Foster’s RPE, TRIMP, distance,
      gym load) is integrated directly into the platform.`,
    image: "/images/monitoring.png",
  },
  {
    title: "Health Management",
    content: `Streamlined injury and illness reporting with support for period tracking,
      OSTRC-H2, physiotherapy assessments, psychology questionnaires, and
      return-to-play workflows. Comprehensive reports and dashboards empower
      coaches and medical staff.`,
    image: "/images/health.png",
  },
  {
    title: "Administration",
    content: `Manage organizations, roles, users, and teams with a robust access
      control system. Attendance, compliance, and usage metrics are
      visualized with ease. Seamless hardware integration ensures enhanced
      functionality.`,
    image: "/images/admin.png",
  },
  {
    title: "Data Privacy & Security",
    content: `Hosted on AWS secure cloud with multi-layered RBAC + ABAC access
      controls. Compliance with GDPR, CCPA, and DPDP ensures privacy-first
      design. Strong cryptographic keys safeguard sensitive data.`,
    image: "/images/security.png",
  },
];

const FeaturesExtended = () => {
  return (
    <div className="bg-secondary-900 text-white py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
          <span className="gradient-texts">ATIUM Sports Features</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore how Atium transforms sports performance, collaboration, and
          management with cutting-edge tools, AI support, and secure
          data-driven insights.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto mt-6" />
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {i % 2 === 0 ? (
              <>
                <img
                  src={s.image}
                  alt={s.title}
                  className="rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.content}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.content}</p>
                </div>
                <img
                  src={s.image}
                  alt={s.title}
                  className="rounded-2xl shadow-lg"
                />
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold font-display mb-6">
          Ready to Experience ATI<span className="text-primary-400">UM</span>?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Empower athletes, coaches, and organizations with the most advanced
          sports management platform.
        </p>
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-lg font-semibold shadow-lg hover:opacity-90 transition">
          Request a Demo
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturesExtended;
