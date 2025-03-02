"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductsPage() {
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

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="bg-[#f2f9fd]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative bg-gradient-to-r from-[#ecf8ff] to-[#3674B5] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-white/90">
              Discover our range of high-quality pharmaceutical products designed to improve health and wellbeing
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="text-[#f2f9fd]">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pharmaceutical Excellence</h2>
          <div className="w-24 h-1 bg-[#3674B5] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our products are manufactured with the highest standards of quality and efficacy to ensure optimal health
            outcomes
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariant}>
              <Link
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#ecf8ff] to-[#e1f4ff] p-6 flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg?height=200&width=200"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain max-h-52 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3674B5] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="flex items-center text-[#3674B5] font-medium">
                    View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-[#e1f4ff] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is ready to assist you with any questions about our products
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#3674B5] text-white font-medium rounded-md hover:bg-[#2a5d91] transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

// Product data extracted from the website
const products = [
  {
    id: 1,
    name: "CARNYMP-Q10",
    slug: "carnymp-q10",
    // image: "/products/carnymp-q10.png",
    shortDescription: "L-Carnitine, Ubiquinone & Selenium Softgel Capsules",
    fullDescription:
      "CARNYMP-Q10 combines L-Carnitine, Ubiquinone (Coenzyme Q10), and Selenium in softgel capsules to support heart health, energy production, and antioxidant protection.",
    composition: "Each softgel capsule contains L-Carnitine, Ubiquinone (Coenzyme Q10), and Selenium.",
    indications: "Supports cardiovascular health, energy metabolism, and provides antioxidant protection.",
    dosage: "As directed by healthcare professional.",
  },
  {
    id: 2,
    name: "CURECIUM",
    slug: "curecium",
    // image: "/products/curecium.png",
    shortDescription: "Calcium & Calcitriol Softgel Capsules",
    fullDescription:
      "CURECIUM softgel capsules contain Calcium and Calcitriol to support bone health, calcium absorption, and overall skeletal system maintenance.",
    composition: "Each softgel capsule contains Calcium and Calcitriol (Vitamin D3).",
    indications: "For prevention and treatment of calcium deficiency, osteoporosis, and vitamin D deficiency.",
    dosage: "As directed by healthcare professional.",
  },
  {
    id: 3,
    name: "RD-BEST DSR",
    slug: "rd-best-dsr",
    // image: "/products/rd-best-dsr.png",
    shortDescription: "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules",
    fullDescription:
      "RD-BEST DSR combines Rabeprazole Sodium (enteric-coated) and Domperidone (sustained-release) for comprehensive management of gastric disorders.",
    composition: "Each capsule contains Rabeprazole Sodium (EC) and Domperidone (SR).",
    indications:
      "For treatment of gastroesophageal reflux disease (GERD), peptic ulcers, and related gastric disorders.",
    dosage: "As directed by healthcare professional.",
  },
  {
    id: 4,
    name: "TBR HEAL-D",
    slug: "tbr-heal-d",
    // image: "/products/tbr-heal-d.png",
    shortDescription: "Trypsin, Bromelain, Rutoside Trihydrate & Diclofenac Sodium Tablets",
    fullDescription:
      "TBR HEAL-D combines proteolytic enzymes (Trypsin and Bromelain) with Rutoside Trihydrate and Diclofenac Sodium to provide anti-inflammatory and analgesic effects.",
    composition: "Each tablet contains Trypsin, Bromelain, Rutoside Trihydrate, and Diclofenac Sodium.",
    indications:
      "For management of pain and inflammation in various conditions including post-operative states, injuries, and inflammatory disorders.",
    dosage: "As directed by healthcare professional.",
  },
  {
    id: 5,
    name: "TBR HEAL-FORTE",
    slug: "tbr-heal-forte",
    // image: "/products/tbr-heal-forte.png",
    shortDescription: "Trypsin, Bromelain & Rutoside Trihydrate Tablets",
    fullDescription:
      "TBR HEAL-FORTE contains proteolytic enzymes (Trypsin and Bromelain) with Rutoside Trihydrate to provide anti-inflammatory effects without NSAID components.",
    composition: "Each tablet contains Trypsin, Bromelain, and Rutoside Trihydrate.",
    indications:
      "For management of inflammation and edema in various conditions including post-operative states, injuries, and inflammatory disorders.",
    dosage: "As directed by healthcare professional.",
  },
  {
    id: 6,
    name: "FEROZIP",
    slug: "ferozip",
    // image: "/products/ferozip.png",
    shortDescription: "Ferrous Ascorbate, Folic Acid & Zinc Tablets",
    fullDescription:
      "FEROZIP combines Ferrous Ascorbate with Folic Acid and Zinc to provide comprehensive support for iron deficiency anemia and overall hematological health.",
    composition: "Each tablet contains Ferrous Ascorbate, Folic Acid, and Zinc.",
    indications:
      "For prevention and treatment of iron deficiency anemia, especially during pregnancy and other high-demand states.",
    dosage: "As directed by healthcare professional.",
  },
]

