'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto">
            We'd love to hear from you. Book a table or get in touch with us
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">
                      123 Galle Road<br />
                      Colombo 03<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      +94 11 234 5678<br />
                      +94 77 123 4567
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@javalounge.lk<br />
                      reservations@javalounge.lk
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 11:00 PM<br />
                      Saturday - Sunday: 7:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">📷</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Book a Table
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your reservation request has been received. We'll contact you shortly to confirm.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="+94 77 123 4567"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any dietary restrictions or special occasions?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 text-center">
            Find Us Here
          </h2>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl text-gray-700 font-semibold">
                123 Galle Road, Colombo 03, Sri Lanka
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-amber-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
