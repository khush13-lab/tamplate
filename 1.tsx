"use client";

import React, { FC } from 'react';

// --- SVG Icon Components ---
// All icons are now self-contained SVGs with correct attributes to ensure proper rendering.
const FaGithub: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const FaLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const FaDribbble: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M256 8C119.25 8 8 119.25 8 256s111.25 248 248 248 248-111.25 248-248S392.75 8 256 8zm163.97 114.38c-14.38 24.3-38.12 41.5-62.5 41.5-10.12 0-20-3.38-28.75-8.75-22.25-13.75-34.12-40.38-28.12-65.38 10-41.5 47.88-68.12 88-61.88C392.75 128.5 418.12 153 420 184c-1.88-1.5-3.88-2.88-6.13-4.13-20.25-11.25-45.25-10.5-63.75 2.13-17.13 11.63-28.38 31.13-28.38 52.38 0 35 28.5 63.5 63.5 63.5 26.63 0 50.13-16.5 59.25-41.5-9.38 6.25-20.13 10.13-31.5 11.13-32.38 2.88-63.25-15.63-75.25-44.5-1.5-3.63-2.88-7.25-4-11.13-22.38 49.38-70.25 83.25-125.75 87.88-59.5 4.88-115.13-21.75-144.38-69.25-5.38-8.63-10-17.75-13.88-27.25 21.38 4.25 43.63 4.13 65 .13 41.13-7.5 73.25-41.25 78.25-82.63.25-2.25.38-4.5.38-6.75 0-35-28.5-63.5-63.5-63.5-27.25 0-51.13 17.13-60 42.88-8.25-2-16.25-3.13-24.13-3.13-42.63 0-81.13 22.13-102.38 57.13 2.13-7.13 4.75-14.13 8-20.88 22.13-46.88 65.25-80.5 118.13-88.63 7.5-1.13 15.13-1.75 22.88-1.75 24.38 0 47.75 7.13 67.88 20.13-14.13-22.5-35.88-39-60.88-44.13 4.13-1.63 8.38-3 12.63-4.25C212.12 115 256 94.25 256 65.5c0-2.38-.13-4.75-.38-7.13 15.63 2.88 30.13 10.38 41.5 21.38-2.63-3.13-5.38-6.13-8.25-8.88-12.25-11.75-27.88-20.13-45.25-23.38 27.25 2.5 52.38 16.38 68.38 37.13 11-13.25 25.5-23.75 42.13-29.88z"></path></svg>
);
const SiFigma: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F24E1E"></path><path d="M12 24C15.3137 24 18 18.6274 18 12C18 5.37258 15.3137 0 12 0V24Z" fill="#FF7262"></path><path d="M12 24C8.68629 24 6 18.6274 6 12C6 5.37258 8.68629 0 12 0V12C12 15.3137 9.31371 18 6 18C8.68629 18 12 20.6863 12 24Z" fill="#0ACF83"></path><path d="M12 0C8.68629 0 6 5.37258 6 12H12V0Z" fill="#A259FF"></path><path d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z" fill="#1ABCFE"></path></svg>
);
const SiAdobeillustrator: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22.5 1.5H1.5V22.5H22.5V1.5Z" fill="#330000"></path><path d="M11.916 8.318L10.05 13.5H8.625L11.125 7H13.042L15.542 13.5H14.125L12.25 8.318H11.916ZM16.333 10.375V13.5H15.083V10.375H16.333ZM15.708 9.583C15.341 9.583 15.05 9.292 15.05 8.925C15.05 8.558 15.341 8.267 15.708 8.267C16.075 8.267 16.366 8.558 16.366 8.925C16.366 9.292 16.075 9.583 15.708 9.583Z" fill="#FF7F18"></path></svg>
);
const SiAdobephotoshop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22.5 1.5H1.5V22.5H22.5V1.5Z" fill="#001834"></path><path d="M10.167 7H13.25C14.433 7 15.167 7.55 15.167 8.75V10.167C15.167 10.75 14.833 11.25 14.25 11.583C14.917 11.833 15.25 12.417 15.25 13.25V14.5C15.25 15.917 14.417 16.5 13.083 16.5H10.167V7ZM11.417 8V11.25H12.917C14 11.25 14.083 10.583 14.083 10V9C14.083 8.083 13.833 8 12.917 8H11.417ZM11.417 12.25V15.5H13.083C14.25 15.5 14.25 14.667 14.25 14V13.25C14.25 12.25 14 12.25 13.083 12.25H11.417ZM16.375 7H17.896L19.271 16.5H17.896L17.563 14H16.104L15.771 16.5H14.396L15.771 7H16.375ZM16.833 13L16.417 9.5L16 13H16.833Z" fill="#00A4A4"></path></svg>
);
const SiHtml5: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}><path d="M1.001 0h21.998l-1.998 22.398-9.006 2.602-8.994-2.602L1.001 0zm19.991 10.513V4.717l-12.012.003L9.02 10.516h11.972zM15.01 19.34l4.01-1.076 1.41-15.546H9.017l.088 1.054.484 5.397h8.802l-.32 3.593-3.033.82-3.04-.82-.204-2.28H7.904l.32 3.63L15.01 19.34z"></path></svg>
);
const SiCss3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}><path d="M1.001 0h21.998l-1.998 22.398-9.006 2.602-8.994-2.602L1.001 0zm17.067 10.495l.293-3.264-5.389-.002.146-1.637 6.94.002L20.35 0H3.649l.059.66.486 5.432h11.895l-.293 3.257-2.82.76-2.822-.76-.183-2.05H6.28l.348 3.868L12 15.289l5.378-1.528z"></path></svg>
);
const SiJavascript: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M0 0H24V24H0V0Z" fill="#F7DF1E"></path><path d="M16.488 15.228C16.212 15.684 15.828 16.08 15.288 16.38C14.748 16.68 14.112 16.848 13.344 16.848C12.444 16.848 11.676 16.632 11.028 16.164C10.392 15.696 9.96 15.036 9.744 14.196H11.376C11.532 14.628 11.796 14.94 12.168 15.132C12.54 15.324 12.936 15.42 13.356 15.42C13.884 15.42 14.304 15.288 14.592 15.036C14.892 14.772 15.048 14.436 15.048 14.04C15.048 13.62 14.892 13.284 14.58 13.032C14.28 12.78 13.788 12.528 13.104 12.288L12.456 12.036C11.652 11.724 11.016 11.34 10.548 10.884C10.08 10.428 9.84 9.84 9.84 9.12C9.84 8.4 10.08 7.8 10.56 7.332C11.04 6.864 11.664 6.624 12.432 6.624C13.164 6.624 13.8 6.816 14.328 7.2C14.856 7.572 15.216 8.064 15.396 8.676H13.788C13.68 8.364 13.488 8.136 13.224 8.004C12.96 7.86 12.672 7.788 12.36 7.788C11.964 7.788 11.64 7.908 11.388 8.148C11.148 8.388 11.028 8.664 11.028 8.976C11.028 9.324 11.16 9.6 11.424 9.804C11.688 10.008 12.144 10.224 12.792 10.464L13.416 10.716C14.316 11.052 14.988 11.448 15.432 11.904C15.888 12.36 16.116 12.96 16.116 13.704C16.116 14.34 15.912 14.88 15.504 15.324C15.096 15.768 14.556 16.08 13.884 16.272C13.212 16.464 12.516 16.56 11.796 16.56C10.836 16.56 9.996 16.32 9.276 15.84C8.556 15.36 8.04 14.7 7.728 13.872H9.384C9.552 14.28 9.83999 14.592 10.248 14.808C10.656 15.024 11.1 15.132 11.58 15.132C12.012 15.132 12.384 15.036 12.696 14.844C13.008 14.652 13.164 14.388 13.164 14.052C13.164 13.692 13.02 13.404 12.732 13.188C12.444 12.972 11.964 12.756 11.292 12.528L10.62 12.276C9.756 11.952 9.072 11.532 8.568 11.016C8.064 10.5 7.812 9.828 7.812 9.012C7.812 8.244 8.04 7.608 8.508 7.104C8.976 6.6 9.588 6.288 10.344 6.168C11.1 6.048 11.856 6 12.612 6C13.524 6 14.316 6.228 14.988 6.684C15.66 7.14 16.128 7.752 16.392 8.52H14.784C14.652 8.136 14.412 7.836 14.064 7.62C13.728 7.404 13.332 7.296 12.876 7.296C12.504 7.296 12.192 7.392 11.94 7.584C11.688 7.776 11.568 8.016 11.568 8.304C11.568 8.604 11.664 8.844 11.856 9.024C12.048 9.204 12.36 9.396 12.792 9.6L13.5 9.852C14.4 10.164 15.084 10.56 15.552 11.04C16.02 11.52 16.248 12.144 16.248 12.912C16.248 13.62 16.02 14.22 15.564 14.712C15.12 15.204 14.544 15.564 13.836 15.792C13.128 16.02 12.408 16.128 11.676 16.128C10.74 16.128 9.936 15.9 9.264 15.444C8.592 14.988 8.1 14.364 7.788 13.584H6.228C6.552 14.616 7.08 15.48 7.812 16.176C8.544 16.872 9.42 17.352 10.44 17.616C11.46 17.88 12.492 18 13.536 18C14.7 18 15.732 17.76 16.632 17.292C17.532 16.812 18.216 16.128 18.684 15.228H16.488Z" fill="black"></path></svg>
);
const SiReact: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="12" cy="12" r="2.5" fill="#61DAFB"></circle><ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5"></ellipse><ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5"></ellipse></svg>
);
const SiNextdotjs: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path><path d="M8.59 16.34l4.58-9.16h2.83v10.82h-2.1v-9l-4.47 8.94z" fill="currentColor"></path></svg>
);
const SiTailwindcss: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 12.5714C15.3137 12.5714 18 9.88512 18 6.57143C18 3.25774 15.3137 0.571428 12 0.571428C8.68629 0.571428 6 3.25774 6 6.57143C6 9.88512 8.68629 12.5714 12 12.5714Z" fill="currentColor"></path><path d="M12 23.4286C15.3137 23.4286 18 20.7423 18 17.4286C18 14.1149 15.3137 11.4286 12 11.4286C8.68629 11.4286 6 14.1149 6 17.4286C6 20.7423 8.68629 23.4286 12 23.4286Z" fill="currentColor"></path></svg>
);

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;

// --- Custom Hooks ---
const useOnScreen = (options: IntersectionObserverInit): [React.Dispatch<React.SetStateAction<Element | null>>, boolean] => {
    const [ref, setRef] = React.useState<Element | null>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        if (ref) observer.observe(ref);
        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);
    return [setRef, isVisible];
};


// --- Component Prop Interfaces ---
interface Skill {
  name: string;
  icon: IconComponentType;
  color: string;
}
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}
interface AnimatedSectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

// --- Data ---
const designSkills: Skill[] = [
  { name: "Figma", icon: SiFigma, color: "" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "" },
];

const developmentSkills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-slate-800" }, // Color provided by SVG fill
  { name: "React", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
];

const projects: Project[] = [
  { id: 1, name: "Fintech App UI/UX", description: "A complete UI/UX case study for a mobile banking application, focusing on user-centric design and accessibility.", image: "https://placehold.co/600x400/e2e8f0/334155?text=Fintech+UI", link: "#", tags: ["UI/UX", "Figma", "Case Study"] },
  { id: 2, name: "Agency Website Redesign", description: "Led the redesign and development of a creative agency's website, resulting in a 40% increase in user engagement.", image: "https://placehold.co/600x400/e2e8f0/334155?text=Agency+Site", link: "#", tags: ["Next.js", "Tailwind CSS", "Web Design"] },
  { id: 3, name: "Component Library", description: "Developed a reusable component library in React and Storybook to standardize the UI across multiple products.", image: "https://placehold.co/600x400/e2e8f0/334155?text=Components", link: "#", tags: ["React", "Storybook", "Design System"] },
];

// --- Reusable Animated Section Component ---
const AnimatedSection: FC<AnimatedSectionProps> = ({ id, children, className }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
        >
            {children}
        </section>
    );
};


const Portfolio: FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="bg-slate-50 text-slate-700 min-h-screen font-sans antialiased">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          
          <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-slate-50/80 backdrop-blur-lg shadow-md -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16' : 'py-8'}`}>
              <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-slate-800 hover:text-teal-600 transition-colors">Jane Doe.</a>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#about" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">About</a>
                    <a href="#skills" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Skills</a>
                    <a href="#projects" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Projects</a>
                </nav>
                <a href="#contact" className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-px">
                    Contact
                </a>
              </div>
          </header>

          <main>
            <section className="text-center py-24 md:py-32">
                <div className="relative w-40 h-40 mx-auto mb-8">
                    <img 
                        src="https://placehold.co/256x256/e2e8f0/475569?text=JD"
                        alt="Jane Doe"
                        className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
                    />
                     <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xl shadow-md">
                        👋
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
                Creative Designer
                </h1>
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-teal-600 mt-2">
                    & UI Engineer
                </h2>
                <p className="text-lg md:text-xl mt-8 max-w-2xl mx-auto text-slate-600">
                    I design and build beautiful, accessible, and user-friendly digital experiences.
                </p>
                <div className="flex justify-center gap-6 mt-10 text-slate-500">
                  <a href="#" aria-label="GitHub" className="hover:text-teal-600 transition-colors"><FaGithub className="w-7 h-7" /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-teal-600 transition-colors"><FaLinkedin className="w-7 h-7" /></a>
                  <a href="#" aria-label="Dribbble" className="hover:text-teal-600 transition-colors"><FaDribbble className="w-7 h-7" /></a>
                </div>
            </section>

            <AnimatedSection id="about">
              <div className="grid md:grid-cols-1 gap-16 items-center">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                        Hello! I'm Jane, a designer and developer who loves crafting products that are both functional and visually delightful. With a background in graphic design and a passion for coding, I bridge the gap between creative vision and technical execution.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        My process is rooted in user-centered design principles. I enjoy tackling complex problems and turning them into intuitive, elegant solutions. When I'm not designing or coding, you can find me exploring new coffee shops or hiking in the mountains.
                    </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection id="skills" className="bg-white rounded-3xl -mx-4 sm:-mx-8 px-4 sm:px-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">My Expertise</h2>
                <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Design Column */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-slate-800 mb-2">Design</h3>
                            <p className="text-slate-500">Crafting visually appealing and intuitive user interfaces.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {designSkills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-4 bg-slate-100 p-4 rounded-xl border border-slate-200/80 transition-all hover:shadow-lg hover:border-teal-300 hover:bg-white">
                                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                                    <div>
                                        <h4 className="font-semibold text-slate-800 text-lg">{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Development Column */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-slate-800 mb-2">Development</h3>
                            <p className="text-slate-500">Building responsive and high-performance applications.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {developmentSkills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-4 bg-slate-100 p-4 rounded-xl border border-slate-200/80 transition-all hover:shadow-lg hover:border-sky-300 hover:bg-white">
                                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                                     <div>
                                        <h4 className="font-semibold text-slate-800 text-lg">{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="projects">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Selected Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                            <div className="overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h3>
                                <p className="text-slate-600 mb-4 h-24">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1 group/link">
                                    View Case Study <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
            
            <AnimatedSection id="contact" className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
                <p className="text-slate-600 max-w-xl mx-auto mb-8 text-lg">
                    Have a project in mind? I'd love to hear about it. Let's connect and create something amazing.
                </p>
                <a 
                    href="mailto:jane.doe@email.com"
                    className="inline-block px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-px"
                >
                    jane.doe@email.com
                </a>
            </AnimatedSection>

            <footer className="text-center py-8 text-slate-500 border-t border-slate-200">
              <p>&copy; {new Date().getFullYear()} Jane Doe. All Rights Reserved.</p>
            </footer>

          </main>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

