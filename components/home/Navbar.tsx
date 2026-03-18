"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { FacebookIcon,  YoutubeIcon, InstagramIcon, } from "../icons/SocialIcons";

interface SubMenu {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenu[];
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/divine.ngrh", icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com/divine.ngrh", icon: InstagramIcon },
  { name: "YouTube", href: "https://youtube.com/@divinenayagarh", icon: YoutubeIcon },
];

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    submenu: [
      { name: "About Divine Group", href: "/about/group" },
      { name: "Vision & Mission", href: "/about/vision" },
      { name: "Infrastructure", href: "/about/infrastructure" },
      { name: "Achievements", href: "/about/achievements" },
    ],
  },
  {
    name: "Institutions",
    submenu: [
      { name: "Divine Higher Secondary School", href: "/dhss" },
      { name: "Divine Degree College", href: "/ddc" },
    ],
  },
  {
    name: "Academics",
    submenu: [
      { name: "Courses Offered", href: "/academic/courses" },
      { name: "Curriculum", href: "/academic/curriculum" },
      { name: "Examination", href: "/academic/examination" },
      { name: "Academic Calendar", href: "/academic/calendar" },
    ],
  },
  {
    name: "Admissions",
    submenu: [
      { name: "Admission Process", href: "/admissions/process" },
      { name: "Fee Structure", href: "/admissions/fees" },
      { name: "Scholarships", href: "/admissions/scholarships" },
      { name: "Apply Online", href: "/admissions/apply" },
    ],
  },
  {
    name: "Facilities",
    submenu: [
      { name: "Library", href: "/facilities/library" },
      { name: "Laboratories", href: "/facilities/labs" },
      { name: "Sports", href: "/facilities/sports" },
      { name: "Hostel", href: "/facilities/hostel" },
    ],
  },
  { name: "Pay Online", href: "/pay-online" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Top Utility Bar */}
      <div className="bg-[#003366] text-white py-2 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop & Tablet View */}
          <div className="hidden sm:flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-3 lg:gap-5">
              <a href="tel:+919090172721" className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">+91-9090172721</span>
              </a>
              <a href="mailto:divine.ngrh@gmail.com" className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">divine.ngrh@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4A853] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile View - Single Line */}
          <div className="sm:hidden flex items-center justify-between text-[9px]">
            {/* Left: Contact */}
            <div className="flex items-center gap-1.5">
              <a href="tel:+919090172721" className="flex items-center gap-0.5 hover:text-[#D4A853] transition-colors">
                <Phone className="w-3 h-3" />
              </a>
              <a href="mailto:divine.ngrh@gmail.com" className="flex items-center gap-0.5 hover:text-[#D4A853] transition-colors">
                <Mail className="w-3 h-3" />
              </a>
            </div>
            {/* Right: Social + Pay */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4A853] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-3 h-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Logo & Navigation Wrapper - Normal (Not Sticky) */}
      <div>
        
        {/* Desktop/Tablet Header - Hidden on Small Mobile */}
        <div className="hidden sm:block bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
            <Link href="/" className="flex flex-row items-center justify-center gap-3 sm:gap-4">
              <Image
                src="/divine.png"
                alt="Divine Group of Institutions"
                width={130}
                height={100}
                className="rounded-full"
              />
              <div className="text-center">
                <h1 className="font-bold text-[#003366] tracking-tight leading-tight text-2xl sm:text-3xl lg:text-5xl">
                  DIVINE GROUP OF INSTITUTIONS
                </h1>
                <p className="text-gray-600 text-2xl sm:text-3xl mt-1 font-bold">
                  || ज्ञानम् सर्वजनहिताय ||
                </p>
                <p className="text-[#003366] font-bold mt-1 sm:mt-2 text-base sm:text-lg lg:text-xl">
                  (Under the aegis of Divine Educational Trust)
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Header - Only on Very Small Screens */}
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="px-3 py-2 relative">
            {/* Hamburger Menu Button - Absolute Left */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="absolute right-3 top-5 -translate-y-1/2 p-2 text-[#003366] hover:bg-gray-100 rounded z-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Centered Logo and Text */}
            <Link href="/" className="flex flex-col items-center justify-center py-2 px-12">
              <Image
                src="/divine.png"
                alt="Divine Group of Institutions"
                width={100}
                height={80}
                className="rounded-full mb-2"
              />
              <div className="text-center">
                <h1 className="font-bold text-[#003366] text-3xl leading-tight">
                  DIVINE GROUP OF INSTITUTIONS
                </h1>
                <p className="text-gray-600 text-lg font-bold mt-1">
                  || ज्ञानम् सर्वजनहिताय ||
                </p>
                <p className="text-[#003366] font-bold text-[10px] mt-0.5">
                  (Under the aegis of Divine Educational Trust)
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="hidden lg:flex items-center justify-center">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="flex items-center gap-1 px-4 py-3.5 text-sm font-medium text-white hover:bg-[#002244] transition-colors">
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-4 py-3.5 text-sm font-medium text-white hover:bg-[#002244] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg border-t-3 border-[#D4A853] z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#003366] hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 max-h-[70vh] overflow-y-auto">
              <ul className="py-1">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileSubmenu(
                              mobileSubmenu === item.name ? null : item.name,
                            )
                          }
                          className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${mobileSubmenu === item.name ? "rotate-180" : ""}`}
                          />
                        </button>
                        {mobileSubmenu === item.name && (
                          <ul className="bg-gray-50 border-t border-gray-100">
                            {item.submenu.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="block px-8 py-2.5 text-sm text-gray-600 hover:text-[#003366] hover:bg-white transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#003366] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
