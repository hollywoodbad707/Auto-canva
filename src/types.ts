export interface CarWallpaper {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  style?: string;
  aspectRatio?: string;
  specs?: {
    engine?: string;
    topSpeed?: string;
    acceleration?: string;
  };
}

export type Category = 'Supercarros' | 'Muscle' | 'Clássicos' | 'Elétricos' | 'Off-Road' | 'JDM';
