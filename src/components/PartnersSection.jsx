import React from "react";
import sai from "../assets/logos/sai.png";
import haryanasteelers from "../assets/logos/HaryanaSteelers.png";
import prakashacademy from "../assets/logos/PrakashAcademy.png";
import ffessm from "../assets/logos/FFESSM.png";
import madeit from "../assets/logos/MaDeIT.png";


const partners = [
  {
    name: "SAI",
    logo: sai, // replace with actual path
  },
  {
    name: "Prakash Padukone Badminton Academy",
    logo: prakashacademy,
  },
  {
    name: "Haryana Steelers",
    logo: haryanasteelers,
  },
  {
    name: "FFESSM",
    logo: ffessm,
  }
];


export default function PartnersSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0e1a2b]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-12">
          Trusted by athletes and coaches from
        </h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                         rounded-2xl p-6 flex items-center justify-center 
                         hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Strategic Partners */}
        <h2 className="text-2xl font-semibold text-white mt-20 mb-10">
          Strategic Partners of ATIOM SPORTS
        </h2>
        <div className="flex justify-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg 
                          rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <img
              src={madeit} // replace with your actual logo
              alt="MaDelIT"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
