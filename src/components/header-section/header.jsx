"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
      submenu: [
        { name: "Cardiology", href: "/products/cardiology" },
        { name: "Diabetes", href: "/products/diabetes" },
        { name: "Neurology", href: "/products/neurology" },
        { name: "General Health", href: "/products/general-health" },
      ],
    },
    { name: "Team", href: "/team" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              <Image
                src="/Curezip-logo.png?height=100&width=200"
                alt="CureZip Pharma Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center text-base font-medium ${
                        isScrolled ? "text-gray-800" : "text-white"
                      } hover:text-emerald-600 transition-colors`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
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
                    className={`text-base font-medium ${
                      isScrolled ? "text-gray-800" : "text-white"
                    } hover:text-emerald-600 transition-colors`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 transition duration-200">
              <Phone className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden p-2">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="flex flex-col h-full ml-5">
                {/* Logo in Mobile Menu */}
                <div className="flex items-center justify-between mb-8 pt-4">
                  <div className="relative h-10 w-40">
                    <Image
                      src="/Curezip-logo.png?height=100&width=200"
                      alt="CureZip Pharma Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <div className="font-medium text-lg text-gray-900">{item.name}</div>
                          <div className="pl-4 space-y-2 border-l-2 border-emerald-200">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block text-gray-600 hover:text-emerald-600"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="font-medium text-lg text-gray-900 hover:text-emerald-600"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Button */}
                <div className="mt-auto pt-10 pb-3 m-5">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Phone className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
