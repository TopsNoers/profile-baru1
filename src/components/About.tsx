'use client';

import { useEffect, useState } from 'react';

const skills = [
  {
    title: 'Backend Developer',
    description: 'I have been working as a backend developer for 3 year. I have experience in building Rest API and Backend.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Full Stack Developer',
    description: 'I have been working as a full stack developer for 1 year. I have experience in building Rest API and Frontend.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },

];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-12 sm:py-20 bg-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I work as a full-time and freelance web developer. I have been working as a full stack developer for 3 year.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12">
          {/* Skills */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-4 sm:p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                    <div className="text-primary">{skill.icon}</div>
                    <h4 className="text-base sm:text-lg font-medium">{skill.title}</h4>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 