import React, { useRef } from "react";
import "../css/NetflixCarousel.css";
import img1 from "../assets/bg-images/remove bg/1.png";
import img2 from "../assets/bg-images/remove bg/1.png";
import img3 from "../assets/bg-images/remove bg/1.png";




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
   
        <div className="netflix-carousel">
        <div className="slide" ref={slideRef}>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)" }}
            >
            <div className="content">
                <div className="name">Switzerland</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)" }}
            >
            <div className="content">
                <div className="name">Finland</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)" }}
            >
            <div className="content">
                <div className="name">Iceland</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)" }}
            >
            <div className="content">
                <div className="name">Australia</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)" }}
            >
            <div className="content">
                <div className="name">Netherland</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
                <button>See More</button>
            </div>
            </div>
            <div
            className="item"
            style={{ backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)" }}
            >
            <div className="content">
                <div className="name">Ireland</div>
                <div className="des">Lorem ipsum dolor sit amet consectetur.</div>
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
