import {
  Wifi, Router, Shield, Server,
  Home, Cpu, Lightbulb, Smartphone,
  Tv, Speaker, Video, Volume2,
  FileText, Database, Cloud, Users,
  Sun, Zap, BatteryCharging, Leaf,
  Network, LucideIcon,
} from "lucide-react";
import redesImg from "@/assets/service-redes.jpg";
import domoticaImg from "@/assets/service-domotica.jpg";
import audiovisualesImg from "@/assets/service-audiovisuales.jpg";
import gestionImg from "@/assets/service-gestion.jpg";
import fotovoltaicaImg from "@/assets/service-fotovoltaica.jpg";

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
    image: redesImg,
    images: [redesImg, gestionImg, domoticaImg],
    featured: true,
    icon: Network,
    amenityIcons: [Wifi, Router, Shield, Server],
  },
  {
    id: "domotica",
    image: domoticaImg,
    images: [domoticaImg, audiovisualesImg, redesImg],
    featured: true,
    icon: Home,
    amenityIcons: [Home, Cpu, Lightbulb, Smartphone],
  },
  {
    id: "audiovisuales",
    image: audiovisualesImg,
    images: [audiovisualesImg, domoticaImg, redesImg],
    featured: false,
    icon: Tv,
    amenityIcons: [Tv, Speaker, Video, Volume2],
  },
  {
    id: "gestion-documental",
    image: gestionImg,
    images: [gestionImg, redesImg, domoticaImg],
    featured: false,
    icon: FileText,
    amenityIcons: [FileText, Database, Cloud, Users],
  },
  {
    id: "fotovoltaicas",
    image: fotovoltaicaImg,
    images: [fotovoltaicaImg, domoticaImg, redesImg],
    featured: true,
    icon: Sun,
    amenityIcons: [Sun, Zap, BatteryCharging, Leaf],
  },
];

export const getFeaturedLocations = () => locations.filter(loc => loc.featured);

export const getLocationById = (id: string) => locations.find(loc => loc.id === id);
