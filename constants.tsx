
import { ProjectData, Stat } from './types';

export const COLORS = {
  black: '#000000',
  lightBlue: '#38bdf8', // Tailwind sky-400
  white: '#ffffff',
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'p1',
    number: "1",
    category: "GAMING ARCHIVE",
    mainImage: "https://i.ibb.co/8LK858C8/1756745911288.jpg",
    description: "A high-stakes cinematic exploration into competitive landscapes. Merging rapid-fire visual editing with deep narrative immersion to redefine how we experience digital gaming culture.",
    galleryImages: [
      { url: "https://i.ibb.co/NdQZNc0V/1756551229858.jpg", label: "Thumbnail 1" },
      { url: "https://i.ibb.co/Wvq1j5p5/1756918723425.jpg", label: "Thumbnail 2" },
      { url: "https://i.ibb.co/zT9JG4Q4/1756922041026.jpg", label: "Thumbnail 3" },
      { url: "https://i.ibb.co/wFFm7X4f/1749178269600.jpg", label: "Thumbnail 4" }
    ]
  },
  {
    id: 'p2',
    number: "2",
    category: "GROWTH",
    mainImage: "https://i.ibb.co/whgMxzbk/1770373171688-1.jpg",
    description: "A sequel of visual excellence, capturing the raw intensity of modern gaming through a lens of sophistication and sharp aesthetics.",
    galleryImages: [
      { url: "https://i.ibb.co/QvsbSgWd/1769779629729-2.jpg", label: "Visual 1" },
      { url: "https://i.ibb.co/Cs7ps9cm/1742322769116.jpg", label: "Visual 2" },
      { url: "https://i.ibb.co/hFndhkDw/1769921543888.jpg", label: "Visual 3" },
      { url: "https://i.ibb.co/fGdJC7mJ/1741889456708.jpg", label: "Visual 4" },
      { url: "https://i.ibb.co/DPK0kTkg/1742146541578.jpg", label: "Visual 5" }
    ]
  },
  {
    id: 'p3',
    number: "3",
    category: "CHALLENGES",
    mainImage: "https://i.ibb.co/SwFytRTd/1755714804843-1.jpg",
    description: "Pushing the limits of digital endurance and creative problem-solving. A documentation of high-effort challenges that test both the creator and the medium.",
    galleryImages: [
      { url: "https://i.ibb.co/xqzLXdp5/1756175171125.jpg", label: "Challenge 1" },
      { url: "https://i.ibb.co/5XCXZ0h5/1754932940800-1.jpg", label: "Challenge 2" },
      { url: "https://i.ibb.co/1H2GFmj/1748968563419.jpg", label: "Challenge 3" }
    ]
  },
  {
    id: 'p4',
    number: "4",
    category: "HORROR",
    mainImage: "https://i.ibb.co/1Yp92XzP/1750702460455-1.jpg",
    description: "Exploring the darker side of visual storytelling. An atmospheric dive into horror aesthetics, designed to evoke suspense and primal intrigue through cinematic lighting and shadow.",
    galleryImages: [
      { url: "https://i.ibb.co/rRbhPQ66/24225.jpg", label: "Horror Archive" }
    ]
  },
  {
    id: 'p5',
    number: "5",
    category: "OTHERS",
    mainImage: [
      "https://i.ibb.co/Ngq6h7F8/1742113163022.jpg",
      "https://i.ibb.co/9mRwGS7C/1749578845166.jpg",
      "https://i.ibb.co/99cjz36d/25369.jpg",
      "https://i.ibb.co/cKPRy9XF/25531.jpg"
    ],
    description: "A versatile collection of creative experiments and collaborative works. This multi-perspective collage showcases a broad spectrum of visual storytelling and mixed media.",
    galleryImages: [
      { url: "https://i.ibb.co/PkCM1HZ/1742232689906.jpg", label: "Creative Archive 1" },
      { url: "https://i.ibb.co/BV480J7X/1763578454588.jpg", label: "Creative Archive 2" },
      { url: "https://i.ibb.co/fGdJC7mJ/1741889456708.jpg", label: "Creative Archive 3" }
    ]
  }
];

export const CHANNEL_STATS: Stat[] = [
  { label: 'Subscribers', value: '1.2M+' },
  { label: 'Monthly Views', value: '4.5M' },
  { label: 'Videos Made', value: '450+' },
  { label: 'Average CTR', value: '12.4%' }
];
