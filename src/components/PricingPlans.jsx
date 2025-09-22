import React from "react";

const plans = [
  {
    title: "6 Months",
    price: "$26",
    duration: "/6 months",
    features: [
      "✔ 12 months + 1 Months Additional",
      "✔ $3.71 per Month",
      "✔ Plan for per user",
      "🎯 Best Value – Save 15%"
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    title: "Yearly",
    price: "$44",
    duration: "/year",
    features: [
      "✔ 12 months + 2 Months Additional",
      "✔ $3.14 per Month",
      "✔ Plan for per user",
      "🎯 Best Value – Save 15%",
    ],
    buttonText: "Choose Plan",
    highlight: true,
  },
];

const PricingPlans = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 py-12 bg-black text-white">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`bg-white text-black shadow-lg rounded-2xl w-80 p-8 transition transform hover:scale-105 flex flex-col h-full ${
            plan.highlight ? "border-2 border-black" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">{plan.title}</h2>
          <p className="text-5xl font-extrabold mb-4 text-center">
            {plan.price}{" "}
            <span className="text-lg font-medium">{plan.duration}</span>
          </p>
          <ul className="text-gray-700 text-base space-y-3 mb-6 text-left flex-grow">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className={`${
                  feature.includes("Save") ? "font-semibold text-black" : ""
                }`}
              >
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition mt-auto">
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
