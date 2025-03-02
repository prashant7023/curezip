"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"


export default function TeamPage() {
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

    const teamMembers = [
        {
            name: "Mr. Gaurav Singh",
            position: "Managing Director",
            bio: "Founder Curezip Pharma is a first-generation entrepreneur. His emphasis on research, innovation, transparency and business ethics has helped to shape this company. He oversees all functions of Strategic Planning, Sales and Marketing & Custom Manufacturing. Under his direction, Curezip has been developing high-quality business strategies and plans ensuring their alignment with the short term and long – term objectives.",
            image: "",
        },
        {
            name: "Mr. Abhishek Kumar",
            position: "Director",
            bio: "Co-founder of Curezip Pharma is a first-generation entrepreneur. His focus areas include driving revenue, income growth and business turnaround. He brings strong business acumen and the ability honed in both developed and emerging markets. He believes in a performance-driven work culture with an emphasis on value creation through innovation.",
            image: "",
        },
        {
            name: "Mr. Amit Kumar ",
            position: "Marketing Head",
            bio: "Is a dynamic and experienced professional in the pharma industries with a combined experience of two decades. His foresight and balanced thought process are an inspiration to others. He is highly focused and strongly determined. In his current role, he oversees Curezip Pharma’s Sales and Marketing.",
            image: "",
        },
        {
            name: "Dr. Pranay Pandey",
            position: "Product Consultant",
            bio: "Is a medical professional who leads the organisation quality right from the development of products to its commercialisation. His main focus is to identify the right products for our customers. His insight into various fields of medicines gives us a competitive edge. ",
            image: "",
        },
        {
            name: "Mrs. Monika Singh ",
            position: "HR Head",
            bio: "Is a passionate professional who looks after developing and implementing HR strategies and initiatives aligned with the overall business strategy. Bridging management and employee relations by addressing demands, grievances or other issues. Managing the recruitment and selection process.  ",
            image: "",
        },
        {
            name: "Ms. Priya Bharti ",
            position: "IT Consultant",
            bio: "Is an IT professional who has proven extensive knowledge in computing. She has global experience with several MNCs. She extends complex and independent support in system operations, system administration and software support.",
            image: "",
        },
    ]

    return (
        <div className="bg-[#f2f9fd]">
            {/* Hero Section - Same design as About page */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative bg-gradient-to-r from-[#f2f9fd]  to-[#3674B5]  overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-20"></div>
                </div>
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
                        <p className="text-xl text-white/90">Meet the experts behind Curezip Pharma</p>
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

            {/* Team Introduction */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-16 md:py-24 container mx-auto px-4"
            >
                <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 inline-block relative">
                        Leadership
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3674B5] rounded"></span>
                    </h2>

                    <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed">
                        Our leadership team brings together decades of pharmaceutical expertise, innovation, and business acumen to
                        drive Curezip Pharma's mission of developing life-saving medications.
                    </motion.p>
                </motion.div>

                {/* Team Members */}
                <div className="space-y-20">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeIn}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center`}
                        >
                            <div className="md:w-1/4">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="relative overflow-hidden rounded-2xl shadow-xl  p-2"
                                >
                                    <div className="aspect-square overflow-hidden rounded-xl">
                                        <Image
                                            src={member.image || "/default.jpg"}
                                            alt={member.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex space-x-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white p-2 rounded-full shadow-md text-[#3674B5]"
                                        >
                                            <Linkedin size={20} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white p-2 rounded-full shadow-md text-[#3674B5]"
                                        >
                                            <Mail size={20} />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="md:w-2/3">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                                        <p className="text-[#3674B5] font-medium">{member.position}</p>
                                    </div>
                                    <div className="text-sm lg:text-lg w-20 h-1 bg-[#3674B5] rounded"></div>
                                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Team Values */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="py-16 "
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 inline-block relative">
                            Our Values
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3674B5] rounded"></span>
                        </h2>
                    </div>

                    <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description:
                                    "We constantly seek new ways to improve healthcare outcomes through research and development.",
                            },
                            {
                                title: "Integrity",
                                description: "We uphold the highest ethical standards in all our business practices and relationships.",
                            },
                            {
                                title: "Excellence",
                                description:
                                    "We strive for excellence in everything we do, from research to manufacturing to customer service.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white text-sm lg:text-lg p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-[#d0edff] rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl font-bold text-[#3674B5]">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* 
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gradient-to-r from-[#80d0ff] to-[#3674B5] py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence in
            healthcare.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#3674B5] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            View Careers
          </motion.button>
        </div>
      </motion.section> */}

            {/* Team Gallery */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="py-16 md:py-24 container mx-auto px-4"
            >
                <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 inline-block relative">
                        Life at Curezip
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3674B5] rounded"></span>
                    </h2>

                    <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-12">
                        Take a glimpse into our collaborative and innovative work environment
                    </motion.p>
                </motion.div>

                <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            className="overflow-hidden rounded-xl shadow-md"
                        >
                            <Image
                                src={`/placeholder.svg?height=${300 + index * 20}&width=${300 + index * 20}`}
                                alt={`Team gallery image ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover aspect-square"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    )
}

