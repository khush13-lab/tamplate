"use client";

import React, { FC, useEffect, useRef, useState } from 'react';

// --- SVG Icon Components ---
const FaGithub: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"/></svg>
);
const FaLinkedin: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
);
const FaTwitter: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
);
const ShieldIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const CpuIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const CodeIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

// --- Custom Hooks & Components ---

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
        return () => { if (ref) observer.unobserve(ref); };
    }, [ref, options]);

    return [setRef, isVisible];
};

const AnimatedSection: FC<{id?: string, children: React.ReactNode, className?: string}> = ({ id, children, className }) => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <section
            ref={setRef}
            id={id}
            className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
        >
            {children}
        </section>
    );
};

// --- Data ---

const skills = {
    offensive: ["Penetration Testing", "Red Teaming", "Exploit Development", "Metasploit"],
    defensive: ["Incident Response", "SIEM (Splunk)", "Firewall Config", "Threat Hunting"],
    blockchain: ["Solidity", "Smart Contracts", "Hardhat", "DeFi Security Audits"]
};

const projects = [
    { name: "Project Chimera", description: "A decentralized threat intelligence platform using blockchain to ensure data integrity and immutability.", tags: ["Solidity", "IPFS", "Next.js"], link: "#" },
    { name: "Aegis Protocol", description: "An automated smart contract auditing tool that uses static and dynamic analysis to detect common vulnerabilities.", tags: ["Python", "Hardhat", "Slither"], link: "#" },
    { name: "Red-Team Ops Dashboard", description: "A real-time command and control (C2) dashboard for managing red team engagements and visualizing attack paths.", tags: ["Go", "React", "WebSockets"], link: "#" }
];

const experience = [
    { role: "Lead Security Architect", company: "Cyberdyne Systems", period: "2021 - Present", desc: "Designing and implementing zero-trust architecture for enterprise networks. Leading blockchain security research and development." },
    { role: "Penetration Tester", company: "Stark Industries", period: "2018 - 2021", desc: "Conducted network, web application, and mobile penetration tests for Fortune 500 clients. Developed custom tooling for exploit automation." }
];

const MatrixRain: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops: number[] = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const render = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00f0a0'; // Neon green
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(render);
        };
        
        render();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-20"></canvas>;
};

const Portfolio: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Orbitron:wght@900&display=swap');
        
        body {
            font-family: 'Roboto Mono', monospace;
            background: #010409;
            color: #c9d1d9;
        }

        .font-orbitron {
            font-family: 'Orbitron', sans-serif;
        }
        
        .holographic {
            background: rgba(16, 26, 42, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 240, 160, 0.2);
            position: relative;
        }
        .holographic:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(0, 240, 160, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.5s;
            pointer-events: none;
            z-index: 1;
        }
        .holographic:hover:before {
            opacity: 1;
        }
        .holographic-content {
            position: relative;
            z-index: 2;
        }

        .glitch {
            animation: glitch 1s linear infinite;
        }
        .glitch-layers {
            position: relative;
        }
        .glitch-layers:before,
        .glitch-layers:after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #010409;
            overflow: hidden;
        }
        .glitch-layers:before {
            left: 2px;
            text-shadow: -1px 0 #ff00ff;
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch-layers:after {
            left: -2px;
            text-shadow: -1px 0 #00f0a0;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
            0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
            10% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
            20% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
            30% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
            40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
            50% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
            60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
            70% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
            80% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
            90% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
            100% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); }
        }

        @keyframes glitch-anim-2 {
            0% { clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%); }
            10% { clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%); }
            20% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
            30% { clip-path: polygon(0 25%, 100% 25%, 100% 25%, 0 25%); }
            40% { clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%); }
            50% { clip-path: polygon(0 65%, 100% 65%, 100% 66%, 0 66%); }
            60% { clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%); }
            70% { clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%); }
            80% { clip-path: polygon(0 35%, 100% 35%, 100% 36%, 0 36%); }
            90% { clip-path: polygon(0 75%, 100% 75%, 100% 76%, 0 76%); }
            100% { clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%); }
        }

      `}</style>
      <div className="bg-[#010409] min-h-screen">
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#010409]/80 backdrop-blur-md border-b border-cyan-300/20' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-xl font-bold font-orbitron tracking-widest text-cyan-300">A.I.</a>
                <nav className="hidden md:flex gap-8 text-sm">
                    {['//about', '//skills', '//projects', '//contact'].map(link => (
                        <a key={link} href={`#${link.substring(2)}`} className="text-slate-400 hover:text-cyan-300 transition-colors tracking-widest">{link}</a>
                    ))}
                </nav>
            </div>
        </header>

        <main className="container mx-auto px-6">
            <section className="min-h-screen flex items-center justify-center text-center relative">
                <MatrixRain />
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black font-orbitron uppercase text-slate-100">
                        <span className="glitch-layers" data-text="Alex Ivanov">Alex Ivanov</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-cyan-300 tracking-wider">Cybersecurity & Blockchain Developer</p>
                    <p className="mt-6 max-w-2xl mx-auto text-slate-400">
                        Securing decentralized systems and building resilient infrastructure against next-generation cyber threats.
                    </p>
                    <div className="mt-10 flex justify-center gap-6 text-2xl text-slate-500">
                        <a href="#" className="hover:text-cyan-300 transition-colors"><FaGithub /></a>
                        <a href="#" className="hover:text-cyan-300 transition-colors"><FaLinkedin /></a>
                        <a href="#" className="hover:text-cyan-300 transition-colors"><FaTwitter /></a>
                    </div>
                </div>
            </section>
            
            <AnimatedSection id="about">
                <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_About_Me</h2>
                <div className="max-w-4xl mx-auto holographic rounded-lg p-8">
                    <p className="text-lg leading-relaxed text-slate-300 holographic-content">
                        I am a security professional with a deep specialization in both offensive cybersecurity tactics and the architectural defense of blockchain protocols. My career is driven by a passion for understanding and mitigating complex threat vectors in high-stakes environments. I thrive at the intersection of cryptography, distributed systems, and secure coding practices to build and fortify the digital world.
                    </p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection id="skills">
                <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_Skill_Matrix</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="holographic rounded-lg p-6">
                            <div className="holographic-content">
                                <div className="flex items-center gap-4 mb-4">
                                    {category === 'offensive' && <ShieldIcon className="text-red-400 w-8 h-8"/>}
                                    {category === 'defensive' && <ShieldIcon className="text-green-400 w-8 h-8"/>}
                                    {category === 'blockchain' && <CodeIcon className="text-cyan-400 w-8 h-8"/>}
                                    <h3 className="text-2xl font-bold font-orbitron uppercase text-slate-100">{category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {skillList.map(skill => <li key={skill} className="text-slate-400 before:content-['>_'] before:mr-2 before:text-cyan-400">{skill}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection id="projects">
                <h2 className="text-4xl font-bold font-orbitron text-center mb-12 text-cyan-300 tracking-widest">_Project_Archive</h2>
                <div className="space-y-8">
                    {projects.map(p => (
                        <div key={p.name} className="holographic rounded-lg p-6 group">
                            <div className="holographic-content">
                                <h3 className="text-2xl font-bold text-slate-100 font-orbitron">{p.name}</h3>
                                <p className="text-slate-400 mt-2 mb-4">{p.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map(t => <span key={t} className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection id="experience">
                <h2 className="text-4xl font-bold font-orbitron text-center mb-16 text-cyan-300 tracking-widest">_Career_File</h2>
                <div className="max-w-3xl mx-auto relative border-l-2 border-cyan-300/30 pl-10">
                    {experience.map(e => (
                        <div key={e.company} className="mb-12 last:mb-0">
                            <div className="absolute -left-2.5 top-1 w-5 h-5 bg-cyan-300 rounded-full border-4 border-[#010409]"></div>
                            <p className="text-sm text-slate-500">{e.period}</p>
                            <h3 className="text-xl font-bold text-slate-100 mt-1">{e.role}</h3>
                            <h4 className="font-semibold text-cyan-400">{e.company}</h4>
                            <p className="mt-2 text-slate-400">{e.desc}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection id="contact" className="text-center">
                <h2 className="text-4xl font-bold font-orbitron text-cyan-300 tracking-widest">_Contact</h2>
                <p className="mt-6 max-w-xl mx-auto text-lg text-slate-400">
                    Open to collaborating on challenging security and blockchain projects. Reach out to connect.
                </p>
                <a href="mailto:alex.ivanov.sec@email.com" className="mt-8 inline-block px-8 py-3 border-2 border-cyan-300 text-cyan-300 font-bold tracking-widest uppercase hover:bg-cyan-300 hover:text-[#010409] transition-all duration-300">
                    Initiate Comms
                </a>
            </AnimatedSection>

            <footer className="text-center py-10 mt-20 border-t border-cyan-300/20 text-slate-600 text-sm">
                <p>Alex Ivanov &copy; {new Date().getFullYear()}. All systems operational.</p>
            </footer>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
