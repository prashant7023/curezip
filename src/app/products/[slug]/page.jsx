"use client"

import { use, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import products from "../../../data/products"

const ProductImageCarousel = ({ images, productName }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    // Get all available images
    const allImages = [
        images.image,
        images.image2,
        images.image3,
        images.image4,
    ].filter(Boolean);

    return (
        <div 
            className="relative bg-gradient-to-br from-[#ecf8ff] to-[#e1f4ff] rounded-xl p-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full max-w-md mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-square"
                    >
                        <Image
                            src={allImages[currentImageIndex] || "/placeholder.svg?height=400&width=400"}
                            alt={`${productName} - Image ${currentImageIndex + 1}`}
                            width={400}
                            height={400}
                            className="object-contain mx-auto"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {allImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'w-6 bg-[#3674B5]' : 'w-2 bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function ProductPage({ params }) {
    // Unwrap the promise to get the params object
    const resolvedParams = use(params)
    const product = products.find((p) => p.slug === resolvedParams.slug)

    if (!product) {
        notFound()
    }

    // Find related products (excluding current product)
    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

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
        <div className="min-h-screen  bg-[#f2f9fd]">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative bg-gradient-to-r from-[#ecf8ff] to-[#3674B5] overflow-hidden"
            >
                {/* Faint background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-20"></div>
                </div>

                {/* Main container */}
                <div className="container relative mt-10 z-10 mx-auto px-4 py-20">
                    <motion.div variants={fadeIn} className="max-w-3xl text-left">
                        {/* Breadcrumb */}
                        <div className="flex items-center text-sm text-gray-600 space-x-2">
                            <Link href="/" className="hover:text-[#3674B5]">
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/products" className="hover:text-[#3674B5]">
                                Products
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-gray-900 font-medium">
                                {product.name}™®
                                {/* <sup className="ml-1 text-xs">™</sup><sup className="ml-0.5 text-xs">®</sup> */}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom SVG wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230" className="text-[#f2f9fd]">
                        <path
                            fill="currentColor"
                            fillOpacity="1"
                            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        />
                    </svg>
                </div>
            </motion.section>

            {/* Product Details */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-7xl mx-auto px-4 py-12 md:py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Product Image Carousel */}
                    <motion.div variants={fadeIn}>
                        <ProductImageCarousel images={product} productName={product.name} />
                    </motion.div>

                    {/* Product Info */}
                    <motion.div variants={staggerContainer}>
                        <motion.div variants={itemVariant}>
                            <Link
                                href="/products"
                                className="inline-flex items-center text-[#3674B5] font-medium mb-6 hover:text-[#2a5d91] transition-colors"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Products
                            </Link>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {product.name}™®
                                {/* <sup className="ml-1 text-xs">™</sup><sup className="ml-0.5 text-xs">®</sup> */}
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">{product.shortDescription}</p>

                            <div className="w-16 h-1 bg-[#3674B5] mb-8"></div>
                        </motion.div>

                        <motion.div variants={staggerContainer} className="space-y-8">
                            <motion.div variants={itemVariant}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                                <p className="text-gray-600">{product.fullDescription}</p>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Composition</h2>
                                <p className="text-gray-600">{product.composition}</p>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Indications</h2>
                                <p className="text-gray-600">{product.indications}</p>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">Dosage</h2>
                                <p className="text-gray-600">{product.dosage}</p>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <Link
                                    href={`https://medihut-web.vercel.app/medicines/${product.slug}`}
                                    className="inline-flex items-center px-6 py-3 bg-[#3674B5] text-white font-medium rounded-md hover:bg-[#2a5d91] transition-colors"
                                >
                                    Order Now
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Related Products */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white py-16"
            >
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>

                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <motion.div key={relatedProduct.id} variants={itemVariant}>
                                <Link
                                    href={`/products/${relatedProduct.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-48 bg-gradient-to-br from-[#ecf8ff] to-[#e1f4ff] p-6 flex items-center justify-center">
                                        <Image
                                            src={relatedProduct.image || "/placeholder.svg?height=150&width=150"}
                                            alt={relatedProduct.name}
                                            width={150}
                                            height={150}
                                            className="object-contain max-h-40 transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3674B5] transition-colors">
                                            {relatedProduct.name}
                                            <sup className="ml-1 text-xs">™</sup><sup className="ml-0.5 text-xs">®</sup>
                                        </h3>
                                        <p className="text-sm text-gray-600">{relatedProduct.shortDescription}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
