import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Users, Camera, Gift, Music, Utensils } from 'lucide-react';

const SaveTheDate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample map coordinates (replace with actual venue coordinates)
  const venueLocation = {
    lat: 51.5074,
    lng: -0.1278,
    address: "Saint Michael Church, London, UK"
  };

  const sections = [
    {
      id: 'details',
      title: 'Wedding Details',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-semibold">Date</p>
              <p className="text-gray-600">September 11, 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-semibold">Time</p>
              <p className="text-gray-600">Ceremony: 2:00 PM | Reception: 5:00 PM</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'venue',
      title: 'Venue Information',
      icon: <MapPin className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="h-48 rounded-lg overflow-hidden bg-gray-100">
            {/* Embedded Map - Replace with actual Google Maps iframe */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-blue-500 mb-2" />
                <p className="font-semibold">Saint Michael Church</p>
                <p className="text-sm text-gray-600">London, UK</p>
                <a 
                  href={`https://maps.google.com/?q=${venueLocation.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'schedule',
      title: 'Event Schedule',
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          {[
            { time: '1:30 PM', event: 'Guests Arrival' },
            { time: '2:00 PM', event: 'Wedding Ceremony' },
            { time: '3:30 PM', event: 'Cocktail Hour' },
            { time: '5:00 PM', event: 'Reception & Dinner' },
            { time: '7:00 PM', event: 'Dancing & Celebrations' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-20 font-semibold text-blue-600">{item.time}</div>
              <div className="flex-1">{item.event}</div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'attire',
      title: 'Dress Code',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="text-center p-4">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-full mb-4">
            <span className="font-bold text-blue-600">FORMAL ATTIRE</span>
          </div>
          <p className="text-gray-600">
            Gentlemen: Suits or Traditional Attire<br />
            Ladies: Evening Gowns or Cocktail Dresses
          </p>
        </div>
      )
    },
    {
      id: 'gifts',
      title: 'Gift Registry',
      icon: <Gift className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Your presence is the greatest gift. However, if you wish to honor us with a present, 
            we have registries at the following stores:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {['Amazon', 'John Lewis', 'Harrods', 'Selfridges'].map((store, index) => (
              <motion.div
                key={store}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg text-center cursor-pointer border hover:border-blue-300"
              >
                <Gift className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="font-semibold">{store}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-blue-50">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute top-10 left-5 w-40 h-40 rounded-full opacity-20 bg-gradient-to-br from-yellow-300 via-blue-300 to-transparent"
      />
      
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="absolute bottom-10 right-5 w-40 h-40 rounded-full opacity-20 bg-gradient-to-tl from-yellow-300 via-blue-300 to-transparent"
      />

      {/* Floating hearts animation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute text-2xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Invitation Card */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative bg-white">
            {/* Background with parallax effect */}
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="h-80 w-full bg-cover bg-center relative"
              style={{ backgroundImage: "url('src/assets/invitattion_front/b5.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
            </motion.div>

            <div className="text-center p-6 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="text-xs tracking-[4px] text-blue-600 mb-6 font-serif uppercase">
                  SAVE THE DATE
                </h1>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="text-5xl my-4 font-bold"
                style={{ fontFamily: 'Brush Script MT, cursive', color: '#1e40af' }}
              >
                Marigold
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg italic text-gray-500"
              >
                and
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="text-5xl my-4 font-bold"
                style={{ fontFamily: 'Brush Script MT, cursive', color: '#1e40af' }}
              >
                Keith
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-sm text-gray-700 mt-8 leading-relaxed font-serif space-y-2"
              >
                <p className="font-semibold text-lg">SEPTEMBER 11 2023</p>
                <p>Saint Michael Church</p>
                <p>London, UK</p>
                <p className="pt-4 text-blue-600 font-medium">Formal Attire Requested</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scrollable Information Sections */}
        <div className="space-y-8 max-w-2xl mx-auto mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
              </div>
              {section.content}
            </motion.div>
          ))}

          {/* RSVP Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Will You Join Us?</h2>
            <p className="mb-6">Kindly RSVP by August 25, 2023</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              RSVP Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 text-gray-400"
      >
        <div className="text-center">
          <div className="text-sm mb-2">Scroll for more details</div>
          <div className="text-2xl">↓</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SaveTheDate;