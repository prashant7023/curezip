"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setHydrated(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      href: "/products",
    },
    { name: "Team", href: "/team" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hydrated && isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Increased size */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-34">
              <Image
                src="/Curezip-logo.png?height=150&width=250"
                alt="CureZip Pharma Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Improved button styling */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center text-base font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
                        hydrated && isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20 backdrop-blur-sm"
                      } hover:text-[#3674B5]`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu?.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3674B5]"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
                      hydrated && isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20 backdrop-blur-sm"
                    } hover:text-[#3674B5]`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button - Enhanced */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="flex items-center px-5 py-2.5 text-white font-medium bg-[#3674B5] hover:bg-[#266cb6] rounded-md transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-md bg-white/30  transition-colors duration-200 focus:outline-none ${hydrated && isScrolled ? "text-[#3674B5]" : "text-white"}`}
            style={{ position: 'relative', zIndex: 1000 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="relative block w-8 h-8">
              {/* Top bar */}
              <span
                className={`absolute left-0 w-8 h-1 rounded-full bg-current transition-all duration-300
                  ${isMobileMenuOpen ? 'rotate-45 top-3.5' : 'top-1'}
                `}
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              ></span>
              {/* Middle bar */}
              <span
                className={`absolute left-0 w-8 h-1 rounded-full bg-current transition-all duration-300
                  ${isMobileMenuOpen ? 'opacity-0 left-4' : 'top-3.5'}
                `}
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              ></span>
              {/* Bottom bar */}
              <span
                className={`absolute left-0 w-8 h-1 rounded-full bg-current transition-all duration-300
                  ${isMobileMenuOpen ? '-rotate-45 top-3.5' : 'top-6'}
                `}
                style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              ></span>
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-[95vw] max-w-md"
          >
            <div className="relative mt-16 bg-[#f2f9fd]/30 backdrop-blur-xl rounded-2xl shadow-2xl pt-4 pb-4 px-4 min-h-[180px]">
              {/* No close button here, handled by the animated menu button */}
              <div className="flex flex-row items-stretch gap-4">
                {/* Logo on the left */}
                <div className="flex items-center pr-4 border-r border-[#e0eaf3]">
                  <div className="relative h-14 w-24">
                    <Image
                      src="/Curezip-logo.png?height=150&width=250"
                      alt="CureZip Pharma Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                {/* Navigation grid on the right */}
                <div className="flex-1 flex flex-col justify-center pl-6">
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {navItems.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center justify-center text-center text-base font-semibold rounded-xl py-3 px-2 shadow transition-all duration-200
                          ${idx % 2 === 0 ? 'bg-[#f2f9fd] text-[#3674B5] hover:bg-[#3674B5] hover:text-white' : 'bg-[#3674B5] text-white hover:bg-[#266cb6]'}
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

