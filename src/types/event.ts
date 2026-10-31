export interface Attraction {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
  highlightIcon?: string;
}

export interface FoodStall {
  id: number;
  stallNumber: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  popularItems: string[];
  isVegetarianOnly?: boolean;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
  category: 'ceremony' | 'cultural' | 'food' | 'social' | 'closing';
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'all' | 'campus' | 'decorations' | 'food' | 'performances' | 'celebrations';
  categoryLabel: string;
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface StudentCraft {
  title: string;
  description: string;
  image: string;
  tag: string;
}
