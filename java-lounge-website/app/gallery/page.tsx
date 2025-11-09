'use client';

import { useState } from 'react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Interior', 'Food', 'Coffee', 'Events'];

  const galleryItems = [
    { category: 'Interior', title: 'Cozy Seating Area', color: 'from-amber-400 to-orange-500' },
    { category: 'Coffee', title: 'Signature Latte Art', color: 'from-yellow-400 to-amber-600' },
    { category: 'Food', title: 'Ceylon Breakfast', color: 'from-orange-400 to-red-500' },
    { category: 'Interior', title: 'Modern Bar Counter', color: 'from-amber-500 to-orange-600' },
    { category: 'Coffee', title: 'Espresso Perfection', color: 'from-yellow-500 to-orange-500' },
    { category: 'Food', title: 'Artisan Pastries', color: 'from-pink-400 to-orange-400' },
    { category: 'Events', title: 'Live Music Night', color: 'from-purple-400 to-pink-500' },
    { category: 'Interior', title: 'Outdoor Terrace', color: 'from-green-400 to-teal-500' },
    { category: 'Food', title: 'Gourmet Burger', color: 'from-red-400 to-orange-500' },
    { category: 'Coffee', title: 'Cold Brew Collection', color: 'from-blue-400 to-cyan-500' },
    { category: 'Events', title: 'Coffee Tasting Session', color: 'from-amber-400 to-yellow-500' },
    { category: 'Interior', title: 'Private Dining Room', color: 'from-indigo-400 to-purple-500' },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto">
            A visual journey through Java Lounge - our space, our food, our passion
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-800 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {/* Gradient Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.category === 'Interior' && '🏠'}
                    {item.category === 'Coffee' && '☕'}
                    {item.category === 'Food' && '🍽️'}
                    {item.category === 'Events' && '🎉'}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-center mb-2">
                    {item.title}
                  </h3>
                  <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📸</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest offerings, events, and behind-the-scenes moments
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            @JavaLoungeSriLanka
          </a>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Experience It Yourself
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Pictures don't do justice - visit us and create your own memories
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Table
          </a>
        </div>
      </section>
    </div>
  );
}
