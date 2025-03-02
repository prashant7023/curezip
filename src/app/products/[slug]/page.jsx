"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

// Product data (same as in products page)
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
                            <span className="text-gray-900 font-medium">{product.name}</span>
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
                    {/* Product Image */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-gradient-to-br from-[#ecf8ff] to-[#e1f4ff] rounded-xl p-8 flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <Image
                                src={product.image || "/placeholder.svg?height=400&width=400"}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="object-contain mx-auto"
                            />
                        </div>
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

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
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
