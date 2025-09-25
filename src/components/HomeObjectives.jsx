import React from 'react'
import '../css/HomeObjectives.css'

const HomeObjectives = () => {
  return (
    <section className="home-objectives">
    <div className="home-content15">
      <span className="home-text29">Objectives</span>
        <div className="home-objectives-list">
        <div className="objective">
          <h3 className="home-text30">Growth</h3>
          <p className="home-text31">
          Atium Sports drives growth by empowering athletes, expanding opportunities, and building inclusive pathways. We focus on unlocking potential, inspiring excellence,
          and creating lasting impact through innovation and community engagement.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="objective home-objective2">
          <h3 className="home-text32">Develop</h3>
          <p className="home-text33">
          We develop athletes holistically by strengthening physical performance, resilience, and teamwork. Through structured programs,
          expert guidance, and advanced tools, Atium Sports prepares individuals for success in both sports and life.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="objective home-objective3">
          <h3 className="home-text34">Optimize</h3>
          <p className="home-text35">
          Atium Sports optimises performance with science, technology, and data-driven methods.
          We enhance efficiency, reduce risks, and build sustainable systems to help athletes achieve peak performance and consistent excellence.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeObjectives;