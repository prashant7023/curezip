"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faMicroscope, faPills, faKitMedical } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }
  // Corrected icon mapping
  const icons = {
    flask: faFlask,
    microscope: faMicroscope,
    pill: faPills,
    "first-aid": faKitMedical,
  };
  

  return (
    <div className="bg-[#f2f9fd]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-gradient-to-r from-[#f2f9fd]  to-[#3674B5] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About Curezip Pharma</h1>
            <p className="text-xl text-white/90">Caring Beyond Healthcare</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="text-white">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* About Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 container mx-auto px-4"
      >
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className=" text-2xl lg:text-3xl font-bold text-gray-800 mb-6 inline-block relative">
            About
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f2f9fd]  rounded"></span>
          </h2>

          <motion.p variants={fadeIn} className="text-sm lg:text-lg  text-gray-600 leading-relaxed mb-8">
            Curezip Pharma is a specialist pharmaceutical corporation focusing on developing important anti-infective
            drugs for severe and sometimes life-threatening infections. As a reputed group, we have been founded brick
            by brick on the cornerstone of treatment. "Caring Beyond Healthcare" has always been and will continue to be
            our driving intent.
          </motion.p>
        </motion.div>
        {/* Icons Section */}
        <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: "flask", label: "Research" },
            { icon: "microscope", label: "Development" },
            { icon: "pill", label: "Production" },
            { icon: "first-aid", label: "Healthcare" },
          ].map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={iconAnimation}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#80d0ff] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={icons[item.icon]} size="2x" className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
              </motion.div>
            );
          })}
        </motion.div>

    
        {/* Core Principles */}
        <motion.div variants={fadeIn} className="bg-white rounded-2xl p-6 md:p-12 mb-16 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 inline-block relative">
            Our Core Principles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f2f9fd]  rounded"></span>
          </h2>

          <motion.p variants={fadeIn} className="text-sm lg:text-lg text-gray-600 leading-relaxed">
            Our core principles drive any dialogue, organizational judgement, and employee behaviour. To remain
            ever-relevant to our clients, we review them and re-calibrate our plans regularly. Our skills, capacity to
            invent, creativity, and imagination enable us to be the fast ever. We want to come in the first not only in
            sales but also in identifying the emerging consumer demands. We will do this by successfully shortening the
            implementation process, acquiring registration documents quickly, and coordinating manufacturing and
            delivery.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.div variants={staggerContainer} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div variants={fadeIn} className="md:w-1/2">
            <h2 className=" text-2xl lg:text-3xl font-bold text-gray-800 mb-6 inline-block relative">
              Our Vision
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f2f9fd]  rounded"></span>
            </h2>

            <motion.p variants={fadeIn} className="text-sm lg:text-lg text-gray-600 leading-relaxed">
              To be a leading pharmaceutical company recognized for our commitment to quality, innovation, and patient
              care. We strive to develop life-saving medications that improve the quality of life for patients worldwide
              while maintaining the highest standards of ethics and integrity in all our operations.
            </motion.p>
          </motion.div>

          <motion.div variants={iconAnimation} className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/vision1.png"
              alt="Our Vision"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gradient-to-r from-[#80d0ff] to-[#3674B5] py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Join Us in Our Mission</h2>
          <p className="text-sm lg:text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Together, we can make a difference in healthcare and improve lives around the world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-base lg:text-lg bg-white text-[#3674B5] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}

