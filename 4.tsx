"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components with TypeScript Types ---

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M256 8C119.25 8 8 119.25 8 256s111.25 248 248 248 248-111.25 248-248S392.75 8 256 8zm163.97 114.38c-14.38 24.3-38.12 41.5-62.5 41.5-10.12 0-20-3.38-28.75-8.75-22.25-13.75-34.12-40.38-28.12-65.38 10-41.5 47.88-68.12 88-61.88C392.75 128.5 418.12 153 420 184c-1.88-1.5-3.88-2.88-6.13-4.13-20.25-11.25-45.25-10.5-63.75 2.13-17.13 11.63-28.38 31.13-28.38 52.38 0 35 28.5 63.5 63.5 63.5 26.63 0 50.13-16.5 59.25-41.5-9.38 6.25-20.13 10.13-31.5 11.13-32.38 2.88-63.25-15.63-75.25-44.5-1.5-3.63-2.88-7.25-4-11.13-22.38 49.38-70.25 83.25-125.75 87.88-59.5 4.88-115.13-21.75-144.38-69.25-5.38-8.63-10-17.75-13.88-27.25 21.38 4.25 43.63 4.13 65 .13 41.13-7.5 73.25-41.25 78.25-82.63.25-2.25.38-4.5.38-6.75 0-35-28.5-63.5-63.5-63.5-27.25 0-51.13 17.13-60 42.88-8.25-2-16.25-3.13-24.13-3.13-42.63 0-81.13 22.13-102.38 57.13 2.13-7.13 4.75-14.13 8-20.88 22.13-46.88 65.25-80.5 118.13-88.63 7.5-1.13 15.13-1.75 22.88-1.75 24.38 0 47.75 7.13 67.88 20.13-14.13-22.5-35.88-39-60.88-44.13 4.13-1.63 8.38-3 12.63-4.25C212.12 115 256 94.25 256 65.5c0-2.38-.13-4.75-.38-7.13 15.63 2.88 30.13 10.38 41.5 21.38-2.63-3.13-5.38-6.13-8.25-8.88-12.25-11.75-27.88-20.13-45.25-23.38 27.25 2.5 52.38 16.38 68.38 37.13 11-13.25 25.5-23.75 42.13-29.88z"></path></svg>
);
const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" {...props}><path d="M232 237.2c0-34.3 27.9-62.1 62.1-62.1 34.3 0 62.1 27.9 62.1 62.1 0 34.3-27.9 62.1-62.1 62.1-34.2 0-62.1-27.9-62.1-62.1zM576 80H0V432H576V80zM380.3 194.5c-3.1-13.3-8.2-25.1-15.8-35.4-8.1-10.9-18.7-19.6-31.5-25.7-12.4-5.9-26.3-8.8-41.4-8.8-44.7 0-77.8 21.3-99.3 63.8-8.8 17.5-13.2 38.9-13.2 63.8 0 32.5 7.3 59.7 21.9 81.5 14.1 21.1 33.7 31.7 58.7 31.7 21.1 0 38.1-7.3 51-21.9 12.7-14.3 19.1-32.9 19.1-55.9 0-33.4-12.1-58.1-36.4-74.1-10.1-6.7-22.1-9.9-35.9-9.9-13.1 0-23.9 4.2-32.5 12.7s-12.9 19.4-12.9 32.9c0 14.8 5.4 26.8 16.2 35.9 10.6 8.9 24.9 13.4 42.8 13.4 42.8 0 74.8-21.9 95.8-65.7 2.5-5.3 4.2-11.2 5.1-17.5H232c-23.7 0-42.8-19.1-42.8-42.8s19.1-42.8 42.8-42.8h192.1c-16.1 76.4-60.6 114.6-133.6 114.6-59.2 0-103.2-28.7-132-86.1-1.2-2.3-2.3-4.8-3.1-7.3H128V128h137.3c-13-24-32.5-36-58.4-36H128V384h111.4c18.5 24.3 44.7 36.4 78.4 36.4 69.9 0 120.9-53.1 120.9-128 0-48.4-21.9-88.1-64.4-118.9z"></path></svg>
);
const PenToolIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
);
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
);
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


// --- Custom Hooks ---
const useOnScreen = (options: IntersectionObserverInit): [React.Dispatch<React.SetStateAction<Element | null>>, boolean] => {
    const [ref, setRef] = useState<Element | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
interface AnimatedSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}
interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    dribbbleUrl: string;
    liveUrl: string;
    imageUrl: string;
}
interface TimelineItemProps {
    icon: React.ReactNode;
    date: string;
    title: string;
    subtitle: string;
    description: string;
}

// --- Reusable Components ---
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, title, children }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section 
            ref={setRef}
            id={id} 
            className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-100 relative inline-block">
                        {title}
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                    </h2>
                </div>
                {children}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, dribbbleUrl, liveUrl, imageUrl }) => (
  <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-blue-500">
    <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-end gap-5 text-gray-400">
        <a href={dribbbleUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label={`Dribbble shot for ${title}`}><DribbbleIcon height="24" width="24" /></a>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label={`Live demo of ${title}`}><ExternalLinkIcon height="24" width="24" /></a>
      </div>
    </div>
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, date, title, subtitle, description }) => (
    <div className="relative pl-12 pb-8 last:pb-0">
        <div className="absolute left-4 top-1 h-full w-0.5 bg-gray-700"></div>
        <div className="absolute left-0 top-0 w-8 h-8 bg-gray-950 border-2 border-blue-500 rounded-full flex items-center justify-center">
             <span className="text-blue-500">{icon}</span>
        </div>
        <p className="text-sm font-medium text-gray-500">{date}</p>
        <h3 className="text-xl font-bold text-gray-100 mt-1">{title}</h3>
        <h4 className="font-semibold text-blue-400">{subtitle}</h4>
        <p className="mt-2 text-gray-400">{description}</p>
    </div>
);

// --- Main Page Component ---
export default function ElegantDarkTemplate() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans leading-normal tracking-normal">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f]/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-blue-400">AV.</a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300">{link.label}</a>
            ))}
          </div>
        </nav>
      </header>
      
      <main>
        {/* --- Hero Section --- */}
        <section className="min-h-screen flex items-center pt-24 pb-12 px-8">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-semibold text-blue-400">Hi, I'm Alisa Vance</span>
                        <h1 className="mt-2 text-5xl lg:text-6xl font-extrabold text-gray-100">
                            Creative Designer & Frontend Developer
                        </h1>
                        <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
                            I craft beautiful, intuitive, and high-performing web experiences with a passion for user-centric design and clean code.
                        </p>
                        <div className="mt-10 flex gap-4 justify-center md:justify-start">
                            <a href="#contact" className="inline-block bg-blue-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">Let's Talk</a>
                            <a href="#projects" className="inline-block bg-gray-800 text-gray-200 font-bold px-8 py-4 rounded-lg hover:bg-gray-700 transition-all">My Work</a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                            <img 
                                src="https://placehold.co/320x320/0a192f/60a5fa?text=AV" 
                                alt="Alisa Vance" 
                                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- About Section --- */}
        <AnimatedSection id="about" title="A Little About Me">
            <p className="max-w-3xl mx-auto text-center text-xl text-gray-400 leading-relaxed">
            As a designer and developer, I bridge the gap between aesthetics and functionality. With a background in graphic design and a deep love for technology, I specialize in creating engaging user interfaces and bringing them to life with code. My goal is to build products that are not only visually appealing but also a joy to use.
            </p>
        </AnimatedSection>

        {/* --- Projects Section --- */}
        <AnimatedSection id="projects" title="My Creations">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard 
              title="Starlight UI - Design System"
              description="A comprehensive design system built with React and Storybook to unify branding and accelerate development across all company products."
              tags={['Design System', 'React', 'Storybook']}
              dribbbleUrl="#" liveUrl="#"
              imageUrl="https://placehold.co/600x400/0d1f2d/99e6ff?text=Starlight+UI"
            />
            <ProjectCard 
              title="Flowstate - Productivity App"
              description="A sleek, minimal productivity app designed to help users focus. Features task management, pomodoro timer, and ambient sounds."
              tags={['UI/UX', 'Figma', 'Next.js']}
              dribbbleUrl="#" liveUrl="#"
              imageUrl="https://placehold.co/600x400/3b82f6/dbeafe?text=Flowstate"
            />
            <ProjectCard 
              title="Artisan's Marketplace"
              description="An e-commerce platform for independent artists to sell their crafts. Focused on storytelling and high-quality product imagery."
              tags={['Web Design', 'Shopify', 'Branding']}
              dribbbleUrl="#" liveUrl="#"
              imageUrl="https://placehold.co/600x400/1e40af/dbeafe?text=Artisan's"
            />
          </div>
        </AnimatedSection>

        {/* --- Experience Section --- */}
        <AnimatedSection id="experience" title="Career Journey">
          <div className="max-w-3xl mx-auto">
            <TimelineItem
              icon={<PenToolIcon height="16" width="16"/>}
              date="2021 - Present"
              title="Senior Product Designer"
              subtitle="Innovatech"
              description="Leading design for key product initiatives, mentoring junior designers, and collaborating with engineering to ship high-quality features."
            />
            <TimelineItem
              icon={<LayersIcon height="16" width="16"/>}
              date="2018 - 2021"
              title="UI/UX Designer"
              subtitle="Creative Solutions Agency"
              description="Worked with diverse clients to design and prototype websites and mobile applications from concept to final handoff."
            />
             <TimelineItem
              icon={<BriefcaseIcon height="16" width="16"/>}
              date="2016 - 2018"
              title="Freelance UI/UX Designer"
              subtitle="Self-Employed"
              description="Partnered with startups and small businesses to establish their brand identity and create engaging digital presences from the ground up."
            />
          </div>
        </AnimatedSection>

        {/* --- Contact Section --- */}
        <AnimatedSection id="contact" title="Let's Create Together">
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl text-gray-400 mb-8">
                    Have a project in mind or just want to connect? I'm always excited to hear about new ideas and opportunities. Drop me a line!
                </p>
                <a 
                    href="mailto:alisa.vance@email.com" 
                    className="inline-block bg-blue-500 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                >
                    alisa.vance@email.com
                </a>
                <div className="mt-16 flex justify-center gap-10 text-4xl text-gray-500">
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300" aria-label="Dribbble"><DribbbleIcon /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300" aria-label="GitHub"><GithubIcon /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300" aria-label="Behance"><BehanceIcon /></a>
                </div>
            </div>
        </AnimatedSection>
      </main>

      <footer className="bg-[#0a192f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>Designed & Built by Alisa Vance &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
