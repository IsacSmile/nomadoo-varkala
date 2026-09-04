export const CONTACT_PHONE_1 = "+91 9446110362";
export const CONTACT_PHONE_2 = "+91 7057829795";
export const WHATSAPP_NUMBER = "919446110362";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/6Zo2NjQxppANYaVVA";
export const GOOGLE_REVIEWS_COUNT = "876+";
export const GOOGLE_RATING = "4.9";

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
      icon: "User",
      image: "/images/solo_green_kayak_mangrove.jpg"
    },
    {
      id: "kayak-2seater",
      name: "2-Seater Kayak (Tandem)",
      description: "Tandem double kayak. Perfect for couples, friends, or parent with a child.",
      tag: "Best for Couples & Friends",
      icon: "Users",
      image: "/images/tandem_kayak_blue_sky.jpg"
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
    image: "/images/country_boat_mangrove_entrance.jpg",
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
    image: "/images/group_paddlers.jpg",
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
    image: "/images/sunset_floating.jpg",
    highlightBadge: "Unique Experience",
    features: ["Balance & Core Engagement", "Safety Briefing Included", "High Stability SUP Boards", "Photogenic Waterway Passages"]
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: "/images/yolo_kayak_relaxing.jpg",
    title: "Emerald Mangrove Waterways",
    caption: "Paddling on vibrant YOLO kayaks surrounded by lush Varkala mangroves"
  },
  {
    id: 2,
    url: "/images/sunset_floating.jpg",
    title: "Golden Hour Sunset Floating",
    caption: "Floating peacefully in lifejackets under golden Varkala evening skies"
  },
  {
    id: 3,
    url: "/images/group_paddlers.jpg",
    title: "Group Kayaking Adventure",
    caption: "Friends and families enjoying Varkala mangrove backwater trips together"
  },
  {
    id: 4,
    url: "/images/mangrove_roots_couple.jpg",
    title: "Natural Mangrove Roots",
    caption: "Up-close exploration of tangled mangrove root ecosystems"
  },
  {
    id: 5,
    url: "/images/mangrove_tunnel_canopy.jpg",
    title: "Secret Mangrove Tunnel",
    caption: "Gliding under dense green canopy tunnels untouched by motor noise"
  },
  {
    id: 6,
    url: "/images/tandem_kayak_blue_sky.jpg",
    title: "Clear Sky Tandem Paddling",
    caption: "Tandem 2-seater kayaking on open Paravoor backwaters"
  },
  {
    id: 7,
    url: "/images/sunset_kayak_reflection.jpg",
    title: "Sunset Kayaking Horizon",
    caption: "Tranquil sunset hues reflecting across Paravoor lake channels"
  },
  {
    id: 8,
    url: "/images/sunset_silhouette_paddle.jpg",
    title: "Sunset Silhouette Moment",
    caption: "Capturing unforgettable golden hour memories with raised paddles"
  },
  {
    id: 9,
    url: "/images/solo_green_kayak_mangrove.jpg",
    title: "Solo Kayaker Sunbeams",
    caption: "Morning light breaking through mangrove branches onto calm waters"
  }
];

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  poster: string;
  videoUrl: string;
  description: string;
}

export const GALLERY_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Secret Mangrove Tunnel Canopy",
    duration: "0:45",
    poster: "/images/mangrove_tunnel_canopy.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-a-person-paddling-a-kayak-on-a-calm-lake-43093-large.mp4",
    description: "Watch how peaceful the early morning paddling feels through thick mangrove tunnels in Varkala."
  },
  {
    id: "v2",
    title: "Golden Hour Sunset Floating",
    duration: "0:58",
    poster: "/images/sunset_floating.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-person-in-a-kayak-41551-large.mp4",
    description: "A glimpse of paddlers floating peacefully under breathtaking golden Varkala evening skies."
  },
  {
    id: "v3",
    title: "Group Backwater Kayak Tour",
    duration: "0:35",
    poster: "/images/group_paddlers.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-boating-in-a-lake-at-sunset-42998-large.mp4",
    description: "Relaxing group family & friends trip through quiet Paravoor backwater streams."
  },
  {
    id: "v4",
    title: "Tandem Kayak Open Lake Glide",
    duration: "0:42",
    poster: "/images/yolo_kayak_relaxing.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-speedboat-cruising-on-a-river-42997-large.mp4",
    description: "Feel the refreshing breeze along open lake channels near Varkala."
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
