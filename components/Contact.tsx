
import React from 'react';
import { contactInfo } from '../constants/portfolioData';
import { MailIcon, MapPinIcon, PhoneIcon, ExternalLinkIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-2">Contact & Appointment</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Ready to discuss your legal matter? Get in touch for a consultation.</p>
          <div className="inline-block w-20 h-1 bg-amber-500 rounded mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-slate-600 dark:text-slate-400">{contactInfo.address}</p>
                        <p className="text-slate-600 dark:text-slate-400">{contactInfo.office}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <PhoneIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-semibold">Phone</p>
                        <a href={`tel:${contactInfo.phone}`} className="text-slate-600 dark:text-slate-400 hover:text-amber-500">{contactInfo.phone}</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <MailIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-semibold">Email</p>
                        <a href={`mailto:${contactInfo.email}`} className="text-slate-600 dark:text-slate-400 hover:text-amber-500">{contactInfo.email}</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <ExternalLinkIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-semibold">WhatsApp</p>
                        <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-amber-500">Message on WhatsApp</a>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
             <h3 className="text-2xl font-serif font-semibold mb-6">Book Appointment</h3>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                {/* Replace YOUR_FORM_ID with your Formspree form ID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                  <input type="text" name="name" id="full-name" required className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-amber-500 focus:border-amber-500" />
                </div>
                 <div className="md:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" id="phone-number" required className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Brief Description *</label>
                <textarea name="message" id="description" rows={4} required className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-8 py-3 bg-amber-600 text-white font-semibold rounded-md shadow-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-300">
                  Send Appointment Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;