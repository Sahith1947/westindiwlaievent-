# Westin Diwali Celebrations — Event Website
**Organised by Westin College of Hotel & Business Management, Vijayawada**

🔗 **Live Production URL:** [https://westindiwlaievent.vercel.app](https://westindiwlaievent.vercel.app)  
📦 **GitHub Repository:** [https://github.com/Sahith1947/westindiwlaievent-](https://github.com/Sahith1947/westindiwlaievent-)  
💳 **Official Razorpay Registration Link:** [https://rzp.io/rzp/0u8FSXT](https://rzp.io/rzp/0u8FSXT)  

---

## 🌟 Key Features
- **Authentic Indian Diwali Atmosphere:** Deep Burgundy (`#4A071D`), Rich Maroon (`#690D2A`), Golden Yellow (`#FFD36A`), Warm Orange (`#F28C28`), and Cream (`#FFF1D5`).
- **Animated Traditional Diya:** SVG lamp with realistic flickering flame and glowing halo.
- **Official Razorpay Payment Gateway:** Direct redirect to `https://rzp.io/rzp/0u8FSXT` across all "REGISTER NOW" buttons. Frontend-only with zero forms or databases.
- **16:9 Video Showcase Section:** Responsive player with editable YouTube URL variable and designed teaser fallback.
- **8 Signature Festival Attractions:** Food Festival, Mehendi & Face Painting, Bommala Koluvu, Chilaka Jyothishyam, Musical Night, Selfie Booths, Diya & Flower Decorations, Student Creator Market.
- **Diwali Food Festival (8 Gourmet Stalls):** Beautiful food photography with editable names, descriptions, and signature menus.
- **Special Entertainment & Live Bidding:** Dedicated section with editable guidelines (no invented prices or outcomes).
- **Student Entrepreneurship & Creator Stalls:** Featuring crafts, diyas, and an "INTERESTED IN SETTING UP A STALL?" CTA with editable contact details.
- **Event Timeline:** Vertical-responsive schedule matching the official college programme.
- **Interactive Photo Gallery:** Filterable by category with an image lightbox.
- **Instagram Follow Popup:** Elegant festive popup appearing 6s after load with session-storage memory (shown once per session).
- **Mobile-First & Accessible:** Smooth scrolling, touch-optimized, and respects `prefers-reduced-motion`.

---

## 🛠️ Technology Stack
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom Diwali festive palette and animations
- **Icons:** Lucide React
- **Build Tool:** Vite 5

---

## ⚙️ How to Edit & Customize Event Content

All content, links, media, and contact details are centralized in a single file:
👉 `src/data/eventData.ts`

### 1. How to Replace the Logo
- Place your new transparent PNG or SVG logo in `public/images/westin-logo.png`.
- Or update the image path in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.

### 2. How to Add the YouTube Video URL
- Open `src/data/eventData.ts`.
- Find `youtubeVideoUrl` inside `EVENT_CONFIG`:
  ```typescript
  // Example:
  youtubeVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // Or simply the YouTube Video ID:
  youtubeVideoUrl: "dQw4w9WgXcQ",
  ```
- Leave it as `""` to display the designed festive video teaser preview.

### 3. How to Update Food Stall Details & Menus
- Open `src/data/eventData.ts`.
- Find the `FOOD_STALLS` array:
  ```typescript
  {
    id: 1,
    name: "Your Stall Name",
    category: "Main Course",
    tagline: "Your Tagline",
    description: "Your Description",
    image: "/images/stall-biryani.jpg",
    highlights: ["Dish 1", "Dish 2", "Dish 3"]
  }
  ```

### 4. How to Update Gallery Photos
- Open `src/data/eventData.ts`.
- Find the `GALLERY_ITEMS` array.
- Add local images into `public/images/` or provide external image URLs.

### 5. How to Update Contact & Stall Registration Info
- In `src/data/eventData.ts`, update `EVENT_CONFIG.stallCoordination` and `EVENT_CONFIG.contactInfo`:
  ```typescript
  stallCoordination: {
    contactPerson: "Prof. / Student Coordinator Name",
    email: "events@westin.ac.in",
    phone: "+91 866 247 1144",
  }
  ```

---

## 🚀 Local Development & Deployment

### Run Locally
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build
```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

### Deploy to Vercel
1. Push the code to a GitHub repository or use the Vercel CLI.
2. In Vercel, import the repository:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy**. The site will be live instantly with global CDN performance and HTTPS.
