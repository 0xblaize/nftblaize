"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  name: string;
  image: string;
  link: string;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    { name: "Phoenix", image: "/phoniex.png", link: "https://0xblaize.github.io/phoenixwebsite.github.io/" },
    { name: "XT Exchange", image: "/xt-exchange.png", link: "https://www.xt.com/" },
    { name: "Paragon", image: "/paragon.png", link: "https://paragonpreview.vercel.app/" },
  ];

  // Typed ref array
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(projects.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target as HTMLAnchorElement);
          if (index === -1) return;

          setVisible((prev) => {
            const newState = [...prev];
            newState[index] = entry.isIntersecting;
            return newState;
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => {
      refs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el: HTMLAnchorElement | null) => {
              refs.current[index] = el; // Type-safe assignment
            }}
            className={`w-full max-w-[300px] flex flex-col items-center cursor-pointer transition-all duration-700 ease-in-out transform ${
              visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } hover:scale-105`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-xl shadow-xl mb-4"
            />
            <h2
              className={`text-xl transition-all duration-700 ease-in-out transform ${
                visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {project.name}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
}
