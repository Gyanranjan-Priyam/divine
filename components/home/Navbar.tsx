"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from "../icons/SocialIcons";

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
  { name: "Facebook", href: "https://facebook.com/divinegroupofinstitutions", icon: FacebookIcon },
  { name: "YouTube", href: "https://youtube.com/@divinegroupofinstitutions", icon: YoutubeIcon },
  { name: "Instagram", href: "https://instagram.com/divinegroupofinstitutions", icon: InstagramIcon },
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
      <div className={`bg-[#003366] text-white py-2 px-4 text-center transition-all duration-300 ${scrolled ? "h-0 py-0 overflow-hidden opacity-0" : ""}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="hidden sm:flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 1234 567 890
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              info@divinengrh.com
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-2">
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
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <Button>
            <Link
              href="/pay-online"
              className="hidden sm:inline hover:text-[#D4A853] transition-colors"
            >
              Pay Online
            </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Logo & Navigation Wrapper - Becomes Sticky */}
      <div className={`transition-all duration-300 ${scrolled ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""}`}>
        {/* Logo & Institution Name */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/divine.png"
                alt="Divine Group of Institutions"
                width={scrolled ? 50 : 65}
                height={scrolled ? 50 : 65}
                className="rounded-full transition-all duration-300"
              />
              <div>
                <h1 className={`font-bold text-[#003366] tracking-tight leading-tight transition-all duration-300 ${scrolled ? "text-lg sm:text-xl lg:text-2xl" : "text-xl sm:text-2xl lg:text-3xl"}`}>
                  DIVINE GROUP OF INSTITUTIONS
                </h1>
                <p className={`text-gray-500 mt-0.5 transition-all duration-300 ${scrolled ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"}`}>
                  Nayagarh, Odisha
                </p>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#003366] hover:bg-gray-100 rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
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
