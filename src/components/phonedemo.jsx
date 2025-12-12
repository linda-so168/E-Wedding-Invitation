// src/components/1.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users, Gift } from "lucide-react";

/* --------------------------------------------- */
/* PHONE MOCKUP */
/* --------------------------------------------- */
const PhoneMockup = ({ children }) => (
  <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] p-4 shadow-2xl border-[6px] border-gray-900 flex items-center justify-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-20" />
    <div className="w-full h-full rounded-[32px] overflow-y-auto overflow-x-hidden bg-white shadow-inner">
      {children}
    </div>
  </div>
);

/* --------------------------------------------- */
/* SAVE THE DATE INVITE */
/* --------------------------------------------- */
const SaveTheDate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-start bg-gradient-to-b from-white to-blue-50 pb-20">

      {/* Floating hearts */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 0], y: [-10, -25, -10] }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity
          }}
          className="absolute text-lg"
          style={{
            top: `${6 + i * 12}%`,
            left: `${15 + i * 18}%`
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xs rounded-2xl overflow-hidden shadow-xl bg-white mt-8"
      >
        <div
          className="h-64 w-full bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/invitattion_front/b5.jpg')" }}
        >
          <div className="w-full h-full bg-gradient-to-t from-white/50 to-transparent" />
        </div>

        <div className="text-center p-5">
          <h1 className="text-xs tracking-[4px] text-blue-600 mb-6 font-serif uppercase">
            SAVE THE DATE
          </h1>

          <div
            className="text-5xl mb-1 font-bold"
            style={{ fontFamily: "Brush Script MT, cursive", color: "#1e40af" }}
          >
            Marigold
          </div>

          <div className="text-lg italic text-gray-500 mb-1">and</div>

          <div
            className="text-5xl font-bold"
            style={{ fontFamily: "Brush Script MT, cursive", color: "#1e40af" }}
          >
            Keith
          </div>

          <div className="text-sm text-gray-600 mt-6 font-serif space-y-1">
            <p className="font-semibold text-base">SEPTEMBER 11 2023</p>
            <p>Saint Michael Church</p>
            <p>London, UK</p>
            <p className="pt-3 text-blue-600 font-medium">
              Formal Attire Requested
            </p>
          </div>
        </div>
      </motion.div>

      {/* More Sections */}
      <div className="w-full px-4 mt-8 space-y-6">
        {/* DETAILS */}
        <Section title="Wedding Details" icon={<Calendar className="w-5 h-5" />}>
          <InfoRow icon={<Calendar />} title="Date" text="September 11, 2023" />
          <InfoRow icon={<Clock />} title="Time" text="2:00 PM Ceremony" />
        </Section>

        {/* VENUE */}
        <Section title="Venue" icon={<MapPin />}>
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <MapPin className="w-10 h-10 mx-auto text-blue-500 mb-2" />
            <p className="font-semibold">Saint Michael Church</p>
            <p className="text-sm text-gray-500">London, UK</p>
          </div>
        </Section>

        {/* DRESS CODE */}
        <Section title="Dress Code" icon={<Users />}>
          <p className="text-center text-gray-600">Formal Attire</p>
        </Section>

        {/* RSVP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-blue-600 text-white p-6 rounded-xl text-center mb-12"
        >
          <h2 className="text-lg font-bold mb-2">Will You Join Us?</h2>
          <p className="mb-4 text-sm">Kindly RSVP by August 25</p>

          <button className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold shadow">
            RSVP Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

/* --------------------------------------------- */
/* REUSABLE UI COMPONENTS */
/* --------------------------------------------- */
const Section = ({ title, icon, children }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-blue-100 rounded-lg mr-2">{icon}</div>
      <h2 className="font-semibold text-gray-800">{title}</h2>
    </div>
    {children}
  </div>
);

const InfoRow = ({ icon, title, text }) => (
  <div className="flex items-center mb-2 space-x-3">
    <div className="text-blue-500">{icon}</div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  </div>
);

/* --------------------------------------------- */
/* MAIN EXPORT */
/* --------------------------------------------- */

export default function DigitalInvitations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center p-10">
      <PhoneMockup>
        <SaveTheDate />
      </PhoneMockup>
    </div>
  );
}
