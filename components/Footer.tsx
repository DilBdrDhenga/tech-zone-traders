"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">TECHZONE</span>
              <span className="block text-sm">TRADERS</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading digital display and advertising solutions provider in
              Nepal since B.S. 2075.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-DEFAULT transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-DEFAULT transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-DEFAULT transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-DEFAULT transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Why Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-secondary-DEFAULT transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "LED Display Solutions",
                "LED Display Rental",
                "2D & 3D Sign Boards",
                "Printing & Branding",
                "Smart Digital Solutions",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-secondary-DEFAULT transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-DEFAULT flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-DEFAULT" />
                <a
                  href="tel:+9779800000000"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  +977 9800000000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-DEFAULT" />
                <a
                  href="mailto:info@techzonetraders.com"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  info@techzonetraders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Tech Zone Traders. All rights reserved.</p>
          <p className="mt-2">
            Leading Digital Display & Advertising Solutions in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
