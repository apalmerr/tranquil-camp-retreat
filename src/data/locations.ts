import { WifiOff, Droplets, Flame, Users } from "lucide-react";
import spotForest from "@/assets/spot-forest.jpg";
import spotLake from "@/assets/spot-lake.jpg";
import spotMeadow from "@/assets/spot-meadow.jpg";
import detailForest1 from "@/assets/detail-forest-1.jpg";
import detailForest2 from "@/assets/detail-forest-2.jpg";
import detailLake1 from "@/assets/detail-lake-1.jpg";
import detailLake2 from "@/assets/detail-lake-2.jpg";
import detailMeadow1 from "@/assets/detail-meadow-1.jpg";
import detailMeadow2 from "@/assets/detail-meadow-2.jpg";

export interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Location {
  id: string;
  rating: number;
  price: number;
  image: string;
  images: string[];
  featured: boolean;
  amenityIcons: any[];
  reviews: Review[];
}

export const locations: Location[] = [
  {
    id: "forest",
    rating: 4.9,
    price: 85,
    image: spotForest,
    images: [detailForest1, detailForest2, detailLake1],
    featured: true,
    amenityIcons: [Flame, Droplets, WifiOff, Users],
    reviews: [
      { author: "Sarah M.", rating: 5, date: "December 2025", comment: "Absolutely magical! The forest sounds at night were so peaceful. We saw deer right outside our tent." },
      { author: "James T.", rating: 5, date: "November 2025", comment: "Perfect getaway from city life. The fire pit was amazing and the solar shower worked great." },
      { author: "Emily R.", rating: 4, date: "October 2025", comment: "Beautiful location, very private. The hiking trails nearby were stunning in autumn." },
      { author: "Michael B.", rating: 5, date: "September 2025", comment: "Best camping experience ever. Everything was well thought out and the hosts were wonderful." },
    ],
  },
  {
    id: "lake",
    rating: 5.0,
    price: 95,
    image: spotLake,
    images: [detailLake1, detailLake2, detailMeadow1],
    featured: true,
    amenityIcons: [Droplets, Flame, WifiOff, Users],
    reviews: [
      { author: "David L.", rating: 5, date: "January 2026", comment: "The lake views are unreal! Kayaking at sunrise was the highlight of our trip." },
      { author: "Anna K.", rating: 5, date: "December 2025", comment: "Perfect romantic getaway. The private dock made us feel like we had the whole lake to ourselves." },
      { author: "Chris P.", rating: 5, date: "November 2025", comment: "Caught some amazing fish and the outdoor kitchen was perfect for cooking them up." },
      { author: "Lisa H.", rating: 5, date: "October 2025", comment: "Exceeded all expectations. The mountain reflections on the lake were breathtaking." },
    ],
  },
  {
    id: "meadow",
    rating: 4.8,
    price: 75,
    image: spotMeadow,
    images: [detailMeadow1, detailMeadow2, detailForest1],
    featured: true,
    amenityIcons: [Flame, Droplets, WifiOff, Users],
    reviews: [
      { author: "Rachel W.", rating: 5, date: "December 2025", comment: "The stargazing here is incredible! We saw the Milky Way so clearly." },
      { author: "Tom D.", rating: 4, date: "November 2025", comment: "Beautiful open meadow with amazing views. A bit windy but absolutely worth it." },
      { author: "Sophie N.", rating: 5, date: "October 2025", comment: "Wildflowers were still blooming and the sunset views were spectacular." },
      { author: "Mark J.", rating: 5, date: "September 2025", comment: "Photographed some amazing wildlife. Saw elk grazing in the early morning!" },
    ],
  },
  {
    id: "canyon",
    rating: 4.7,
    price: 65,
    image: detailForest1,
    images: [detailMeadow1, spotForest, detailLake2],
    featured: false,
    amenityIcons: [Flame, Droplets, WifiOff, Users],
    reviews: [
      { author: "John S.", rating: 5, date: "January 2026", comment: "The red rock sunrises are absolutely stunning. Best desert camping ever!" },
      { author: "Maria G.", rating: 4, date: "December 2025", comment: "Unique landscape and great stargazing. Bring layers - desert nights are cold!" },
      { author: "Kevin R.", rating: 5, date: "November 2025", comment: "The telescope they provide is amazing. Saw Saturn's rings clearly!" },
      { author: "Jennifer L.", rating: 5, date: "October 2025", comment: "Perfect escape from reality. The silence of the desert is healing." },
    ],
  },
  {
    id: "river",
    rating: 4.9,
    price: 110,
    image: detailLake1,
    images: [detailLake2, spotLake, detailForest2],
    featured: false,
    amenityIcons: [Droplets, Flame, WifiOff, Users],
    reviews: [
      { author: "Brian H.", rating: 5, date: "January 2026", comment: "Falling asleep to the sound of the river is pure bliss. Caught several trout!" },
      { author: "Amanda C.", rating: 5, date: "December 2025", comment: "Perfect for our family. Kids loved playing by the river all day." },
      { author: "Steve M.", rating: 4, date: "November 2025", comment: "Great fishing spot. The guided nature walk was informative and fun." },
      { author: "Karen B.", rating: 5, date: "October 2025", comment: "Saw so many birds! The canoe trip down the river was magical." },
    ],
  },
  {
    id: "summit",
    rating: 4.6,
    price: 120,
    image: detailMeadow1,
    images: [detailMeadow2, spotMeadow, detailForest1],
    featured: false,
    amenityIcons: [Flame, Droplets, WifiOff, Users],
    reviews: [
      { author: "Daniel F.", rating: 5, date: "January 2026", comment: "Above the clouds! The sunrise from the summit was life-changing." },
      { author: "Nicole T.", rating: 4, date: "December 2025", comment: "Challenging hike to get there but so worth it. Bring warm clothes!" },
      { author: "Robert K.", rating: 5, date: "November 2025", comment: "Most epic camping spot ever. Felt like we were on top of the world." },
      { author: "Laura S.", rating: 4, date: "October 2025", comment: "Incredible views and very well maintained. Not for the faint of heart!" },
    ],
  },
];

export const getFeaturedLocations = () => locations.filter(loc => loc.featured);

export const getLocationById = (id: string) => locations.find(loc => loc.id === id);
