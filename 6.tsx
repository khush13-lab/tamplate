"use client";

import React, { FC } from 'react';

// --- SVG Icon Components ---
const FaLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
);
const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const FaGithub: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const FaInstagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37.2-1.7-148.6-1.7-185.8 0-35.9 1.7-67.7 9.9-93.9 36.1s-34.4 58-36.2 93.9c-1.7 37.2-1.7 148.6 0 185.8 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37.2 1.7 148.6 1.7 185.8 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 1.7-37.2 1.7-148.6 0-185.8zM333 389c-18.7 18.7-41.4 24.6-70.9 26.2-30.8 1.8-115.1 1.8-145.9 0-29.5-1.7-52.2-7.5-70.9-26.2-18.7-18.7-24.6-41.4-26.2-70.9-1.8-30.8-1.8-115.1 0-145.9 1.7-29.5 7.5-52.2 26.2-70.9 18.7-18.7 41.4-24.6 70.9-26.2 30.8-1.8 115.1-1.8 145.9 0 29.5 1.7 52.2 7.5 70.9 26.2 18.7 18.7 24.6 41.4 26.2 70.9 1.8 30.8 1.8 115.1 0 145.9-1.6 29.5-7.5 52.2-26.2 70.9z"></path></svg>
);
const FaFacebook: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
);
const GoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.82 18.892c-1.37.76-3.03.88-4.54.34-2.2-.79-3.92-2.8-4.22-5.12-.3-2.32.99-4.53 3.03-5.54 2.04-1.01 4.43-.53 5.92.93l-1.93 1.93c-.6-.6-1.42-.87-2.22-.59-.8.28-1.39.98-1.54 1.8-.15.82.12 1.66.72 2.26s1.44.87 2.26.72c.82-.15 1.52-.74 1.8-1.54l1.93 1.93c-.47 1.49-1.81 2.6-3.23 2.78z" fill="#00ADD8"></path><path d="M15.75 5.5h-7.5v2h5.5v1h-5.5v2h5.5v1h-5.5v2h7.5v-8z" fill="#00ADD8"></path></svg>
);
const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-4v-2h2v-2h-2v-2h4V8h-6v8h6v2zm-6-6H8V8h2v2z" fill="#3776AB"></path></svg>
);
const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.2 21.018c-3.1.2-5.9-.4-8.2-1.8.4.5.8.9 1.2 1.2 2.3 2 5.1 3.2 8.2 3.5 3.3.3 6.5-.4 9.2-2.1-.5-.3-1-.6-1.4-1-2.4-1.7-4.1-4.2-4.9-7l-1.1 1.1c-.7.7-1.7 1.1-2.7 1.1s-2-.4-2.7-1.1c-.7-.7-1.1-1.7-1.1-2.7 0-1 .4-2 1.1-2.7l4.8-4.8c.7-.7 1.7-1.1 2.7-1.1 1 0 2 .4 2.7 1.1.7.7 1.1 1.7 1.1 2.7s-.4 2-1.1 2.7l-2.4 2.4c1.2 2.1 3 3.7 5.2 4.7z" fill="#FF9900"></path><path d="M18.8 3.818c.5-.1 1-.2 1.5-.2 2.3 0 4.4.9 6 2.3-.3-.4-.7-.8-1-1.2-2.3-2-5.1-3.2-8.2-3.5-3.3-.3-6.5.4-9.2 2.1.5.3 1 .6 1.4 1 2.4 1.7 4.1 4.2 4.9 7l1.1-1.1c.7-.7 1.7-1.1 2.7-1.1s2 .4 2.7 1.1c.7.7 1.1 1.7 1.1 2.7s-.4 2-1.1 2.7l-4.8 4.8c-.7.7-1.7 1.1-2.7 1.1-1 0-2-.4-2.7-1.1-.7-.7-1.1-1.7-1.1-2.7s.4-2 1.1-2.7l2.4-2.4c-1.2-2.1-3-3.7-5.2-4.7z" fill="#232F3E"></path></svg>
);
const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm6.5 8.5L12 14l-6.5-3.5V7L12 3.5 18.5 7v3.5zM11 15.1v3.8l-5.5-2.7V12l5.5 3.1zm2 0l5.5-3.1v-4.2L13 11v4.1z" fill="#326CE5"></path></svg>
);

interface Skill {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const skills: Skill[] = [
    { name: "Go", icon: GoIcon },
    { name: "Python", icon: PythonIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Kubernetes", icon: KubernetesIcon },
];

const Portfolio: FC = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
      <div className="bg-slate-50 text-slate-800 font-sans">
        <div className="container mx-auto px-6">
          <header className="py-6 flex justify-between items-center border-b border-slate-200">
            <div className="text-2xl font-bold text-blue-700 tracking-tight">James Harrison</div>
            <a href="#contact" className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-px">
              Contact
            </a>
          </header>

          <main>
            <section className="py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">Senior Software Engineer</h1>
                <p className="mt-6 text-xl text-slate-600">
                  Specializing in scalable backend systems, cloud infrastructure, and enterprise-level software architecture.
                </p>
                <div className="mt-8 flex gap-5">
                  <a href="#" className="text-slate-500 hover:text-blue-700 transition-colors"><FaLinkedin className="w-8 h-8" /></a>
                  <a href="#" className="text-slate-500 hover:text-blue-700 transition-colors"><FaGithub className="w-8 h-8" /></a>
                  <a href="#" className="text-slate-500 hover:text-blue-700 transition-colors"><FaInstagram className="w-8 h-8" /></a>
                  <a href="#" className="text-slate-500 hover:text-blue-700 transition-colors"><FaFacebook className="w-8 h-8" /></a>
                  <a href="#contact" className="text-slate-500 hover:text-blue-700 transition-colors"><EnvelopeIcon className="w-8 h-8" /></a>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                  <img src="https://placehold.co/400x400/e2e8f0/475569?text=JH" alt="James Harrison" className="rounded-full shadow-2xl w-80 h-80 object-cover" />
              </div>
            </section>

            <section id="experience" className="py-20 bg-white rounded-2xl shadow-sm px-8 my-16">
              <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Professional Experience</h2>
              <div className="max-w-3xl mx-auto relative">
                  <div className="absolute left-4 top-4 h-full w-0.5 bg-slate-200"></div>
                  <div className="space-y-16">
                      <div className="relative pl-12">
                          <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center ring-8 ring-white">
                              <BriefcaseIcon className="w-4 h-4"/>
                          </div>
                          <h3 className="text-2xl font-bold">Lead Engineer, TechCorp</h3>
                          <p className="text-slate-500 font-medium">2020 - Present</p>
                          <p className="mt-2 text-slate-600">Architected and led the development of a multi-tenant SaaS platform, improving system performance by 30% and reducing infrastructure costs by 20% through strategic cloud optimizations.</p>
                      </div>
                       <div className="relative pl-12">
                          <div className="absolute left-0 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center ring-8 ring-white">
                               <BriefcaseIcon className="w-4 h-4"/>
                          </div>
                          <h3 className="text-2xl font-bold">Senior Developer, Data Solutions</h3>
                          <p className="text-slate-500 font-medium">2017 - 2020</p>
                          <p className="mt-2 text-slate-600">Developed high-throughput data ingestion pipelines using Kafka and Python. Optimized complex database queries, which decreased report generation time by over 50%.</p>
                      </div>
                  </div>
              </div>
            </section>

            <section id="skills" className="py-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Core Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {skills.map(skill => (
                  <div key={skill.name} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-slate-300 transition-all duration-300">
                    <skill.icon className="h-16 w-16 mb-4" />
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="py-20 my-16 text-center">
              <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                I am currently available for new opportunities. Please feel free to contact me for consulting or full-time roles.
              </p>
              <a href="mailto:james.harrison@pro-email.com" className="mt-8 inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-300">
                james.harrison@pro-email.com
              </a>
            </section>
          </main>
          
          <footer className="text-center py-8 border-t border-slate-200 text-slate-500">
            <p>&copy; {new Date().getFullYear()} James Harrison. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Portfolio;

