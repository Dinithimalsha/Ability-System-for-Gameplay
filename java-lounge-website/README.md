# Java Lounge Website

A stunning, modern website for Java Lounge - Sri Lanka's premier cafe destination. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Pages
- **Home Page**: Eye-catching hero section, features showcase, specialties, testimonials, and call-to-action sections
- **Menu Page**: Interactive menu with category filtering (Coffee, Tea, Breakfast, Lunch & Dinner, Pastries & Desserts, Beverages)
- **About Page**: Company story, values, team members, and statistics
- **Gallery Page**: Visual showcase with category filters (Interior, Food, Coffee, Events)
- **Contact Page**: Comprehensive contact information, booking form, and location map

### Design Highlights
- ✨ Modern, clean, and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful color scheme with amber/orange tones
- 🔄 Smooth animations and transitions
- 🎯 User-friendly navigation with sticky header
- 📝 Interactive booking form with validation
- 🏷️ Category-based filtering for menu and gallery
- ⭐ Customer testimonials section
- 📊 Business statistics showcase

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd java-lounge-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
java-lounge-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Main navigation component
│   │   └── Footer.tsx         # Footer component
│   ├── page.tsx               # Home page
│   ├── menu/
│   │   └── page.tsx           # Menu page
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── gallery/
│   │   └── page.tsx           # Gallery page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🎨 Customization Guide

### Update Business Information

#### Contact Details (Footer.tsx & Contact Page)
```typescript
// Update in app/components/Footer.tsx and app/contact/page.tsx
Address: "123 Galle Road, Colombo 03, Sri Lanka"
Phone: "+94 11 234 5678"
Email: "info@javalounge.lk"
Hours: "Mon-Sun: 8AM - 11PM"
```

#### Menu Items (Menu Page)
Edit the `menuData` array in `app/menu/page.tsx`:
```typescript
{
  name: 'Your Item Name',
  description: 'Item description',
  price: 'Rs. XXX',
  popular: true  // Optional: marks as popular
}
```

#### Social Media Links
Update social media URLs in:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`

### Add Real Images

Replace gradient placeholders in the Gallery page with actual images:

1. Add images to the `public/` folder
2. Update `app/gallery/page.tsx`:
```typescript
// Replace gradient placeholders with:
<Image 
  src="/your-image.jpg" 
  alt="Description"
  fill
  className="object-cover"
/>
```

### Color Scheme

The website uses an amber/orange color palette. To customize:

Edit Tailwind classes throughout the components:
- Primary: `amber-800`, `orange-700`
- Backgrounds: `amber-50`, `orange-50`
- Accents: `amber-500`, `orange-600`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📝 Content Recommendations

### For Java Lounge Team

To make this website truly yours:

1. **Photography**: 
   - Hire a professional photographer to capture:
     - Interior shots of your cafe
     - High-quality food and beverage photos
     - Team member portraits
     - Customer experience moments

2. **Menu Updates**:
   - Add your actual menu items with real prices
   - Include dietary information (vegan, gluten-free, etc.)
   - Add allergen information
   - Update seasonal specials regularly

3. **Social Media Integration**:
   - Connect your actual Facebook, Instagram, and Twitter accounts
   - Consider adding an Instagram feed widget
   - Add social sharing buttons

4. **Google Maps**:
   - Replace the map placeholder with actual Google Maps embed
   - Add your business to Google My Business

5. **SEO Optimization**:
   - Add meta descriptions for each page
   - Include relevant keywords
   - Add structured data (Schema.org)
   - Submit sitemap to Google Search Console

6. **Analytics**:
   - Add Google Analytics
   - Set up conversion tracking for bookings
   - Monitor user behavior

## 🎯 Why This Website Will Convince Java Lounge

### Professional Design
- Modern, clean aesthetic that reflects quality
- Consistent branding throughout
- Professional typography and spacing

### User Experience
- Intuitive navigation
- Fast loading times
- Mobile-friendly design
- Easy-to-use booking system

### Business Features
- Online table booking
- Complete menu showcase
- Contact information readily available
- Social media integration
- Gallery to showcase ambiance

### Technical Excellence
- Built with latest web technologies
- SEO-friendly structure
- Fast performance
- Easy to maintain and update
- Scalable architecture

### Competitive Advantage
- Stands out from typical cafe websites
- Provides complete information visitors need
- Encourages bookings and visits
- Builds brand credibility

## 📞 Support

For questions or customization requests, contact your web developer.

## 📄 License

This website is created for Java Lounge, Sri Lanka.

---

**Built with ❤️ for Java Lounge**

*Where every cup tells a story*
