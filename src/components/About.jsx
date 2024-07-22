import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo/Rhyno Logo .png';
import groupBike from '../assets/bike-images/Copy of grp.png'

const AboutUs = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const fadeIn2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <section id="about-us" className="bg-black-300 text-white-400 p-8 flex flex-col items-center ">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
      </div>
      
      <div ref={ref1} className="w-full flex flex-col md:flex-row items-center mb-8">
        <animated.div style={fadeIn1} className="md:w-1/2 p-4">
          <p className="text-lg">
            Established in 2019 by an automotive engineer with a vision for sustainable and robust
            mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
            of young individuals passionately driving innovation in the electric vehicle industry. We
            believe in engineering solutions that solve problems.
          </p>
        </animated.div>
        <animated.div style={fadeIn1} className="md:w-1/2 p-4">
          <img src={logo} alt="About Us Image 1" className="w-full h-64 object-cover rounded shadow" />
        </animated.div>
      </div>

      <div ref={ref2} className="w-full flex flex-col md:flex-row items-center">
        <animated.div style={fadeIn2} className="md:w-1/2 p-4">
          <img src={groupBike} alt="About Us Image 2" className="w-full h-64 object-cover rounded shadow" />
        </animated.div>
        <animated.div style={fadeIn2} className="md:w-1/2 p-4">
          <p className="text-lg">
            With our first product, we've taken a bold step to create something more than just a vehicle;
            it's a unique experience of elegance, comfort and style, addressing the pitfalls of
            conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
            ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
            operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
            appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
            era in sustainable and dependable electric transportation.
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default AboutUs;
