"use client";

import React, { FC, useEffect, useRef, useState } from 'react';

// --- SVG Icon Components ---
const FaGithub: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z"/></svg>
);
const FaLinkedin: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
);
const BrainCircuitIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.4a2.5 2.5 0 0 0 5 0v-.4A2.5 2.5 0 0 0 12 2zM12 21.5a2.5 2.5 0 0 0 2.5-2.5v-.4a2.5 2.5 0 0 0-5 0v.4a2.5 2.5 0 0 0 2.5 2.5zM3.5 12a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5h.4a2.5 2.5 0 0 0 0-5h-.4zM20.5 12a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5h.4a2.5 2.5 0 0 0 0-5h-.4zM6.5 5.5a2.5 2.5 0 0 0 0 5h.4a2.5 2.5 0 0 0 2.5-2.5v-.4a2.5 2.5 0 0 0-2.5-2.5h-.4zM17.5 5.5a2.5 2.5 0 0 0 0 5h.4a2.5 2.5 0 0 0 2.5-2.5v-.4a2.5 2.5 0 0 0-2.5-2.5h-.4zM12 9.5a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5h0a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5z"/></svg>
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
            className={`py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </section>
    );
};

const NeuralNetworkCanvas: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: any[] = [];
        const particleCount = window.innerWidth > 768 ? 80 : 40;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: 1.5 + Math.random() * 1.5
            });
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(128, 222, 234, 0.7)';
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(128, 222, 234, ${1 - dist / 120})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            const mouseDist = Math.hypot(particles[0].x - mouse.current.x, particles[0].y - mouse.current.y);
            if (mouseDist < 200 && mouse.current.x > 0) {
                 ctx.beginPath();
                 ctx.moveTo(particles[0].x, particles[0].y);
                 ctx.lineTo(mouse.current.x, mouse.current.y);
                 ctx.strokeStyle = `rgba(224, 190, 255, ${1 - mouseDist / 200})`;
                 ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};


// --- Main Page Component ---
const Portfolio: FC = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #020617;
            color: #e2e8f0;
        }
        
        .card-glow {
            background: rgba(15, 23, 42, 0.5);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(128, 222, 234, 0.2);
            position: relative;
            transition: all 0.3s ease;
        }
        .card-glow:hover {
            border: 1px solid rgba(128, 222, 234, 0.4);
            box-shadow: 0 0 20px rgba(128, 222, 234, 0.1);
        }
      `}</style>
      <div className="min-h-screen relative">
        <NeuralNetworkCanvas />

        <header className="fixed top-0 w-full z-50 transition-colors duration-300">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center bg-slate-950/30 backdrop-blur-sm border-b border-cyan-300/10">
                <a href="#" className="text-2xl font-bold text-cyan-300">E. Vance</a>
                <nav className="hidden md:flex gap-8">
                    <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors">About</a>
                    <a href="#skills" className="text-slate-400 hover:text-cyan-300 transition-colors">Skills</a>
                    <a href="#projects" className="text-slate-400 hover:text-cyan-300 transition-colors">Projects</a>
                </nav>
            </div>
        </header>

        <main className="container mx-auto px-6 relative z-10">
            <section className="min-h-screen flex flex-col items-center justify-center text-center">
                <div className="w-48 h-48 rounded-full mb-8 flex items-center justify-center card-glow">
                    <BrainCircuitIcon className="w-24 h-24 text-cyan-300" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
                    Evelyn Vance
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-slate-300">Neural Architect & AI Developer</p>
                <p className="mt-6 max-w-2xl mx-auto text-slate-400">
                    Designing intelligent systems and scalable machine learning models that solve complex, real-world problems.
                </p>
                <div className="mt-10 flex justify-center gap-6 text-2xl text-slate-500">
                    <a href="#" className="hover:text-cyan-300 transition-colors"><FaGithub /></a>
                    <a href="#" className="hover:text-cyan-300 transition-colors"><FaLinkedin /></a>
                </div>
            </section>
            
            <AnimatedSection id="about">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="max-w-4xl mx-auto card-glow rounded-2xl p-8">
                    <p className="text-lg leading-relaxed text-slate-300">
                        I am an AI engineer driven by the challenge of creating systems that learn and adapt. My work focuses on deep learning, natural language processing, and building the infrastructure to support large-scale AI applications. I believe in a first-principles approach, combining theoretical knowledge with hands-on engineering to build robust and efficient models. My goal is to contribute to technology that augments human capability in meaningful ways.
                    </p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection id="skills">
                <h2 className="text-4xl font-bold text-center mb-12">Technical Proficiencies</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="card-glow p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Languages & Frameworks</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>Python (PyTorch, TensorFlow)</li>
                            <li>Go</li>
                            <li>Rust</li>
                            <li>C++</li>
                        </ul>
                    </div>
                     <div className="card-glow p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">ML/AI Concepts</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>Transformer Architectures</li>
                            <li>Reinforcement Learning</li>
                            <li>Computer Vision (CNNs)</li>
                            <li>Distributed Training</li>
                        </ul>
                    </div>
                     <div className="card-glow p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Infrastructure & DevOps</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>Kubernetes & Kubeflow</li>
                            <li>AWS (S3, EC2, SageMaker)</li>
                            <li>Docker</li>
                            <li>CI/CD for ML (MLOps)</li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="projects">
                <h2 className="text-4xl font-bold text-center mb-12">Featured Research & Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-glow rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-cyan-300">Project Synapse</h3>
                        <p className="mt-2 text-slate-400">A novel neural network architecture for few-shot learning, reducing training data requirements by 80%.</p>
                    </div>
                    <div className="card-glow rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-cyan-300">Generative Text Engine</h3>
                        <p className="mt-2 text-slate-400">Fine-tuned a large language model on specialized datasets for high-fidelity code generation and documentation.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="contact" className="text-center">
                <h2 className="text-4xl font-bold">Connect</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-slate-400">
                    I'm interested in collaborating on ambitious AI projects. If you're building something innovative, let's talk.
                </p>
                <a href="mailto:e.vance.ai@email.com" className="mt-8 inline-block px-10 py-4 border-2 border-cyan-300 text-cyan-300 font-bold hover:bg-cyan-300 hover:text-slate-950 transition-all duration-300 rounded-lg">
                    Contact Me
                </a>
            </AnimatedSection>

            <footer className="text-center py-10 mt-20 border-t border-cyan-300/10 text-slate-600 text-sm">
                <p>Evelyn Vance &copy; {new Date().getFullYear()}. Constructing Intelligence.</p>
            </footer>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
