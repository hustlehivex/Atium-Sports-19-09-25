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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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