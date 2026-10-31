/**
 * ============================================================================
 * WESTIN DIWALI CELEBRATIONS — CENTRAL EVENT CONFIGURATION & DATA
 * ============================================================================
 * 
 * Edit this file to update:
 * - Payment link (Razorpay)
 * - Video URL (YouTube embed or ID)
 * - College info and contact coordinates
 * - Event attractions, food stalls, entertainment, schedule, and gallery
 */

export interface FoodStall {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
}

export interface Attraction {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  category: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  description: string;
  category: 'ceremony' | 'cultural' | 'food' | 'entertainment' | 'closing';
  icon: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Campus' | 'Decor' | 'Culture' | 'Food' | 'Performances' | 'Celebration';
  image: string;
  description: string;
}

export const EVENT_CONFIG = {
  eventName: "WESTIN DIWALI CELEBRATIONS",
  collegeName: "Westin College of Hotel & Business Management",
  collegeShort: "Westin College",
  tagline: "Celebrate the Festival of Lights with Tradition, Culture, Food & Togetherness.",
  
  // Official Razorpay link - Strict PRD requirement
  paymentUrl: "https://rzp.io/rzp/0u8FSXT",
  
  // Official Instagram profile
  instagramUrl: "https://www.instagram.com/westin_college_vijayawada/",
  instagramHandle: "@westin_college_vijayawada",
  
  // Event Key Details
  reportingTime: "4:30 PM",
  dressCode: "Traditional Wear",
  eventDate: "Diwali Festive Evening",
  venue: "Westin College Campus, Bharathi Nagar, Vijayawada",
  
  // YouTube Video Configuration
  // To show an embedded video, replace with a YouTube watch or embed URL (e.g. "https://www.youtube.com/watch?v=YOUR_VIDEO_ID" or "YOUR_VIDEO_ID")
  // Keep empty string "" to display the designed interactive preview placeholder
  youtubeVideoUrl: "", 
  
  // Student Stalls Inquiry Contact (Editable placeholders as per PRD)
  stallCoordination: {
    title: "Student Entrepreneurship & Stall Desk",
    note: "All students interested in showcasing handmade crafts, diyas, or decor can register for a stall.",
    contactPerson: "Student Cultural Committee / Event Coordinators",
    email: "events@westin.ac.in",
    phone: "+91 866 247 1144 / Campus Reception",
    stallRegistrationDeadline: "Limited Slots Available — Contact Event Desk",
  },
  
  // Footer & College Contact Information (Editable placeholders)
  contactInfo: {
    address: "Westin College of Hotel & Business Management, Bharathi Nagar, Vijayawada, Andhra Pradesh 520008",
    phone: "+91 866 247 1144",
    email: "admissions@westin.ac.in",
    website: "https://westin.ac.in",
    timings: "Event Doors Open: 4:30 PM Onwards",
  }
};

/**
 * Section 3 — The 8 Official Festival Attractions (PRD Exact List)
 */
export const FESTIVAL_ATTRACTIONS: Attraction[] = [
  {
    id: 1,
    title: "Food Festival — 8 Food Stalls",
    subtitle: "A Festive Feast of Flavours",
    description: "Explore a delightful variety of authentic festive foods, street delights, sizzling delicacies, and rich traditional sweets crafted for celebration.",
    image: "/images/attraction-food.jpg",
    badge: "8 Gourmet Stalls",
    category: "Culinary"
  },
  {
    id: 2,
    title: "Mehendi & Face Painting",
    subtitle: "Intricate Art & Vibrant Colours",
    description: "Adorn your hands with stunning traditional mehendi patterns or get festive, glowing face art designed by talented student artists.",
    image: "/images/attraction-mehendi.jpg",
    badge: "Artistic Experience",
    category: "Culture"
  },
  {
    id: 3,
    title: "Bommala Koluvu",
    subtitle: "Heritage Doll & Figurine Display",
    description: "Experience this cherished traditional festive display honoring regional culture, mythology, and generational artistic legacy.",
    image: "/images/attraction-koluvu.jpg",
    badge: "Heritage Ritual",
    category: "Tradition"
  },
  {
    id: 4,
    title: "Chilaka Jyothishyam",
    subtitle: "Parrot Fortune Telling",
    description: "Step into an authentic cultural tradition and enjoy the charming traditional parrot astrology experience revealing festive fortunes.",
    image: "/images/attraction-parrot.png",
    badge: "Timeless Lore",
    category: "Tradition"
  },
  {
    id: 5,
    title: "Musical Night",
    subtitle: "Live Beats & Electrifying Rhythm",
    description: "Feel the energy soar with high-octane musical concerts, live student performances, classical instruments, and upbeat dance numbers.",
    image: "/images/attraction-music.jpg",
    badge: "Live Stage",
    category: "Entertainment"
  },
  {
    id: 6,
    title: "Selfie Booths",
    subtitle: "Picture-Perfect Festive Memories",
    description: "Capture memorable Diwali portraits against elaborately designed festive backdrops adorned with marigold garlands and fairy lights.",
    image: "/images/attraction-photobooth.jpg",
    badge: "Photo Memories",
    category: "Interactive"
  },
  {
    id: 7,
    title: "Diya & Flower Decorations",
    subtitle: "A Symphony of Light & Blooms",
    description: "Immerse your senses in a campus bathed in the gentle glow of earthen diyas, brass samayis, fragrant genda phool, and vibrant rangoli art.",
    image: "/images/attraction-decor.jpg",
    badge: "Visual Wonder",
    category: "Ambience"
  },
  {
    id: 8,
    title: "Student Creator Market",
    subtitle: "Handcrafted Festive Treasures",
    description: "Explore and support student creativity featuring hand-painted clay diyas, artistic lanterns, festive greeting cards, and Diwali home decor.",
    image: "/images/attraction-market.jpg",
    badge: "Student Makers",
    category: "Creativity"
  }
];

/**
 * Section 4 — Special Entertainment Activities
 * Note: Details are editable. No invented auction prices, items, winners, or outcomes.
 */
export const SPECIAL_ENTERTAINMENT = [
  {
    id: 'auction',
    title: "Live Bidding & Auction Activities",
    badge: "Audience Favorite",
    description: "Experience the thrill of live student bidding rounds! Participating students and visitors can bid on special festive creator works and curated festive hampers.",
    notes: "Auction rules, featured bidding items, and catalog announced live at the venue."
  },
  {
    id: 'games',
    title: "Interactive Games & Challenges",
    badge: "High Energy",
    description: "Fun-filled carnival games, traditional trivia, rangoli speed challenges, and interactive couple & group challenges with festive tokens.",
    notes: "Open for all students and guests throughout the evening."
  },
  {
    id: 'audience',
    title: "Audience Participation & Spot Contests",
    badge: "Win On Spot",
    description: "Engage in spontaneous on-stage mini-games, best traditional attire acknowledgments, diwali riddles, and crowd applause polls.",
    notes: "Anchored live with exciting spot rewards for active attendees."
  },
  {
    id: 'performances',
    title: "Student Performances & Talent Showcases",
    badge: "Campus Pride",
    description: "Breathtaking choreography, classical fusion dance, rock band renditions, solo vocalists, and vibrant group skits celebrating Diwali.",
    notes: "Curated by the Westin Cultural Council and performing arts club."
  },
  {
    id: 'music',
    title: "Music & Grand Sound System",
    badge: "All Evening",
    description: "State-of-the-art concert acoustics pumping festive Indian beats, classical melodies during the evening rituals, and celebratory dance music.",
    notes: "Sound and lighting setup designed for an unforgettable festival vibe."
  },
  {
    id: 'surprises',
    title: "Exciting Surprises & Midnight Sparkle",
    badge: "Grand Climax",
    description: "Special commemorative festival moments, community diya lighting countdown, and grand fireworks to close out an extraordinary night.",
    notes: "Surprise reveal planned right before the grand cracker display."
  }
];

/**
 * Section 5 — Diwali Food Festival (8 Food Stalls)
 * Temporary editable placeholders for stall details until final menus are confirmed.
 */
export const FOOD_STALLS: FoodStall[] = [
  {
    id: 1,
    name: "Shahi Biryani Darbar",
    category: "Main Course",
    tagline: "Authentic Dum Flavours",
    description: "Aromatic slow-cooked Awadhi & Hyderabadi Dum Biryani served with spiced mirchi ka salan, fragrant raita, and garnish.",
    image: "/images/stall-biryani.jpg",
    badge: "Signature Stall 01",
    highlights: ["Veg Dum Biryani", "Zafrani Paneer", "Mint Raita"]
  },
  {
    id: 2,
    name: "Chaat Gali & Street Treats",
    category: "Street Food",
    tagline: "Tangy, Spicy & Crispy",
    description: "Crispy Golgappas with chilled pudina & saunth water, loaded Dahi Puri, Papdi Chaat, and spicy Sev Batata Puri made fresh.",
    image: "/images/stall-chaat.jpg",
    badge: "Stall 02",
    highlights: ["Pani Puri (6 flavours)", "Dahi Bhalla", "Aloo Tikki"]
  },
  {
    id: 3,
    name: "Mithai Mahal & Festive Sweets",
    category: "Desserts & Sweets",
    tagline: "Diwali's Sweetest Tradition",
    description: "Warm Gulab Jamuns, rich Kaju Katli, Motichoor Laddoos, and golden Jalebis served piping hot with rabdi.",
    image: "/images/stall-mithai.jpg",
    badge: "Stall 03",
    highlights: ["Hot Jalebi Rabdi", "Kesar Laddoo", "Dry Fruit Barfi"]
  },
  {
    id: 4,
    name: "The Tandoor & Grill Station",
    category: "Appetizers & Grills",
    tagline: "Smoky Charred Goodness",
    description: "Freshly marinated Paneer Tikka, Tandoori Mushrooms, Malai Soya Chaap, and skewered festive bites grilled to perfection.",
    image: "/images/stall-kebabs.jpg",
    badge: "Stall 04",
    highlights: ["Paneer Malai Tikka", "Achari Mushrooms", "Green Chutney"]
  },
  {
    id: 5,
    name: "Dakshin Tiffin Junction",
    category: "South Indian Delights",
    tagline: "Crisp & Traditional Comfort",
    description: "Golden ghee roast dosas, button idlis floating in piping sambar, crispy medu vadas, and authentic filter coffee.",
    image: "/images/stall-tiffins.jpg",
    badge: "Stall 05",
    highlights: ["Ghee Roast Dosa", "Mini Podi Idli", "South Filter Kaapi"]
  },
  {
    id: 6,
    name: "Nawabi Thandai & Mocktail Bar",
    category: "Beverages",
    tagline: "Cooling Festive Elixirs",
    description: "Traditional Shahi Kesar Badam Thandai, chilled Rose Sherbet, Kokum Mint Fizz, and refreshing festive mocktails.",
    image: "/images/stall-mocktails.jpg",
    badge: "Stall 06",
    highlights: ["Royal Kesar Thandai", "Spiced Lemonade", "Gulab Mojito"]
  },
  {
    id: 7,
    name: "Crispy Bites & Chai Adda",
    category: "Evening Snacks",
    tagline: "Crunchy Evening Pairings",
    description: "Flaky Punjabi samosas, piping hot onion pakoras, cheese corn balls, and authentic Kulhad Masala Chai.",
    image: "/images/stall-streetbites.jpg",
    badge: "Stall 07",
    highlights: ["Kulhad Masala Chai", "Khasta Kachori", "Paneer Pakora"]
  },
  {
    id: 8,
    name: "Royal Falooda & Kulfi Corner",
    category: "Frozen Treats",
    tagline: "Rich, Creamy Endings",
    description: "Traditional Matka Malai Kulfi, Royal Rose Falooda with sabja seeds, and fusion ice cream delights.",
    image: "/images/stall-desserts.jpg",
    badge: "Stall 08",
    highlights: ["Matka Malai Kulfi", "Shahi Falooda", "Pista Kulfi Sticks"]
  }
];

/**
 * Section 7 — Event Schedule (PRD Exact Schedule Table)
 */
export const EVENT_SCHEDULE: ScheduleItem[] = [
  {
    time: "4:30 PM",
    activity: "Reporting & Assembly",
    description: "Welcome of students, faculty, and honoured guests. Collection of entry wristbands and festival gathering at the campus central quadrangle.",
    category: "ceremony",
    icon: "Users"
  },
  {
    time: "6:00 PM",
    activity: "Traditional Diya Lighting Ceremony",
    description: "Auspicious ceremonial lighting of the central Maha Deepam by Westin College leadership, faculty, and student representatives to invoke peace and prosperity.",
    category: "ceremony",
    icon: "Flame"
  },
  {
    time: "6:10 PM",
    activity: "Bommala Koluvu Visit",
    description: "Inauguration and viewing of the heritage Bommala Koluvu thematic doll and idol display, accompanied by traditional instrumental chants.",
    category: "cultural",
    icon: "Sparkles"
  },
  {
    time: "6:20–7:00 PM",
    activity: "Cultural Programme — Festival Music & Dance",
    description: "Vibrant stage performances by Westin students, including classical invocation dance, contemporary fusion routines, festive group choreographies, and celebratory songs.",
    category: "cultural",
    icon: "Music"
  },
  {
    time: "6:45 PM onwards",
    activity: "Food Courts Open — Diwali Food Festival",
    description: "Official opening of all 8 gourmet food stalls, dessert stations, and student creator pop-ups. Savor an endless spread of festive delights.",
    category: "food",
    icon: "UtensilsCrossed"
  },
  {
    time: "7:45–8:45 PM",
    activity: "Fellowship, Food Courts, Festive Gathering & Music",
    description: "Celebratory socializing, live student bidding, interactive games, photo sessions at festive selfie booths, and upbeat DJ rhythm tracks.",
    category: "entertainment",
    icon: "PartyPopper"
  },
  {
    time: "8:45 PM",
    activity: "Diwali Crackers & Grand Closing",
    description: "Spectacular eco-conscious aerial cracker showcase lighting up the Vijayawada night sky, concluding the festival with cheers, photos, and Diwali wishes.",
    category: "closing",
    icon: "MoonStar"
  }
];

/**
 * Section 8 — Photo Gallery
 * High-quality authentic Diwali, campus, decor, and student festival memories
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Westin College Campus",
    category: "Campus",
    image: "/images/westin-campus.jpg",
    description: "The scenic Westin College campus in Vijayawada, decorated with festive lighting and welcoming archways."
  },
  {
    id: 2,
    title: "Grand Entrance & Lantern Decor",
    category: "Decor",
    image: "/images/gallery-decor.jpg",
    description: "Traditional marigold garlands (toran), brass hanging bells, and warm golden kandeels adorning the avenues."
  },
  {
    id: 3,
    title: "Intricate Floral Rangoli",
    category: "Culture",
    image: "/images/gallery-rangoli.jpg",
    description: "Handcrafted geometric rangoli with natural flower petals, colored powders, and glowing clay lamps."
  },
  {
    id: 4,
    title: "Bustling Food Festival Courtyard",
    category: "Food",
    image: "/images/gallery-food.jpg",
    description: "Students and guests relishing hot tandoori bites, savory chaat, and festive sweets across the 8 stalls."
  },
  {
    id: 5,
    title: "Student Classical & Fusion Dance",
    category: "Performances",
    image: "/images/gallery-dance.jpg",
    description: "Energetic student stage performances showcasing regional folklore, Bharatanatyam, and festive Bollywood rhythms."
  },
  {
    id: 6,
    title: "Interactive Games & Student Cheer",
    category: "Celebration",
    image: "/images/gallery-activities.jpg",
    description: "Joyous laughter and cheers during festive audience challenges and student team competitions."
  },
  {
    id: 7,
    title: "Electrifying Musical Night",
    category: "Performances",
    image: "/images/gallery-night.jpg",
    description: "Live student band concert under the warm glow of festival stage lights and cheering crowds."
  },
  {
    id: 8,
    title: "Golden Diyas & Festive Sparkle",
    category: "Celebration",
    image: "/images/gallery-celebration.jpg",
    description: "Community diya lighting ceremony celebrating hope, prosperity, and collegiate unity."
  }
];
