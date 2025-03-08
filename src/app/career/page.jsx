"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, ChevronRight } from "lucide-react"

export default function CareerPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90">Shape the future of healthcare with Curezip Pharma</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="text-[#f2f9fd]">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Career Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 md:py-24 container mx-auto px-4"
      >
        <motion.div
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto mb-16"
        >

          {/* Career Content - Right */}
          <motion.div variants={fadeIn} className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#266cb6] mb-6 inline-block relative">
              Career Opportunities
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#266cb6] rounded"></span>
            </h2>

            <motion.p variants={fadeIn} className="text-gray-700 leading-relaxed mb-4">
              Learn, discover, invent, and watch your career evolve at an accelerated rate. Work for a highly creative
              group of like-minded individuals. Be a member of the team that guarantees the manufacture and delivery of
              high-quality goods. During our weekly squad trips, you can get to know your teammates better.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-700 leading-relaxed">
              Enjoy a smooth combination between your career and personal lives.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeIn} className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/career-img.png?height=400&width=800"
                alt="Curezip Pharma Team Collaboration"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>


        {/* Open Positions */}
        {/* <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-[#266cb6] mb-6 inline-block relative">
            Open Positions
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#266cb6] rounded"></span>
          </h2>

          <div className="space-y-4">
            {[
              "Research Scientist",
              "Clinical Trial Manager",
              "Regulatory Affairs Specialist",
              "Quality Control Analyst",
              "Marketing Specialist",
            ].map((position, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#266cb6] group-hover:text-[#1a4c8f] transition-colors">
                    {position}
                  </h3>
                  <ChevronRight className="text-[#266cb6] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Application CTA */}
        <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-[#266cb6] mb-4">Ready to Join Us?</h3>
          <p className="text-gray-600 mb-6">Interested candidates can drop their CV at:</p>
          <motion.a
            href="mailto:hr@curezip.in"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#266cb6] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#1a4c8f] transition-colors"
          >
            <Mail className="mr-2" />
            hr@curezip.in
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  )
}

