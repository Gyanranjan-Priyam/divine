"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from "../icons/SocialIcons";

const quickLinks = [
  { name: "About Us", href: "/about/group" },
  { name: "Admissions", href: "/admissions/process" },
  { name: "Academic Programs", href: "/academic/courses" },
  { name: "Facilities", href: "/facilities/library" },
  { name: "Placements", href: "/placement" },
  { name: "Contact Us", href: "/contact" },
];

const importantLinks = [
  { name: "Student Portal", href: "/student/portal" },
  { name: "Online Fee Payment", href: "/fees/payment" },
  { name: "Examination Results", href: "/academic/results" },
  { name: "Academic Calendar", href: "/academic/calendar" },
  { name: "Career Opportunities", href: "/careers" },
];

const resourceLinks = [
  { name: "CHSE, Odisha", href: "https://chseodisha.nic.in" },
  { name: "UGC", href: "https://www.ugc.ac.in" },
  { name: "Utkal University", href: "https://utkaluniversity.ac.in/" },
  { name: "Govt. of Odisha", href: "https://odisha.gov.in" },
  { name: "e-Pathshala", href: "https://epathshala.nic.in" },
  { name: "NAAC", href: "https://www.naac.gov.in" },
];

const policies = [
  { name: "Terms & Conditions", href: "/policies/terms" },
  { name: "Anti-Ragging Policy", href: "/policies/anti-ragging" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/divinegroupofinstitutions", icon: FacebookIcon, hoverBg: "hover:bg-[#1877F2]" },
  { name: "Twitter", href: "https://twitter.com/divineinstitute", icon: TwitterIcon, hoverBg: "hover:bg-[#1DA1F2]" },
  { name: "YouTube", href: "https://youtube.com/@divinegroupofinstitutions", icon: YoutubeIcon, hoverBg: "hover:bg-[#FF0000]" },
  { name: "Instagram", href: "https://instagram.com/divinegroupofinstitutions", icon: InstagramIcon, hoverBg: "hover:bg-[#E4405F]" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: About & Contact */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src="/divine.png"
                alt="Divine Group of Institutions"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  Divine Group of
                  <br />
                  Institutions
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A853] mt-0.5 shrink-0" />
                <p>Nayagarh, Odisha - 752069, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A853] shrink-0" />
                <div>
                  <a href="tel:+911234567890" className="hover:text-white transition-colors">
                    +91 1234 567 890
                  </a>
                  <span className="text-gray-600 mx-1.5">|</span>
                  <a href="tel:+911234567891" className="hover:text-white transition-colors">
                    +91 1234 567 891
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A853] shrink-0" />
                <a
                  href="mailto:info@divinengrh.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@divinengrh.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4A853] mt-0.5 shrink-0" />
                <div>
                  <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-500 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#D4A853] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#D4A853] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#D4A853] inline-block">
              Important Links
            </h4>
            <ul className="space-y-2.5">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#D4A853] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Social */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 pb-2 border-b-2 border-[#D4A853] inline-block">
              Useful Resources
            </h4>
            <ul className="space-y-2.5 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#D4A853] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
                Follow Us
              </h5>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a2a42]">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {currentYear} Divine Group of Institutions. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-500">
              {policies.map((policy, index) => (
                <React.Fragment key={policy.name}>
                  <Link
                    href={policy.href}
                    className="hover:text-[#D4A853] transition-colors"
                  >
                    {policy.name}
                  </Link>
                  {index < policies.length - 1 && (
                    <span className="text-gray-700">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs text-gray-600">
              Designed by{" "}
              <Link
                href="https://priyam.tech"
                className="hover:text-[#D4A853] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gyanranjan Priyam
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
