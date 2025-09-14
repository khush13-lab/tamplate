"use client";

import React, { FC } from 'react';

// --- SVG Icon Components with TypeScript Types ---
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" {...props}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7 72.1 25.5 21.3-5.9 44.2-8.8 67.1-8.8 22.9 0 45.9 2.9 67.1 8.8 50.2-32.4 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.7 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
);
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);


const HomePage: FC = () => {
  return (
    <main className="bg-[#111827] text-white min-h-screen font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-[#111827]/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700/30">
        <h1 className="text-2xl font-extrabold text-purple-400 cursor-pointer hover:text-purple-300 transition">
          MyPortfolio
        </h1>
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Services", "Experience", "Projects", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="hover:text-purple-400 cursor-pointer transition text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-md hover:shadow-purple-500/30 transition">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        <div>
          <p className="uppercase text-purple-400 font-semibold tracking-widest mb-2">
            Welcome to my world ✨
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-snug">
            Hi, I'm <span className="text-purple-400 transition">Your Name</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-3 text-gray-300">
            Full Stack <span className="text-purple-300">Developer</span>
          </h3>
          <p className="text-gray-400 mt-6 max-w-lg">
            Passionate about building intuitive and visually appealing digital experiences.
            I create scalable apps and seamless designs that meet user expectations.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-md hover:shadow-purple-500/30 transition">
              My Projects
            </button>
          </div>

          <div className="flex gap-5 mt-8 text-2xl text-gray-400">
            <a href="#" aria-label="GitHub Profile" className="hover:text-purple-400 cursor-pointer transition">
                <GithubIcon />
            </a>
            <a href="#" aria-label="LinkedIn Profile" className="hover:text-purple-400 cursor-pointer transition">
                <LinkedinIcon />
            </a>
            <a href="#" aria-label="Twitter Profile" className="hover:text-purple-400 cursor-pointer transition">
                <TwitterIcon />
            </a>
            <a href="#" aria-label="Facebook Profile" className="hover:text-purple-400 cursor-pointer transition">
                <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Avatar / Photo */}
        <div className="mt-10 md:mt-0 relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
            <img
              src="https://placehold.co/384x384/111827/c084fc?text=Dev"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-10 md:px-20 py-20 bg-[#1f2937]/30 border-t border-gray-700/20">
        <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">
          About Me
        </h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed mx-auto text-center">
          I am a dedicated software engineer with a passion for problem-solving and
          crafting innovative digital experiences. My skills include web & app development,
          UI/UX design, and backend engineering. With every project, I aim to deliver
          creative and scalable solutions that enhance user engagement.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-10 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Building responsive and scalable websites tailored to your needs." },
            { title: "App Development", desc: "Crafting seamless mobile app experiences with great UI/UX." },
            { title: "UI/UX Design", desc: "Designing creative and user-focused interfaces." }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1f2937] p-8 rounded-xl shadow-md hover:shadow-purple-500/20 hover:scale-105 transition border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-10 md:px-20 py-20 bg-[#1f2937]/30 border-t border-gray-700/20">
        <h2 className="text-4xl font-bold text-purple-400 mb-12 text-center">
            My Experience
        </h2>
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700"></div>
            {[
                {
                    role: "Senior Full Stack Developer",
                    company: "Tech Solutions Inc.",
                    date: "2021 - Present",
                    desc: "Leading development on key projects, architecting scalable backend systems and mentoring junior developers."
                },
                {
                    role: "Mid-Level Developer",
                    company: "Innovate Co.",
                    date: "2018 - 2021",
                    desc: "Worked on both frontend and backend parts of a large-scale SaaS platform, improving performance and adding new features."
                },
                {
                    role: "Junior Developer",
                    company: "WebCrafters",
                    date: "2016 - 2018",
                    desc: "Assisted in building and maintaining client websites, primarily focusing on frontend tasks and CMS integrations."
                }
            ].map((job, idx) => (
                <div key={idx} className="relative pl-12 pb-8">
                    <div className="absolute left-0.5 top-1 w-7 h-7 bg-[#111827] border-2 border-purple-500 rounded-full flex items-center justify-center">
                        <BriefcaseIcon className="text-purple-400" height="14" width="14"/>
                    </div>
                    <p className="text-sm font-medium text-gray-500">{job.date}</p>
                    <h3 className="text-xl font-bold text-purple-300 mt-1">{job.role}</h3>
                    <h4 className="font-semibold text-gray-400">{job.company}</h4>
                    <p className="mt-2 text-gray-400">{job.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-700/20 bg-[#111827]">
        <p className="text-gray-400">© {new Date().getFullYear()} Your Name. Built with Next.js 💜</p>
      </footer>
    </main>
  );
};

export default HomePage;

