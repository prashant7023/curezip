"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import products from "../../data/products"
import { useState, useEffect } from "react"

const ProductImageCarousel = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % 4);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // Get all available images
  const allImages = [
    images.image,
    images.image2,
    images.image3,
    images.image4,
  ].filter(Boolean);

  return (
    <div 
      className="relative h-64 bg-gradient-to-br from-[#ecf8ff] to-[#e1f4ff] p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <Image
            src={allImages[currentImageIndex] || "https://lh3.googleusercontent.com/d/1rXUi5eWiJK3fO3OTS23ETLdRzo3ujozW"}
            alt={`${productName} - Image ${currentImageIndex + 1}`}
            width={200}
            height={200}
            className="object-contain max-h-52 transform group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'w-3 bg-[#3674B5]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
          {products.map((product) => {
            // Properly encode product name with lowercase letters for URL
            const productUrl = `https://medihut.in/medicines/${encodeURIComponent(product.name.toLowerCase())}`;
            return (
              <motion.div 
                key={product.id} 
                variants={itemVariant} 
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <Link href={`/products/${product.slug}`}>
                  <ProductImageCarousel images={product } productName={product.name} />
                </Link>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3674B5] transition-colors">
                    {product.name}
                    <sup className="ml-1 text-xs">™</sup><sup className="ml-0.5 text-xs">®</sup>
                  </h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                </div>
                <div className="flex items-center justify-between p-6">
                  <Link href={`/products/${product.slug}`} className="text-[#3674B5] flex items-center font-medium">
                    View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href={productUrl} className="inline-flex items-center px-4 py-2 bg-[#3674B5] text-white font-medium rounded-md hover:bg-[#2a5d91] transition-colors">
                    Buy Now
                  </Link>
                </div>
              </motion.div>
            )
          })}
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

