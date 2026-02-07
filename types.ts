
export interface GalleryImage {
  url: string;
  label: string;
}

export interface ProjectData {
  id: string;
  number: string;
  category: string;
  mainImage: string | string[];
  description: string;
  galleryImages: GalleryImage[];
}

export interface Stat {
  label: string;
  value: string;
}

export enum SectionType {
  HOME = 'HOME',
  PROJECT1 = 'PROJECT1',
  PROJECT2 = 'PROJECT2',
  PROJECT3 = 'PROJECT3',
  PROJECT4 = 'PROJECT4',
  PROJECT5 = 'PROJECT5',
  ARTICLE1 = 'ARTICLE1',
  ARTICLE2 = 'ARTICLE2',
  ARTICLE3 = 'ARTICLE3',
  CONTACT = 'CONTACT'
}
