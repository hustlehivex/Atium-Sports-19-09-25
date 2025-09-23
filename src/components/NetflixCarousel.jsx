import React, { useRef } from "react";
import "../css/NetflixCarousel.css";
import img1 from "../assets/gallery/1757272019978.jfif";
import img2 from "../assets/gallery/1757738970335.jfif";
import img3 from "../assets/gallery/1757738971332.jfif";
import img4 from "../assets/gallery/1758288332992.jfif";
import img5 from "../assets/gallery/1758288333095.jfif";
import img6 from "../assets/gallery/1758288333370.jfif";





const NetflixCarousel = () => {
  const slideRef = useRef(null);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <>


        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6" style={{marginTop:"3%"}}>
                <span className="gradient-texts" style={{marginLeft:"45%"}}>Gallery</span>
        </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto" style={{marginLeft:"35%"}}>
                        A Collection of Beautiful Moments Truly Worth Sharing With You
              </p>

        <div className="netflix-carousel">
        <div className="slide" ref={slideRef}>
            <div
            className="item"
            style={{ backgroundImage: `url(${img1})`}}
            >
           <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">Mens Hockey</div>
                <div className="des">
                    At ATIUM Sports, we salute your dedication and teamwork that has made the nation proud. Keep chasing glory, keep inspiring generations, and keep the tricolor flying high!
                </div>
                <button>See More</button>
            </div>

            </div>
            <div
            className="item"
            style={{ backgroundImage: `url(${img2})` }}
            >
            <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">PlayCom 2025!</div>
                <div className="des">ATIUM Sports, we're proud to be part of India's sporting transformation. Our cutting-edge sports technology platforms - from athlete performance analytics to injury prevention systems - are designed to unlock potential in every corner of our nation.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: `url(${img3})` }}
            >
            <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">PlayCom 2025!</div>
                <div className="des">Union Sports Minister Dr. Mansukh Mandaviya outlines India's ambitious roadmap to become a global sporting superpower. His vision to transform sports from entertainment into a "people's movement" resonates deeply with our mission</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: `url(${img4})` }}
            >
            <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">PlayCom 2025!</div>
                <div className="des">India's Olympic Ambitions With DG Mr @Hari Ranjan Rao IAS and Devendra Jhajharia leading the conversation, the focus was clear - how do we expose sporting culture to 99% of India's population? The answer lies in technology, infrastructure, and systematic athlete development.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: `url(${img5})` }}
            >
            <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">PlayCom 2025!</div>
                <div className="des">Union Sports Minister Dr. Mansukh Mandaviya outlines India's ambitious roadmap to become a global sporting superpower. His vision to transform sports from entertainment into a "people's movement" resonates deeply with our mission.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: `url(${img6})`}}
            >
            <div className="content bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                <div className="name">PlayCom 2025</div>
                <div className="des">With DG Mr @Hari Ranjan Rao IAS and Devendra Jhajharia leading the conversation, the focus was clear - how do we expose sporting culture to 99% of India's population? The answer lies in technology, infrastructure, and systematic athlete development.</div>
                <button>See More</button>
            </div>
            </div>
        </div>

        <div className="button">
            <button className="prev" onClick={handlePrev}>
            ◀
            </button>
            <button className="next" onClick={handleNext}>
            ▶
            </button>
        </div>
        </div>
    </>
  );
};

export default NetflixCarousel;
