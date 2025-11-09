# Java Lounge Website - Quick Start Guide

## 🚀 Get Your Website Live in 5 Steps

### Step 1: Review the Website (5 minutes)

The website is already built and running! To see it:

```bash
cd java-lounge-website
npm install
npm run dev
```

Open your browser and visit: `http://localhost:3000`

**What to check:**
- ✅ All pages load correctly
- ✅ Navigation works smoothly
- ✅ Menu displays properly
- ✅ Booking form functions
- ✅ Mobile responsiveness

---

### Step 2: Customize Your Content (2-3 hours)

#### A. Update Contact Information

**Files to edit:**
1. `app/components/Footer.tsx`
2. `app/contact/page.tsx`

**What to change:**
```typescript
// Replace these with your actual details:
Address: "123 Galle Road, Colombo 03, Sri Lanka"
Phone: "+94 11 234 5678"
Email: "info@javalounge.lk"
Opening Hours: "Mon-Sun: 8AM - 11PM"
```

#### B. Update Menu Items

**File:** `app/menu/page.tsx`

Find the `menuData` array and update with your actual menu:

```typescript
{
  name: 'Your Coffee Name',
  description: 'Your description',
  price: 'Rs. XXX',
  popular: true  // Optional
}
```

#### C. Update About Page

**File:** `app/about/page.tsx`

- Update your founding year
- Change team member names and roles
- Update statistics (years, customers, etc.)

#### D. Add Social Media Links

**Files:** `app/components/Footer.tsx` and `app/contact/page.tsx`

Replace `#` with your actual social media URLs:
```typescript
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourpage">
<a href="https://twitter.com/yourpage">
```

---

### Step 3: Add Your Photos (1-2 hours)

#### Recommended Photos Needed:

1. **Hero Section** (Home page)
   - High-quality cafe exterior or interior shot
   - Size: 1920x1080px minimum

2. **Gallery** (12+ photos)
   - Interior shots: 4-5 photos
   - Food photos: 4-5 photos
   - Coffee/beverages: 3-4 photos
   - Events/atmosphere: 2-3 photos
   - Size: 1200x1200px (square format)

3. **Team Photos** (About page)
   - Professional headshots of key team members
   - Size: 400x400px

#### How to Add Photos:

1. Place photos in the `public/images/` folder
2. Update image references in the code:

```typescript
// Example in Gallery page:
<Image 
  src="/images/your-photo.jpg" 
  alt="Description"
  fill
  className="object-cover"
/>
```

---

### Step 4: Deploy to Internet (30 minutes)

#### Option A: Deploy to Vercel (Recommended - FREE)

1. **Create GitHub Account** (if you don't have one)
   - Go to github.com
   - Sign up for free

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - **Done! Your website is live in 2 minutes!**

4. **Get Your Domain**
   - Vercel gives you a free domain: `your-site.vercel.app`
   - Or connect your custom domain: `javalounge.lk`

#### Option B: Other Hosting Platforms

- **Netlify**: Similar to Vercel, free tier available
- **AWS Amplify**: More advanced, requires AWS account
- **Digital Ocean**: $5/month, more control

---

### Step 5: Configure Domain & Email (1 hour)

#### A. Purchase Domain

**Recommended Domains:**
- `javalounge.lk` (Sri Lankan domain)
- `javalounge.com` (International)

**Where to Buy:**
- LK Domain Registry (for .lk domains)
- Namecheap
- GoDaddy
- Google Domains

**Cost:** Rs. 2,000 - 5,000/year

#### B. Connect Domain to Vercel

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records at your domain registrar
5. Wait 24-48 hours for propagation

#### C. Set Up Email

**Option 1: Google Workspace** (Recommended)
- Professional email: info@javalounge.lk
- Cost: $6/user/month
- Includes Gmail, Calendar, Drive

**Option 2: Zoho Mail** (Budget-friendly)
- Cost: Free for 5 users
- Professional email hosting

---

## 📋 Pre-Launch Checklist

Before announcing your website, verify:

### Content
- [ ] All contact information is correct
- [ ] Menu items and prices are accurate
- [ ] About page reflects your story
- [ ] Team member information is current
- [ ] Social media links work

### Functionality
- [ ] All navigation links work
- [ ] Booking form submits successfully
- [ ] Mobile version displays correctly
- [ ] All pages load quickly
- [ ] No broken links or images

### SEO & Marketing
- [ ] Google Analytics installed
- [ ] Google My Business connected
- [ ] Meta descriptions added
- [ ] Social media preview images set
- [ ] Sitemap submitted to Google

### Technical
- [ ] HTTPS/SSL certificate active
- [ ] Domain connected properly
- [ ] Email forwarding set up
- [ ] Backup system in place
- [ ] Performance optimized

---

## 🎯 Post-Launch Actions

### Week 1: Announce
- [ ] Post on all social media platforms
- [ ] Email existing customers
- [ ] Update Google My Business
- [ ] Add website to business cards
- [ ] Update menu boards with website URL

### Week 2-4: Monitor
- [ ] Check Google Analytics daily
- [ ] Respond to booking inquiries
- [ ] Monitor form submissions
- [ ] Gather customer feedback
- [ ] Fix any reported issues

### Month 2-3: Optimize
- [ ] A/B test booking flow
- [ ] Add customer testimonials
- [ ] Update menu seasonally
- [ ] Add blog posts for SEO
- [ ] Improve based on analytics

---

## 🆘 Common Issues & Solutions

### Issue 1: Website Not Loading
**Solution:** 
- Check if dev server is running: `npm run dev`
- Clear browser cache
- Try different browser

### Issue 2: Changes Not Showing
**Solution:**
- Stop server (Ctrl+C)
- Restart: `npm run dev`
- Hard refresh browser (Ctrl+Shift+R)

### Issue 3: Build Errors
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Issue 4: Deployment Failed
**Solution:**
- Check build logs in Vercel
- Ensure all dependencies are in package.json
- Verify environment variables

---

## 📞 Need Help?

### Resources:
- **Next.js Documentation**: nextjs.org/docs
- **Tailwind CSS**: tailwindcss.com/docs
- **Vercel Support**: vercel.com/support

### Quick Commands:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## 🎉 Congratulations!

You're now ready to launch Java Lounge's website!

**Remember:**
- Take your time with content
- Use high-quality photos
- Test everything before launch
- Announce proudly on social media

**Your website is your 24/7 marketing tool. Make it count!**

---

## 📊 Success Metrics to Track

### Month 1:
- Website visitors: Target 500+
- Booking submissions: Target 50+
- Average session time: Target 2+ minutes
- Bounce rate: Target <60%

### Month 3:
- Website visitors: Target 2,000+
- Booking submissions: Target 150+
- Google ranking: Top 5 for "cafe Colombo"
- Social media referrals: 30%+

### Month 6:
- Website visitors: Target 5,000+
- Booking submissions: Target 300+
- Google ranking: #1 for "Java Lounge"
- Return visitors: 40%+

---

**Ready to make Java Lounge the most successful cafe in Sri Lanka?**

**Let's launch! 🚀**
