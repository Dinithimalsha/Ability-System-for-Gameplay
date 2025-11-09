'use client';

import { useState } from 'react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
};

type MenuCategory = {
  name: string;
  emoji: string;
  items: MenuItem[];
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const menuData: MenuCategory[] = [
    {
      name: 'Coffee',
      emoji: '☕',
      items: [
        { name: 'Espresso', description: 'Rich and bold single shot', price: 'Rs. 350', popular: true },
        { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 'Rs. 450' },
        { name: 'Latte', description: 'Smooth espresso with steamed milk', price: 'Rs. 500' },
        { name: 'Americano', description: 'Espresso with hot water', price: 'Rs. 400' },
        { name: 'Mocha', description: 'Chocolate and espresso blend', price: 'Rs. 550', popular: true },
        { name: 'Flat White', description: 'Velvety microfoam with espresso', price: 'Rs. 480' },
        { name: 'Iced Coffee', description: 'Cold brew over ice', price: 'Rs. 520' },
        { name: 'Affogato', description: 'Espresso over vanilla ice cream', price: 'Rs. 600' },
      ],
    },
    {
      name: 'Tea',
      emoji: '🍵',
      items: [
        { name: 'Ceylon Black Tea', description: 'Premium Sri Lankan black tea', price: 'Rs. 300', popular: true },
        { name: 'Green Tea', description: 'Refreshing Japanese green tea', price: 'Rs. 350' },
        { name: 'Chamomile Tea', description: 'Calming herbal infusion', price: 'Rs. 380' },
        { name: 'Earl Grey', description: 'Classic bergamot-flavored tea', price: 'Rs. 350' },
        { name: 'Masala Chai', description: 'Spiced Indian tea with milk', price: 'Rs. 400' },
        { name: 'Iced Tea', description: 'Refreshing cold tea with lemon', price: 'Rs. 380' },
      ],
    },
    {
      name: 'Breakfast',
      emoji: '🍳',
      items: [
        { name: 'Ceylon Breakfast', description: 'String hoppers, dhal curry, sambol, and egg', price: 'Rs. 850', popular: true },
        { name: 'English Breakfast', description: 'Eggs, bacon, sausage, toast, and beans', price: 'Rs. 950' },
        { name: 'Pancake Stack', description: 'Fluffy pancakes with maple syrup and butter', price: 'Rs. 750' },
        { name: 'Avocado Toast', description: 'Smashed avocado on sourdough with poached egg', price: 'Rs. 800' },
        { name: 'Omelette', description: 'Three-egg omelette with choice of fillings', price: 'Rs. 650' },
        { name: 'French Toast', description: 'Brioche with cinnamon and fresh berries', price: 'Rs. 700' },
      ],
    },
    {
      name: 'Lunch & Dinner',
      emoji: '🍽️',
      items: [
        { name: 'Chicken Kottu', description: 'Sri Lankan street food favorite', price: 'Rs. 900', popular: true },
        { name: 'Grilled Chicken Sandwich', description: 'With lettuce, tomato, and special sauce', price: 'Rs. 850' },
        { name: 'Caesar Salad', description: 'Romaine lettuce, parmesan, croutons, and dressing', price: 'Rs. 750' },
        { name: 'Pasta Carbonara', description: 'Creamy pasta with bacon and parmesan', price: 'Rs. 950' },
        { name: 'Fish & Chips', description: 'Battered fish with crispy fries', price: 'Rs. 1100' },
        { name: 'Vegetable Curry', description: 'Mixed vegetables in coconut curry with rice', price: 'Rs. 800' },
        { name: 'Beef Burger', description: 'Juicy beef patty with all the fixings', price: 'Rs. 1000', popular: true },
        { name: 'Seafood Pasta', description: 'Prawns and calamari in tomato sauce', price: 'Rs. 1200' },
      ],
    },
    {
      name: 'Pastries & Desserts',
      emoji: '🥐',
      items: [
        { name: 'Croissant', description: 'Buttery French pastry', price: 'Rs. 350' },
        { name: 'Chocolate Brownie', description: 'Rich and fudgy with walnuts', price: 'Rs. 450', popular: true },
        { name: 'Cheesecake', description: 'New York style with berry compote', price: 'Rs. 550' },
        { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: 'Rs. 600' },
        { name: 'Cinnamon Roll', description: 'Warm and gooey with cream cheese frosting', price: 'Rs. 400' },
        { name: 'Fruit Tart', description: 'Fresh seasonal fruits on custard', price: 'Rs. 500' },
        { name: 'Watalappan', description: 'Traditional Sri Lankan coconut custard', price: 'Rs. 380', popular: true },
      ],
    },
    {
      name: 'Beverages',
      emoji: '🥤',
      items: [
        { name: 'Fresh Orange Juice', description: 'Freshly squeezed', price: 'Rs. 450' },
        { name: 'Mango Smoothie', description: 'Creamy mango blend', price: 'Rs. 500', popular: true },
        { name: 'Chocolate Milkshake', description: 'Rich and creamy', price: 'Rs. 550' },
        { name: 'Lime Soda', description: 'Refreshing lime with soda', price: 'Rs. 350' },
        { name: 'Iced Chocolate', description: 'Cold chocolate drink with whipped cream', price: 'Rs. 520' },
        { name: 'King Coconut', description: 'Fresh Sri Lankan king coconut water', price: 'Rs. 300' },
      ],
    },
  ];

  const activeMenuData = menuData.find((cat) => cat.name === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto">
            Discover our carefully curated selection of coffee, food, and beverages
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
            {menuData.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-amber-800 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-4xl font-bold text-gray-900 flex items-center">
              <span className="text-5xl mr-3">{activeMenuData?.emoji}</span>
              {activeMenuData?.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeMenuData?.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102 relative overflow-hidden"
              >
                {item.popular && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900 pr-4">
                    {item.name}
                  </h3>
                  <span className="text-amber-800 font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit us or book a table to enjoy our delicious offerings
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Table
          </a>
        </div>
      </section>
    </div>
  );
}
