import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });

async function getData() {
  try {
    if (!personalData?.devUsername) {
      throw new Error('Developer username is not defined');
    }

    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default async function Home() {
  let blogs = [];
  try {
    blogs = await getData();
  } catch (error) {
    console.error('Error loading blogs:', error);
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
