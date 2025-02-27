"use client"
import { useState, useEffect, useRef } from "react"
import CountUp from "react-countup"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, HeartPulse, Microscope, Mail, Linkedin, ChevronUp } from "lucide-react"

// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Reusable animated component
const AnimatedSection = ({ children, className, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const teamMembers = [
    {
      name: "Mr. Gaurav Singh",
      title: "Managing Director",
      image: "",
    },
    {
      name: "Mr. Abhishek Kumar",
      title: "Director",
      image: "",
    },
    {
      name: "Mr. Amit Kumar",
      title: "Marketing Head",
      image: "",
    },
    {
      name: "Dr. Pranay Pandey",
      title: "Product Consultant",
      image: "",
    },
    {
      name: "Mrs. Monika Singh",
      title: "HR Head",
      image: "",
    },
    {
      name: "Miss. Priya Bharti",
      title: "IT Consultant",
      image: "",
    },
  ]

  // Hero section parallax effect
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5])

  // Reference for stats section to control CountUp animation
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const [startCounting, setStartCounting] = useState(false)

  // Start counting when stats section comes into view
  useEffect(() => {
    if (statsInView) {
      setStartCounting(true)
    }
  }, [statsInView])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src="/img1.jpeg"
            alt="Healthcare professional holding medication"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </motion.div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Caring Beyond Healthcare
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Making world-class affordable medicines accessible to everyone
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/products"
                className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 cursor-pointer px-6 py-3 rounded-lg text-white flex items-center"
              >
                Discover Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm text-white border border-white hover:bg-white/20 px-6 py-3 rounded-lg"
              >
                About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 className="text-3xl font-bold mb-6 text-gray-900" variants={fadeInUp}>
                Our Vision
              </motion.h2>
              <motion.div className="h-1 w-20 bg-emerald-600 mb-6" variants={fadeInUp}></motion.div>
              <motion.p className="text-lg text-gray-700 mb-6" variants={fadeInUp}>
                We are dedicated to fulfilling the promise of human potential, in all places, in all aspects and stages
                of life. We believe that health is the key to that promise. Because at our healthiest, we can achieve
                anything.
              </motion.p>
              <motion.p className="text-lg text-gray-700" variants={fadeInUp}>
                And that is why our pursuit of helping people achieve their best health at every life stage will never
                end. This is how we put that belief into practice every and each day.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative h-[400px] w-[600px] rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src="/main.jpg" alt="Our vision" fill className="object-cover drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At CureZip Pharma, our values guide everything we do - from research and development to manufacturing and
              distribution.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <HeartPulse className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Patient-Centric</h3>
                  <p className="text-gray-700">
                    We put patients at the center of everything we do, ensuring our medicines improve lives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in quality, safety, and efficacy in all our products.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                    <Microscope className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously innovate to develop better treatments and improve healthcare outcomes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="CureZip Pharma facility"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Brand</h2>
              <div className="h-1 w-20 bg-emerald-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                CureZip Pharma is a Gurugram based pharmaceutical company established in 2020 with the vision of making
                world-class affordable medicines.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We have been founded brick by brick on the cornerstone of treatment. "Caring Beyond Healthcare" has
                always been and will continue to be our driving intent.
              </p>
              <p className="text-lg text-gray-700">
                We are expanding our reach in the key developing markets in India to make services more accessible
                across the country.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-slate-800 mb-6">Our Team</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The management team of Curezip Pharma came together with a common motive to serve humanity. The team is
              keen to discover new possibilities and are always eager to adopt innovative approaches. Individuals of our
              team play critical roles in the clinical discovery of several major drugs.
            </p>
          </motion.div>

          <div className="relative w-full">
            <motion.div
              className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  custom={index}
                  className="group relative flex-shrink-0 w-[280px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg snap-start"
                >
                  <div className="aspect-square overflow-hidden bg-slate-100">
                    <Image
                      src={member.image || "/default.jpg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative p-6">
                    <div className="absolute -top-10 right-6 flex space-x-2 opacity-0 transition-all duration-300 group-hover:top-6 group-hover:opacity-100">
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                        <Linkedin className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                    <p className="text-primary mt-1">{member.title}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <button className="flex items-center text-sm text-slate-600 hover:text-primary">
                        View Profile <ChevronUp className="ml-1 h-4 w-4 rotate-90" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <div ref={statsRef} className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { end: 50, label: "Products", suffix: "+" },
              { end: 15, label: "States Covered", suffix: "+" },
              { end: 200, label: "Healthcare Partners", suffix: "+" },
              { end: 100000, label: "Patients Helped", suffix: "K+" },
            ].map((stat, index) => {
              // Create a unique ID for each counter
              const counterId = `counter-${index}`

              return (
                <motion.div key={index} variants={fadeInUp}>
                  <motion.div
                    id={counterId}
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {statsInView && (
                      <CountUp
                        start={0}
                        end={stat.end}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                        useEasing={true}
                        redraw={true}
                      />
                    )}
                  </motion.div>
                  <div className="text-xl">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What Healthcare Professionals Say</h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trusted by healthcare professionals across the country
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                name: "Dr. Sharma",
                role: "Cardiologist",
                quote:
                  "CureZip's cardiovascular medications have shown remarkable efficacy in my patients with minimal side effects.",
              },
              {
                name: "Dr. Patel",
                role: "Endocrinologist",
                quote:
                  "The diabetes management solutions from CureZip have helped my patients achieve better glycemic control consistently.",
              },
              {
                name: "Dr. Gupta",
                role: "Neurologist",
                quote:
                  "I've seen significant improvements in patients using CureZip's neurological products. Their quality is exceptional.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <motion.div
                        className="text-emerald-600 mb-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                      </motion.div>
                      <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="mt-auto">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-emerald-600 rounded-xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="text-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
                <p className="text-xl mb-6">
                  Join our network of healthcare professionals and institutions to provide better healthcare solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                      Contact Our Team
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                      Download Brochure
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="relative h-[300px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Healthcare professionals"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-emerald-600 text-white shadow-lg z-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </div>
  )
}

