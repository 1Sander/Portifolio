import GrimTrailImage from "../assets/images/Grimicon.png";
import CrimsonRiftImage from "../assets/images/Crimsonicon.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  stack?: string[];
  media?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Grim Trail",
    description: "A platform 2D game developed with Unity, with a dark soundtrack theme, for Android and Web.",
    image: GrimTrailImage,
    link: "https://1sander.itch.io/grim-trail",
    stack: ["Unity", "C#", "Asesprite"],
    media: [
    "/media/grim-1.gif",
    "/media/grim-2.gif",
    "/media/grim-3.gif"
    ]
  },
  {
    id: 2,
    title: "Crimson Rift",
    description: "2D game with RPG elements and a rich combat system with the use of skills and weapon upgrades, developed with Unity using its most advanced features.",
    image: CrimsonRiftImage,
    link: "https://github.com/1Sander/CrimsonRift",
    stack: ["Unity", "C#", "Asesprite"]
  },  
  
];
