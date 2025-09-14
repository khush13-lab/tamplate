"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icon Components with TypeScript Types ---

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
);
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const UniversityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 10h18M3 6h18M3 14h18M3 18h18M12 3v18"></path><path d="M20.2 11.8l-8.2 4.4-8.2-4.4"></path><path d="M12 21l8.2-4.4M3.8 16.2L12 21l8.2-4.8"></path></svg>
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
    githubUrl: string;
    liveUrl: string;
    imageUrl: string;
}
interface TimelineItemProps {
    icon: React.ReactNode;
    date: string;
    title: string;
    subtitle: string;
    description: string;
    tags?: string[];
}


// --- Reusable Components ---
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, title, children }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white relative inline-block tracking-tight">
                        {title}
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                    </h2>
                </div>
                {children}
            </div>
        </section>
    );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, githubUrl, liveUrl, imageUrl }) => (
  <div className="relative group overflow-hidden rounded-xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative bg-[#100f21] rounded-lg h-full overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-gray-400 h-24">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-purple-900/50 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-end gap-5 text-gray-400">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label={`GitHub for ${title}`}><GithubIcon height="24" width="24" /></a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label={`Live demo of ${title}`}><ExternalLinkIcon height="24" width="24" /></a>
          </div>
        </div>
      </div>
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, date, title, subtitle, description, tags }) => (
    <div className="relative pl-12 py-4 group">
        <div className="absolute left-0 top-3 h-full w-0.5 bg-gray-700"></div>
        <div className="absolute -left-4 top-5 w-8 h-8 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-400">
            {icon}
        </div>
        <p className="text-sm font-semibold text-gray-500">{date}</p>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <h4 className="font-semibold text-pink-400">{subtitle}</h4>
        <p className="mt-2 text-gray-400">{description}</p>
        {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(skill => (
                    <span key={skill} className="bg-pink-900/50 text-pink-300 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
                ))}
            </div>
        )}
    </div>
);


// --- Main Page Component ---
export default function FullStackDeveloperTemplate() {
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
    <div className="bg-[#0a0918] text-gray-300 font-sans">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 z-0"></div>
        <div className="relative z-10">
          <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0918]/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <a href="#" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">AC.</a>
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="font-medium text-gray-300 hover:text-pink-400 transition-colors duration-300">{link.label}</a>
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
                            <span className="text-lg font-semibold text-purple-400">Hello, I'm Alex Carter</span>
                            <h1 className="mt-2 text-5xl lg:text-6xl font-extrabold text-white tracking-tighter">
                                Full Stack Web Developer
                            </h1>
                            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
                            I build seamless, end-to-end web applications, transforming ideas into high-quality, scalable products from database to UI.
                            </p>
                            <div className="mt-10 flex gap-4 justify-center md:justify-start">
                                <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105">Let's Connect</a>
                                <a href="#projects" className="inline-block bg-gray-800 text-gray-200 font-bold px-8 py-4 rounded-lg hover:bg-gray-700 transition-all">My Projects</a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="relative w-80 h-80">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                                <img 
                                    src="https://placehold.co/320x320/0a0918/e9d5ff?text=AC" 
                                    alt="Alex Carter" 
                                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- About Section --- */}
            <AnimatedSection id="about" title="About Me">
                <p className="max-w-3xl mx-auto text-center text-xl text-gray-400 leading-relaxed">
                As a full-stack developer, I thrive on bringing ideas to life, from the database architecture to the pixel-perfect user interface. With a strong foundation in both frontend and backend technologies, I enjoy the challenge of building cohesive and efficient applications. I'm dedicated to continuous learning and applying modern development practices to create robust and user-friendly digital experiences.
                </p>
            </AnimatedSection>

            {/* --- Projects Section --- */}
            <AnimatedSection id="projects" title="Featured Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard 
                  title="Nexus Commerce"
                  description="A feature-rich e-commerce platform built with the MERN stack, featuring product management, user authentication, and a Stripe-integrated checkout process."
                  tags={['React', 'Node.js', 'Express', 'MongoDB']}
                  githubUrl="#" liveUrl="#"
                  imageUrl="https://placehold.co/600x400/1e1b34/a855f7?text=Nexus"
                />
                <ProjectCard 
                  title="Quantum Dash"
                  description="A serverless analytics dashboard for tracking user engagement, built with Next.js for the frontend and a PostgreSQL database managed with Prisma."
                  tags={['Next.js', 'Prisma', 'PostgreSQL', 'Vercel']}
                  githubUrl="#" liveUrl="#"
                  imageUrl="https://placehold.co/600x400/4c1d95/d8b4fe?text=Quantum"
                />
                <ProjectCard 
                  title="ConnectSphere"
                  description="A real-time chat application using TypeScript and WebSockets, allowing for instant messaging, user presence, and private chat rooms."
                  tags={['TypeScript', 'React', 'Socket.io', 'Redis']}
                  githubUrl="#" liveUrl="#"
                  imageUrl="https://placehold.co/600x400/ec4899/fbcfe8?text=Connect"
                />
              </div>
            </AnimatedSection>
            
            {/* --- Experience Section --- */}
            <AnimatedSection id="experience" title="Career Journey">
              <div className="max-w-3xl mx-auto">
                <TimelineItem
                  icon={<CodeIcon height="16" width="16" />}
                  date="2021 - Present"
                  title="Senior Full Stack Developer"
                  subtitle="Innovatech Solutions"
                  description="Leading the development of client-facing web applications, architecting scalable backend systems, and mentoring a team of junior developers."
                  tags={['React', 'Node.js', 'GraphQL', 'AWS']}
                />
                <TimelineItem
                  icon={<CodeIcon height="16" width="16" />}
                  date="2018 - 2021"
                  title="Full Stack Engineer"
                  subtitle="Digital Momentum"
                  description="Developed and maintained features for a large-scale SaaS platform, working across the entire stack from the database to the front-end."
                  tags={['Vue.js', 'Laravel', 'MySQL', 'Docker']}
                />
                 <TimelineItem
                  icon={<UniversityIcon height="16" width="16" />}
                  date="2014 - 2018"
                  title="B.S. in Software Engineering"
                  subtitle="University of Technology"
                  description="Focused on web development, database systems, and software architecture principles."
                />
              </div>
            </AnimatedSection>

            {/* --- Contact Section --- */}
            <AnimatedSection id="contact" title="Get In Touch">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xl text-gray-400 mb-8">
                        I'm always looking for new challenges and exciting projects to work on. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <a 
                        href="mailto:alex.carter@email.com" 
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl px-10 py-5 rounded-lg shadow-lg hover:shadow-pink-500/30 transition-all transform hover:scale-105"
                    >
                         alex.carter@email.com
                    </a>
                    <div className="mt-16 flex justify-center gap-10 text-4xl text-gray-500">
                        <a href="#" className="hover:text-pink-400 transition-colors duration-300" aria-label="GitHub"><GithubIcon /></a>
                        <a href="#" className="hover:text-pink-400 transition-colors duration-300" aria-label="LinkedIn"><LinkedinIcon /></a>
                        <a href="mailto:alex.carter@email.com" className="hover:text-pink-400 transition-colors duration-300" aria-label="Email"><EnvelopeIcon /></a>
                    </div>
                </div>
            </AnimatedSection>
          </main>

          <footer className="bg-[#0a0918]/50 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
              <p>Designed & Built by Alex Carter &copy; {new Date().getFullYear()}</p>
            </div>
          </footer>
      </div>
    </div>
  );
}
