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
  const [openSubmenus, setOpenSubmenus] = useState({})
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
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
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
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
                        isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20 backdrop-blur-sm"
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
                      isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20 backdrop-blur-sm"
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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className={`lg:hidden p-2 ${!isScrolled && "hover:bg-white/20 text-white"}`}>
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="flex flex-col h-full pl-5 bg-white">
                {/* Logo in Mobile Menu - Increased size */}
                <div className="flex items-center justify-between mb-8 pt-4">
                  <div className="relative h-14 w-32">
                    <Image
                      src="/Curezip-logo.png?height=150&width=250"
                      alt="CureZip Pharma Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <button
                            onClick={() =>
                              setOpenSubmenus((prev) => ({
                                ...prev,
                                [item.name]: !prev[item.name],
                              }))
                            }
                            className="flex items-center justify-between font-medium text-lg text-gray-900 hover:text-[#3674B5] w-full"
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-100 ${
                                openSubmenus[item.name] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openSubmenus[item.name] && (
                              <motion.div
                                key="submenu"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 space-y-2 border-l-2 border-blue-200 overflow-hidden"
                              >
                                {item.submenu?.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="block text-gray-600 hover:text-[#3674B5]"
                                    onClick={() => setIsSheetOpen(false)}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="font-medium text-lg text-gray-900 hover:text-[#3674B5]"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

