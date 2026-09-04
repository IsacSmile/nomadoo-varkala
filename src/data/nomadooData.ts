export const CONTACT_PHONE_1 = "+91 9446110362";
export const CONTACT_PHONE_2 = "+91 7057829795";
export const WHATSAPP_NUMBER = "919446110362";

export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  type: string;
  capacity: string;
  priceNote: string;
  description: string;
  image: string;
  highlightBadge?: string;
  features: string[];
}

export const MAIN_KAYAKING_ACTIVITY = {
  id: "kayaking-main",
  title: "Mangrove Kayaking in Varkala",
  subtitle: "Guided backwater & mangrove waterway experience",
  duration: "2 Hours 30 Mins",
  type: "Guided Trip",
  description: "This is Kayaking. We have both single seater as well as double seater options. In this, you paddle by yourself through the serene, sheltered mangrove tunnels of Varkala backwaters under the supervision of expert safety guides.",
  options: [
    {
      id: "kayak-1seater",
      name: "1-Seater Kayak (Single)",
      description: "Solo kayaking adventure. Best for independent paddlers wanting complete freedom.",
      tag: "Popular for Solo Travelers",
      icon: "User"
    },
    {
      id: "kayak-2seater",
      name: "2-Seater Kayak (Tandem)",
      description: "Tandem double kayak. Perfect for couples, friends, or parent with a child.",
      tag: "Best for Couples & Friends",
      icon: "Users"
    }
  ],
  badgeIcons: [
    { label: "2.5 Hours", detail: "Duration", icon: "Clock" },
    { label: "1 & 2 Seater", detail: "Kayak Options", icon: "Compass" },
    { label: "Guided", detail: "Local Safety Experts", icon: "ShieldCheck" },
    { label: "Beginner Friendly", detail: "No Experience Needed", icon: "Sparkles" },
  ]
};

export const OTHER_ACTIVITIES: Activity[] = [
  {
    id: "country-boating",
    title: "Mangrove Country Boating",
    subtitle: "Traditional peaceful boat ride",
    duration: "2 Hours",
    type: "Guided Private Boat",
    capacity: "Families & Groups",
    priceNote: "Best Price Guaranteed",
    description: "Enjoy traditional country boating in Varkala with a relaxing boat ride through scenic backwaters and mangroves. Explore the beauty of nature on our popular Varkala backwater tour.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Family Favorite",
    features: ["Shaded Traditional Wooden Boat", "Private Boat Crew", "Peaceful Mangrove Tunnels", "Perfect for Elders & Children"]
  },
  {
    id: "speed-boating",
    title: "Mangrove Semi Speed Boating",
    subtitle: "Quick & exciting backwater breeze",
    duration: "35 Minutes",
    type: "Private Boating",
    capacity: "Up to 6 Persons",
    priceNote: "Quick Adventure",
    description: "A quick, exciting, and relaxing way to explore the mangroves and wide backwater channels in Varkala with family or friends.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Thrilling & Fast",
    features: ["Speed & Thrill Combo", "Covers Wide Waterway Channels", "Life Jackets Provided", "Instant Quick Tour"]
  },
  {
    id: "standup-paddleboarding",
    title: "Stand Up Paddleboarding (SUP)",
    subtitle: "Balance & glide over pristine waters",
    duration: "1 Hour 30 Mins",
    type: "Guided Session",
    capacity: "1 Person per Board",
    priceNote: "Fitness & Fun",
    description: "Glide silently over calm waters while standing upright on a paddleboard. A magnificent workout and immersive nature experience for active enthusiasts.",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    highlightBadge: "Unique Experience",
    features: ["Balance & Core Engagement", "Safety Briefing Included", "High Stability SUP Boards", "Photogenic Waterway Passages"]
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    title: "Serene Mangrove Canopy",
    caption: "Paddling through natural mangrove archways in Varkala"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    title: "Golden Hour Sunrise Kayaking",
    caption: "Early morning calm reflections on backwater canals"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    title: "Tandem Kayak Exploring",
    caption: "Double seater kayaking with friends & family"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Sunset Kayak Tour",
    caption: "Breathtaking sunset hues across Varkala backwaters"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    title: "Country Boat Trail",
    caption: "Traditional wooden country boat cruising quietly"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    title: "Mangrove Roots & Fauna",
    caption: "Up-close ecosystem exploration with certified guides"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1476514525535-ce74f45814d0?auto=format&fit=crop&w=800&q=80",
    title: "Morning Mist Waters",
    caption: "Pristine, calm waters perfect for beginner paddlers"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Tropical Green Horizon",
    caption: "Coconut palms and mangrove vegetation surrounding Paravoor"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=800&q=80",
    title: "Single Seater Freedom",
    caption: "Enjoy your personal pace along winding mangrove passages"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    title: "Safety & Smiles",
    caption: "High quality buoyancy jackets and light paddles"
  }
];

export const GALLERY_VIDEOS = [
  {
    id: "v1",
    title: "Sunrise Mangrove Tunnel Ride",
    duration: "0:45",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Watch how peaceful the early morning paddling feels through thick mangrove tunnels."
  },
  {
    id: "v2",
    title: "2-Seater Kayak Tour Highlights",
    duration: "0:58",
    poster: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    description: "A glimpse of couples paddling seamlessly down the calm Paravoor backwater stream."
  },
  {
    id: "v3",
    title: "Sunset Country Boating Varkala",
    duration: "0:35",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Relaxing golden hour family trip on traditional wooden boat."
  },
  {
    id: "v4",
    title: "Semi-Speed Boat Thrill Pass",
    duration: "0:42",
    poster: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
    description: "Feel the refreshing breeze along the open lake channels."
  }
];

export const FAQS = [
  {
    id: 1,
    question: "What is Nomadoo?",
    answer: "Nomadoo is a trusted booking partner specializing in Mangrove Kayaking and Boating experiences in Varkala. We connect travelers with trusted local operators to explore serene mangrove forests, discover hidden waterways, and enjoy nature up close in a safe and guided environment."
  },
  {
    id: 2,
    question: "How can I book?",
    answer: "You can book in under 30 seconds right on this page! Simply fill in your details or call/WhatsApp us directly at +91 9446110362 or +91 7057829795 for instant confirmation and current best rates."
  },
  {
    id: 3,
    question: "What’s included in the activities?",
    answer: "All bookings include experienced local guides, high-grade safety gear (buoyancy life jackets & paddles), safety briefing, and local ecological insights. All activities are 100% beginner-friendly!"
  },
  {
    id: 4,
    question: "Do I need to pay in advance?",
    answer: "Yes, a nominal token amount confirms your booking slot. The remaining balance can be paid on-site upon arrival."
  },
  {
    id: 5,
    question: "What if I cancel?",
    answer: "If you cancel the booking, the token amount is non-refundable. However, if a cancellation occurs from our side or due to unsafe weather conditions, a full 100% refund is immediately provided."
  },
  {
    id: 6,
    question: "What should I carry?",
    answer: "We recommend comfortable quick-dry clothes, sunscreen, a water bottle, a sun hat/cap, and a waterproof phone pouch or dry bag. We will guide you based on your specific activity."
  },
  {
    id: 7,
    question: "Do you offer group or custom bookings?",
    answer: "Yes! We welcome solo travelers, couples, families, and large corporate or student groups. Customized timing, private boats, and photography packages can easily be arranged via WhatsApp."
  }
];

export const WHY_US_FEATURES = [
  {
    icon: "ShieldCheck",
    title: "Safety First & Gear Included",
    description: "Certified buoyancy jackets, lightweight paddles, and safety instruction provided for every guest."
  },
  {
    icon: "Users",
    title: "Experienced Local Guides",
    description: "Native guides who know every hidden mangrove canal, wildlife spot, and photo angle."
  },
  {
    icon: "Sun",
    title: "Sunrise & Sunset Slots",
    description: "Catch the magical golden hour light over quiet waters away from crowded tourist spots."
  },
  {
    icon: "HeartHandshake",
    title: "Beginner & Family Friendly",
    description: "No prior swimming or paddling experience needed. Extremely calm, non-choppy waters."
  }
];
