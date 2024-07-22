import React from "react";
import Typing from "react-typing-effect";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bike  from '../assets/bike-images/bike.png'
import blackBike  from '../assets/bike-images/black.png';
import blueBike  from '../assets/bike-images/blue.png';
import USPSection from "./USPSection";

const Home = () => {
  const words = ["Elegance", "Minimalism", "Comfort"];
  const products = [
    { name: "SE03 Lite", image: bike, link: "#se03-lite" },
    { name: "SE03", image: blackBike, link: "#se03" },
    { name: "SE03 Max", image: blueBike, link: "#se03-max" },
  ];

  return (
    <section
      id="home"
      className="relative bg-black-300 text-white-400 min-h-screen flex flex-col items-center justify-center p-8"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Let's Elevate Your Ride Experience With Rhyno
        </h1>
        <h1 className="text-4xl font-bold mb-4"> – Where Superiority Meets </h1>
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">
          <Typing
            text={words}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            cursorClassName="text-4xl"
            className="inline-block"
          />
        </h1>
      </div>

      <div className="w-full  mt-8">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={2000}
          className="rounded-lg shadow-lg"
        >
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full  object-cover rounded-t-lg" loading="lazy"
              />
              <button
                onClick={() => (window.location.href = product.link)}
                className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Check Out {product.name}
              </button>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-8">
        {/* Carousel for USP */}
        {/* <div className="bg-white p-4 rounded shadow-lg w-full md:w-1/2 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Unique Selling Points</h2>
          <div className="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">Fire-safe Battery</div>
              <div className="carousel-item">Range Prediction</div>
              <div className="carousel-item">Comfortable Ride</div>
              <div className="carousel-item">Stable and Safe</div>
            </div>
          </div>
        </div> */}
        <USPSection/>
      </div>

      {/* Floating Pre-book now button */}
      <a
        href="#pre-book"
        className="fixed bottom-4 right-4 bg-yellow-500 text-white py-2 px-4 rounded shadow-lg animate-bounce"
      >
        Pre-book Now
      </a>
    </section>
  );
};

export default Home;
