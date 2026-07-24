import {
  Wifi, Router, Shield, Server,
  Home, Cpu, Lightbulb, Smartphone,
  Tv, Speaker, Video, Volume2,
  FileText, Database, Cloud, Users,
  Sun, Zap, BatteryCharging, Leaf,
  Network, LucideIcon,
} from "lucide-react";
import spotForest from "@/assets/spot-forest.jpg";
import spotLake from "@/assets/spot-lake.jpg";
import spotMeadow from "@/assets/spot-meadow.jpg";
import detailForest1 from "@/assets/detail-forest-1.jpg";
import detailForest2 from "@/assets/detail-forest-2.jpg";
import detailLake1 from "@/assets/detail-lake-1.jpg";
import detailLake2 from "@/assets/detail-lake-2.jpg";
import detailMeadow1 from "@/assets/detail-meadow-1.jpg";
import detailMeadow2 from "@/assets/detail-meadow-2.jpg";

export interface Service {
  id: string;
  image: string;
  images: string[];
  featured: boolean;
  icon: LucideIcon;
  amenityIcons: LucideIcon[];
}

export const locations: Service[] = [
  {
    id: "redes",
    image: spotForest,
    images: [detailForest1, detailForest2, detailLake1],
    featured: true,
    icon: Network,
    amenityIcons: [Wifi, Router, Shield, Server],
  },
  {
    id: "domotica",
    image: spotLake,
    images: [detailLake1, detailLake2, detailMeadow1],
    featured: true,
    icon: Home,
    amenityIcons: [Home, Cpu, Lightbulb, Smartphone],
  },
  {
    id: "audiovisuales",
    image: spotMeadow,
    images: [detailMeadow1, detailMeadow2, detailForest1],
    featured: false,
    icon: Tv,
    amenityIcons: [Tv, Speaker, Video, Volume2],
  },
  {
    id: "gestion-documental",
    image: detailForest1,
    images: [detailForest2, spotForest, detailLake2],
    featured: false,
    icon: FileText,
    amenityIcons: [FileText, Database, Cloud, Users],
  },
  {
    id: "fotovoltaicas",
    image: detailLake2,
    images: [detailLake1, spotLake, detailMeadow2],
    featured: true,
    icon: Sun,
    amenityIcons: [Sun, Zap, BatteryCharging, Leaf],
  },
];

export const getFeaturedLocations = () => locations.filter(loc => loc.featured);

export const getLocationById = (id: string) => locations.find(loc => loc.id === id);
