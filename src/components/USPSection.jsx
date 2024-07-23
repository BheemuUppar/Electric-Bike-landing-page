// src/components/USPSection.jsx

import { motion } from 'framer-motion';
import bike  from '../assets/bike-images/bike.png'
import blackBike  from '../assets/bike-images/black.png';
import blueBike  from '../assets/bike-images/blue.png';
import redBike  from '../assets/bike-images/red.png';
import golden  from '../assets/bike-images/golden.png';
// import img  from '../assets/bike-images/img.png';


const usps = [
  {
    title: "LFP Battery",
    text: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!",
    image: bike
  },
  {
    title: "Wider Tyres",
    text: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.",
    image: blackBike
  },
  {
    title: "Range Prediction",
    text: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
    image: blueBike
  },
  {
    title: "Extraordinary Experience",
    text: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!",
    image: redBike
  },
  {
    title: "Rugged and Simple Design",
    text: "We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
    image: golden
  }
];

const USPSection = () => {
  return (
    <section id="usp" className="py-16 px-8">
      <div className="container mx-auto">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex-wrap`}
          >
            <div className="w-full md:w-1/2 px-4  min-w-[300px]  ">
              <img src={usp.image} alt={usp.title} className="w-full h-auto object-cover rounded-lg shadow-lg"  />
            </div>
            <div className="w-full md:w-1/2 px-4  min-w-[300px]  ">
              <h2 className="text-2xl font-semibold mb-4">{usp.title}</h2>
              <p>{usp.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default USPSection;
