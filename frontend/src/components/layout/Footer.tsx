import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MapPinIcon, MailIcon, ClockIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Niyo Salon</h2>
            <p className="mb-4">
              Your premier destination for premium hair styling and custom
              tattoo art.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Style Street, Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0" />
                <span>contact@niyosalon.com</span>
              </li>
              <li className="flex items-start">
                <ClockIcon size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Mon-Sat: 9:00 AM - 8:00 PM
                  <br />
                  Sunday: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Niyo Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;