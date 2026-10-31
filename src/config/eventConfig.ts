import { Attraction, FoodStall, ScheduleItem, GalleryItem, StudentCraft } from '../types/event';

/**
 * =============================================================================
 * WESTIN DIWALI CELEBRATIONS — CENTRAL EVENT CONFIGURATION
 * =============================================================================
 * Edit event details, links, stalls, contacts, and images easily from this file.
 */

// -----------------------------------------------------------------------------
// 1. PAYMENT & SOCIAL LINKS (STRICT REQUIREMENTS)
// -----------------------------------------------------------------------------
export const EVENT_LINKS = {
  // Official Razorpay hosted payment link for event registration
  // Direct redirect requirement: No internal checkout forms.
  razorpayRegistration: 'https://rzp.io/rzp/0u8FSXT',

  // Official Westin College Instagram profile
  instagramUrl: 'https://www.instagram.com/westin_college_vijayawada/',
  instagramHandle: '@westin_college_vijayawada',

  // College website / official portal
  collegeWebsite: 'https://westincollege.edu.in',
};

// -----------------------------------------------------------------------------
// 2. VIDEO SECTION CONFIGURATION
// -----------------------------------------------------------------------------
// Paste YouTube video URL here when ready (e.g. 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' or 'https://youtu.be/...')
// If left as empty string or placeholder, a rich festive trailer experience will be displayed.
export const YOUTUBE_VIDEO_URL = ''; 

export const VIDEO_DETAILS = {
  title: 'Westin Diwali Celebrations 2024 — Official Teaser',
  subtitle: 'Experience the magic, vibrant lights, and cultural grandeur waiting for you on campus.',
  thumbnailImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1920&q=80',
  duration: 'Diwali Festive Glimpse',
};

// -----------------------------------------------------------------------------
// 3. CORE EVENT METADATA
// -----------------------------------------------------------------------------
export const EVENT_DETAILS = {
  name: 'WESTIN DIWALI CELEBRATIONS',
  collegeName: 'Westin College',
  collegeSubtitle: 'Westin College of Hotel Management & Business Studies',
  campusCity: 'Vijayawada, Andhra Pradesh',
  tagline: 'Celebrate the Festival of Lights with Tradition, Culture, Food & Togetherness.',
  
  // Schedule & Venue essentials
  reportingTime: '4:30 PM',
  dressCode: 'Traditional Wear (Ethnic Kurta / Saree / Anarkali)',
  venue: 'Westin College Main Campus, Vijayawada',
  dateFormatted: 'Grand Diwali Festive Eve',
  
  // Registration Badges
  registrationFeeNote: 'Instant Booking Confirmation via Razorpay',
  passesStatus: 'Registration Open — Limited Capacity',
};

// -----------------------------------------------------------------------------
// 4. FESTIVAL ATTRACTIONS (ALL 8 REQUIRED SECTIONS)
// -----------------------------------------------------------------------------
export const ATTRACTIONS: Attraction[] = [
  {
    id: 1,
    title: 'Food Festival — 8 Food Stalls',
    tagline: 'Flavours of India',
    description: 'Explore a delightful variety of savoury street snacks, authentic festive delicacies, royal biryanis, and refreshing beverages crafted by student chefs.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    category: 'Cuisine',
    badge: '8 Distinct Stalls',
    highlightIcon: 'UtensilsCrossed',
  },
  {
    id: 2,
    title: 'Mehendi & Face Painting',
    tagline: 'Festive Artistry',
    description: 'Adorn your palms with intricate henna patterns and festive glitter face art applied by talented student artisans celebrating Diwali motifs.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    category: 'Art & Culture',
    badge: 'Live Artists',
    highlightIcon: 'Sparkles',
  },
  {
    id: 3,
    title: 'Bommala Koluvu',
    tagline: 'Timeless Heritage',
    description: 'Experience this reverent South Indian festive toy display featuring traditional clay figurines, mythological stories, and cultural craftsmanship.',
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    badge: 'Traditional Showcase',
    highlightIcon: 'Crown',
  },
  {
    id: 4,
    title: 'Chilaka Jyothishyam',
    tagline: 'Ancient Mystic Lore',
    description: 'Enjoy the charming and popular traditional parrot astrology experience. Watch the revered fortune-teller bird pick your auspicious Diwali tarot card!',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0b38?auto=format&fit=crop&w=800&q=80',
    category: 'Folk Tradition',
    badge: 'Crowd Favourite',
    highlightIcon: 'Eye',
  },
  {
    id: 5,
    title: 'Musical Night',
    tagline: 'Rhythms & Festive Beats',
    description: 'Immerse yourself in energetic musical rhythms, live band sessions, folk dance performances, and foot-tapping Diwali fusion beats under golden festive lights.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    category: 'Live Music',
    badge: 'Live Stage',
    highlightIcon: 'Music',
  },
  {
    id: 6,
    title: 'Selfie Booths',
    tagline: 'Cherished Memories',
    description: 'Capture Instagram-worthy memories at elegantly designed Diwali photo spots adorned with marigold floral rings, twinkling fairy lights, and ethnic arches.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    category: 'Photography',
    badge: 'Photo Spots',
    highlightIcon: 'Camera',
  },
  {
    id: 7,
    title: 'Diya & Flower Decorations',
    tagline: 'Spectacular Illuminations',
    description: 'Witness thousands of handcrafted clay diyas radiating warm glows across campus alongside vibrant natural marigold garlands and intricate rangoli designs.',
    image: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=800&q=80',
    category: 'Illumination',
    badge: '1,000+ Diyas',
    highlightIcon: 'Flame',
  },
  {
    id: 8,
    title: 'Student Creator Market',
    tagline: 'Youth Entrepreneurship',
    description: 'Discover and purchase custom hand-painted diyas, decorative Diwali torans, festival handicrafts, and creative gifts crafted with passion by Westin students.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    category: 'Student Market',
    badge: 'Shop & Support',
    highlightIcon: 'ShoppingBag',
  },
];

// -----------------------------------------------------------------------------
// 5. SPECIAL ENTERTAINMENT & LIVE BIDDING
// -----------------------------------------------------------------------------
export const ENTERTAINMENT_DATA = {
  sectionTitle: 'Special Entertainment & Bidding Extravaganza',
  sectionSubtitle: 'High-octane entertainment designed to unite students, faculty, and guests in festive joy.',
  activities: [
    {
      title: 'Live Bidding & Friendly Auction',
      description: 'Engage in a friendly, high-energy live bidding arena! Students and faculty can bid for exclusive student creations, commemorative Diwali hampers, and surprise festive goodies.',
      badge: 'Interactive Fun',
      icon: 'Gavel',
      details: [
        'Open to all registered attendees',
        'Transparent & friendly campus bidding rules',
        'Official items announced during the live event',
        'Proceeds encourage student entrepreneurial projects',
      ],
      note: 'Specific auction items and bidding guidelines will be announced on-stage by our student hosts.',
    },
    {
      title: 'Interactive Festive Games',
      description: 'Test your agility, wit, and team spirit in engaging traditional carnival games, Diwali trivia quests, and lightning-round challenges with exciting spot prizes.',
      badge: 'Spot Prizes',
      icon: 'Gamepad2',
      details: [
        'Diya Balance Challenge',
        'Festive Trivia & Antakshari Face-off',
        'Bollywood & Tollywood Musical Guessing Game',
        'Spot Prizes for Best Traditional Attire',
      ],
    },
    {
      title: 'Student Performances & Showcase',
      description: 'Be dazzled by synchronized classical fusion dances, dynamic contemporary sets, and acoustic vocal melodies presented by Westin’s brightest artistic stars.',
      badge: 'Live Stage',
      icon: 'Sparkles',
      details: [
        'Classical Kuchipudi & Bharatnatyam invocations',
        'High-energy folk dance medleys',
        'Live acoustic sets & fusion band jams',
      ],
    },
    {
      title: 'Exciting Surprises & Grand Finale',
      description: 'Keep your eyes on the main stage as we roll out surprise flash mobs, festival lucky draws, and a breathtaking closing crackers display.',
      badge: 'Grand Finale',
      icon: 'PartyPopper',
      details: [
        'Lucky registration draw announcements',
        'Diwali sparkling lights celebration',
        'Grand collective photo session',
      ],
    },
  ],
};

// -----------------------------------------------------------------------------
// 6. DIWALI FOOD FESTIVAL (8 FOOD STALLS — EDITABLE ENTRIES)
// -----------------------------------------------------------------------------
export const FOOD_STALLS: FoodStall[] = [
  {
    id: 1,
    stallNumber: 'Stall 01',
    name: 'Nawabi Dum Biryani & Kebabs',
    cuisine: 'Royal Mughlai & Hyderabadi',
    description: 'Aromatic basmati rice simmered with tender marinated spices, accompanied by succulent paneer and chicken kebabs fresh from the grill.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Hyderabadi Dum Biryani', 'Murgh Malai Tikka', 'Paneer Reshmi Kebab', 'Mirchi Ka Salan'],
  },
  {
    id: 2,
    stallNumber: 'Stall 02',
    name: 'Chaat Bazaar — Street Food Corner',
    cuisine: 'North Indian Street Food',
    description: 'Crisp puris stuffed with spiced potatoes and minty pani, crunchy papdi chaats drenched in yoghurt, and piping hot aloo tikki.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Pani Puri / Golgappe', 'Dahi Puri', 'Samosa Chaat', 'Sev Batata Puri'],
    isVegetarianOnly: true,
  },
  {
    id: 3,
    stallNumber: 'Stall 03',
    name: 'Dakshin Tiffins & Dosa Delight',
    cuisine: 'South Indian Specialties',
    description: 'Golden buttery paper dosas, fluffy steamed idlis, and crispy medu vadas served with freshly ground peanut, coconut, and tomato chutneys.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Ghee Karam Dosa', 'Podi Idli Skewers', 'Mysore Masala Dosa', 'Filter Coffee'],
    isVegetarianOnly: true,
  },
  {
    id: 4,
    stallNumber: 'Stall 04',
    name: 'Shahi Mithai & Halwai Junction',
    cuisine: 'Festive Sweets & Desserts',
    description: 'Indulge in authentic festive sweets made with pure ghee: warm gulab jamuns, crispy jalebis paired with rabdi, and traditional kaju katli.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Hot Jalebi with Rabdi', 'Gulab Jamun with Ice Cream', 'Motichoor Laddoo', 'Kaju Katli'],
    isVegetarianOnly: true,
  },
  {
    id: 5,
    stallNumber: 'Stall 05',
    name: 'Desi Sippers — Mocktails & Thandai',
    cuisine: 'Beverages & Coolers',
    description: 'Refreshing traditional royal saffron thandai, chilled aam panna, masala soda, and signature Diwali sparkling mocktails to quench your thirst.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Kesari Royal Thandai', 'Pomegranate Mint Mojito', 'Kala Khatta Chiller', 'Masala Rose Soda'],
    isVegetarianOnly: true,
  },
  {
    id: 6,
    stallNumber: 'Stall 06',
    name: 'Indo-Chinese Wok & Sizzlers',
    cuisine: 'Fusion Street Food',
    description: 'Zesty Hakka noodles tossed on roaring woks, spicy Manchurian balls in rich gravy, and golden crispy spring rolls with schezwan dip.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Veg Manchurian Dry', 'Schezwan Fried Rice', 'Chilli Paneer / Chicken', 'Crispy Corn Salt & Pepper'],
  },
  {
    id: 7,
    stallNumber: 'Stall 07',
    name: 'Royal Kulfi & Artisanal Treats',
    cuisine: 'Chilled Desserts',
    description: 'Rich, creamy earthen-pot matka kulfi loaded with pistachios and almonds, decadent faloodas, and contemporary gourmet ice creams.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Malai Matka Kulfi', 'Royal Rose Falooda', 'Paan Kulfi Stick', 'Saffron Pista Scoop'],
    isVegetarianOnly: true,
  },
  {
    id: 8,
    stallNumber: 'Stall 08',
    name: 'Garam Chai & Monsoon Fritters',
    cuisine: 'Snacks & Evening Warmth',
    description: 'Freshly brewed aromatic kulhad masala chai paired with crispy onion pakodas, mirchi bajjis, and savoury festive mathris.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80',
    popularItems: ['Kulhad Masala Chai', 'Andhra Mirchi Bajji', 'Crispy Kanda Bhaji', 'Methi Mathri Platter'],
    isVegetarianOnly: true,
  },
];

// -----------------------------------------------------------------------------
// 7. STUDENT ENTREPRENEURSHIP & CRAFTS
// -----------------------------------------------------------------------------
export const STUDENT_CRAFTS: StudentCraft[] = [
  {
    title: 'Handmade Clay & Terracotta Diyas',
    description: 'Custom hand-painted terracotta oil lamps detailed with eco-friendly acrylics, golden borders, and intricate glitter patterns.',
    image: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=800&q=80',
    tag: 'Hand-Painted',
  },
  {
    title: 'Traditional Festive Torans & Hangings',
    description: 'Auspicious door hangings, shubh labh wall ornaments, and artificial marigold garlands lovingly crafted to beautify home entrances.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tag: 'Decor Crafts',
  },
  {
    title: 'Organic Rangoli Kits & Stencils',
    description: 'Skin-safe organic rice flour rangoli powders in 12 festive shades accompanied by reusable brass and laser-cut geometric stencils.',
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=800&q=80',
    tag: 'Eco-Friendly',
  },
  {
    title: 'Ethnic Accessories & Gift Boxes',
    description: 'Handmade beaded bracelets, festive earrings, scented soy wax tea-lights, and sweet gift hampers curated by student entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    tag: 'Student Brands',
  },
];

// Editable Coordinator contact for student stall bookings
export const STALL_BOOKING_CONTACT = {
  coordinatorName: 'Student Activities & Entrepreneurship Cell',
  cellDepartment: 'Westin College Student Council',
  email: 'events@westincollege.edu.in',
  phone: '+91 866 247 1888',
  deadline: 'Stall Registrations Close 2 Days Prior to Event',
};

// -----------------------------------------------------------------------------
// 8. EVENT SCHEDULE TIMELINE (EXACT TIMINGS FROM PRD)
// -----------------------------------------------------------------------------
export const EVENT_SCHEDULE: ScheduleItem[] = [
  {
    time: '4:30 PM',
    title: 'Reporting & Assembly',
    description: 'Warm festive welcome of students, faculty, and honoured guests. Traditional tilak ceremony, badge collection, and entry to the illuminated campus ground.',
    iconName: 'Users',
    highlight: false,
    category: 'ceremony',
  },
  {
    time: '6:00 PM',
    title: 'Traditional Diya Lighting Ceremony',
    description: 'Auspicious lighting of the ceremonial silver lamp (Deepotsavam) accompanied by Vedic chantings, classical shlokas, and formal inaugural addresses.',
    iconName: 'Flame',
    highlight: true,
    category: 'ceremony',
  },
  {
    time: '6:10 PM',
    title: 'Bommala Koluvu Visit',
    description: 'Guided tour and blessing ceremony at the majestic traditional Bommala Koluvu stepped exhibition featuring divine figurines and cultural folk lore.',
    iconName: 'Sparkles',
    highlight: false,
    category: 'cultural',
  },
  {
    time: '6:20–7:00 PM',
    title: 'Cultural Programme — Festival Music & Dance',
    description: 'Spectacular cultural extravaganza featuring classical invocations, contemporary fusion dance choreography, and live student vocal performances.',
    iconName: 'Music',
    highlight: true,
    category: 'cultural',
  },
  {
    time: '6:45 PM onwards',
    title: 'Food Courts Open — Diwali Food Festival',
    description: 'The 8 vibrant food stalls open their counters! Feast on aromatic biryanis, sizzling street chaats, South Indian delicacies, and sweet treats.',
    iconName: 'Utensils',
    highlight: true,
    category: 'food',
  },
  {
    time: '7:45–8:45 PM',
    title: 'Fellowship, Food Courts, Festive Gathering & Music',
    description: 'Free-flowing camaraderie, student creator shopping, live interactive bidding games, Chilaka Jyothishyam sessions, and celebratory musical sets.',
    iconName: 'PartyPopper',
    highlight: false,
    category: 'social',
  },
  {
    time: '8:45 PM',
    title: 'Diwali Crackers & Grand Closing',
    description: 'Eco-friendly sky lanterns and safe festive sparklers illuminate the Vijayawada night sky. Collective cheer, vote of thanks, and grand conclusion.',
    iconName: 'Sparkle',
    highlight: true,
    category: 'closing',
  },
];

// -----------------------------------------------------------------------------
// 9. PHOTO GALLERY DATA
// -----------------------------------------------------------------------------
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Westin College Illuminated Campus',
    category: 'campus',
    categoryLabel: 'College Campus',
    image: '/images/westin-campus.jpg',
    aspect: 'wide',
  },
  {
    id: 2,
    title: 'Traditional Diya Illumination',
    category: 'decorations',
    categoryLabel: 'Diwali Decorations',
    image: 'https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
  },
  {
    id: 3,
    title: 'Intricate Floral Marigold Rangoli',
    category: 'decorations',
    categoryLabel: 'Diyas & Rangoli',
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
  },
  {
    id: 4,
    title: 'Vibrant Food Festival Counters',
    category: 'food',
    categoryLabel: 'Food Stalls',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
  },
  {
    id: 5,
    title: 'Student Classical Dance Performance',
    category: 'performances',
    categoryLabel: 'Student Performances',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
  },
  {
    id: 6,
    title: 'Golden Lanterns & Evening Atmosphere',
    category: 'decorations',
    categoryLabel: 'Diwali Decorations',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
  },
  {
    id: 7,
    title: 'Student Creator Handicrafts & Diyas',
    category: 'celebrations',
    categoryLabel: 'Festival Celebrations',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
  },
  {
    id: 8,
    title: 'Grand Festive Night & Crackers Finale',
    category: 'celebrations',
    categoryLabel: 'Musical Night & Finale',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
  },
];

// -----------------------------------------------------------------------------
// 10. COLLEGE & CONTACT INFO (FOOTER & SUPPORT)
// -----------------------------------------------------------------------------
export const CONTACT_DETAILS = {
  address: 'Westin College Main Campus, Ring Road / Benz Circle Region, Vijayawada, Andhra Pradesh 520008',
  email: 'diwali@westincollege.edu.in',
  phone: '+91 866 247 1888',
  helpline: '+91 98480 12345',
  workingHours: 'Monday – Saturday: 9:00 AM – 5:00 PM',
};
