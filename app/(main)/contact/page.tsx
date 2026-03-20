import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Divine Group of Institutions",
  description:
    "Contact Divine Group of Institutions, Nayagarh. Phone numbers, email addresses, campus locations and directions for Divine Higher Secondary School and Divine Degree College.",
  keywords: [
    "Contact Divine College",
    "Divine College Address",
    "Divine College Phone",
    "Divine Nayagarh Contact",
    "DHSS Contact",
    "DDC Contact",
  ],
  openGraph: {
    title: "Contact Us | Divine Group of Institutions",
    description:
      "Get in touch with Divine Group of Institutions, Nayagarh. Find our campus locations, phone numbers and email addresses.",
    url: "https://divinengrh.com/contact",
  },
  alternates: {
    canonical: "https://divinengrh.com/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-200">
            Get in touch with Divine Group of Institutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Campus */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h2 className="text-xl font-bold">Main Campus</h2>
              <p className="text-gray-200 text-sm">Divine Degree College (DDC)</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">
                    Maa Bhuyani Road, Gotisahi<br />
                    Nayagarh - 752070, Odisha
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+919090172721" className="text-[#003366] hover:underline text-sm block">
                    +91 9090172721
                  </a>
                  <a href="tel:+919668676867" className="text-[#003366] hover:underline text-sm block">
                    +91 9668676867
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:ddc@divinengrh.com" className="text-[#003366] hover:underline text-sm block">
                    ddc@divinengrh.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* City Campus */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h2 className="text-xl font-bold">City Campus</h2>
              <p className="text-gray-200 text-sm">Divine Higher Secondary School (DHSS)</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600 text-sm">
                    College Road<br />
                    Nayagarh - 752070, Odisha
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+919090172721" className="text-[#003366] hover:underline text-sm block">
                    +91 9090172721
                  </a>
                  <a href="tel:+919668676867" className="text-[#003366] hover:underline text-sm block">
                    +91 9668676867
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a href="mailto:dhss@divinengrh.com" className="text-[#003366] hover:underline text-sm block">
                    dhss@divinengrh.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-800">Office Hours</p>
                  <p className="text-gray-600 text-sm">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Links */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Department Emails</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#003366]" />
                <div>
                  <p className="text-gray-800 text-sm font-medium">Admissions</p>
                  <a href="mailto:admissions@divinengrh.com" className="text-[#003366] hover:underline text-sm">
                    admissions@divinengrh.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#003366]" />
                <div>
                  <p className="text-gray-800 text-sm font-medium">Accounts</p>
                  <a href="mailto:accounts@divinengrh.com" className="text-[#003366] hover:underline text-sm">
                    accounts@divinengrh.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#003366]" />
                <div>
                  <p className="text-gray-800 text-sm font-medium">Anti-Ragging</p>
                  <a href="mailto:antiragging@divinengrh.com" className="text-[#003366] hover:underline text-sm">
                    antiragging@divinengrh.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#003366]" />
                <div>
                  <p className="text-gray-800 text-sm font-medium">General Enquiry</p>
                  <a href="mailto:info@divinengrh.com" className="text-[#003366] hover:underline text-sm">
                    info@divinengrh.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Campus Map */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Main Campus Location</h2>
              <a
                href="https://maps.google.com/?q=Maa+Bhuyani+Road+Gotisahi+Nayagarh+Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 hover:underline"
              >
                Open in Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1234567890123!2d85.1234567!3d20.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiA4NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine Main Campus Location"
              />
            </div>
          </section>

          {/* City Campus Map */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">City Campus Location</h2>
              <a
                href="https://maps.google.com/?q=College+Road+Nayagarh+Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 hover:underline"
              >
                Open in Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9876543210987!2d85.0987654!3d20.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA1JzU1LjYiTiA4NcKwMDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890124"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divine City Campus Location"
              />
            </div>
          </section>
        </div>

        {/* Social Media Links */}
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#003366] text-white px-6 py-4">
            <h2 className="text-xl font-bold">Follow Us</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com/divinegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://instagram.com/divinegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://youtube.com/@divinenayagarh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
              <a
                href="https://twitter.com/divinegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-800"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;