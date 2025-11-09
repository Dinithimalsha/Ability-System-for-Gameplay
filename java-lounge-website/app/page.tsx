import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmNzk1MzAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-amber-800">Java Lounge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Where every cup tells a story. Experience the perfect blend of exceptional coffee, 
            delicious cuisine, and warm Sri Lankan hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-amber-800"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-800 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-800 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Java Lounge?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a cafe - we're your home away from home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Premium Coffee
              </h3>
              <p className="text-gray-600">
                Sourced from the finest estates in Sri Lanka and around the world, 
                expertly roasted and brewed to perfection.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Delicious Cuisine
              </h3>
              <p className="text-gray-600">
                A fusion of local and international flavors, prepared fresh daily 
                with the finest ingredients.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl mb-4">🏡</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Cozy Ambiance
              </h3>
              <p className="text-gray-600">
                Relax in our beautifully designed space, perfect for work, 
                meetings, or catching up with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our signature offerings that keep customers coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Signature Latte', desc: 'Our house special blend', emoji: '☕' },
              { name: 'Ceylon Breakfast', desc: 'Traditional Sri Lankan morning feast', emoji: '🍳' },
              { name: 'Artisan Pastries', desc: 'Freshly baked daily', emoji: '🥐' },
              { name: 'Specialty Teas', desc: 'Premium Ceylon tea selection', emoji: '🍵' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Fernando',
                text: 'The best coffee in Colombo! The ambiance is perfect for both work and relaxation. Highly recommended!',
                rating: 5,
              },
              {
                name: 'David Silva',
                text: 'Amazing food and exceptional service. Java Lounge has become my go-to spot for meetings and casual hangouts.',
                rating: 5,
              },
              {
                name: 'Amara Perera',
                text: 'Love the cozy atmosphere and the variety on the menu. The pastries are absolutely divine!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Java Lounge?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Visit us today or book a table for your next gathering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
            <Link
              href="/menu"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-800 transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
