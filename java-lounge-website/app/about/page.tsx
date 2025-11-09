export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Java Lounge</h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto">
            Our story, our passion, our commitment to excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2015, Java Lounge began with a simple vision: to create a space where 
                  exceptional coffee meets warm Sri Lankan hospitality. What started as a small cafe 
                  in the heart of Colombo has grown into one of the city's most beloved destinations.
                </p>
                <p>
                  We believe that coffee is more than just a beverage—it's an experience, a moment 
                  of connection, and a daily ritual that deserves to be celebrated. Every cup we serve 
                  is crafted with precision, passion, and the finest ingredients.
                </p>
                <p>
                  Our commitment extends beyond great coffee. We source our beans ethically, support 
                  local farmers, and create a welcoming environment where everyone feels at home. 
                  Whether you're here for a quick espresso or a leisurely brunch, we're dedicated to 
                  making your visit memorable.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">☕</div>
                <p className="font-serif text-2xl font-bold text-gray-900">
                  Brewing Excellence Since 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emoji: '🌟',
                title: 'Quality First',
                description: 'We never compromise on the quality of our ingredients or service.',
              },
              {
                emoji: '🤝',
                title: 'Community',
                description: 'Building connections and supporting our local community.',
              },
              {
                emoji: '🌱',
                title: 'Sustainability',
                description: 'Committed to ethical sourcing and environmental responsibility.',
              },
              {
                emoji: '💝',
                title: 'Hospitality',
                description: 'Treating every guest like family with genuine warmth.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{value.emoji}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your perfect cup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Head Barista',
                description: 'With 10 years of experience, Rajesh crafts each cup with precision and artistry.',
              },
              {
                name: 'Nisha Perera',
                role: 'Executive Chef',
                description: 'Nisha brings creativity and passion to every dish, blending local and international flavors.',
              },
              {
                name: 'Amal Fernando',
                role: 'Manager',
                description: 'Amal ensures every guest receives exceptional service and a memorable experience.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-800 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '100+', label: 'Menu Items' },
              { number: '15+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                <div className="font-serif text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the Java Lounge difference for yourself
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
