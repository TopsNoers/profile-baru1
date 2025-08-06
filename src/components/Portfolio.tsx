'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const portfolio = [
    {
      title: 'Sales Monitoring System',
      description: 'Sales Monitoring System is a system that allows you to monitor your sales data.',
      image: '/porto/porto1.jpg',
    },
    {
      title: 'Gothru New API',
      description: 'Gothru New API is a API that allows you to get the data of the Gothru New.',
      image: '/porto/porto2.jpg',
    },
    {
      title: 'Sistem Informasi Manajemen Sekolah',
      description: 'Sistem Informasi Manajemen Sekolah is a system that allows you to manage your school data.',
      image: '/porto/porto3.jpg',
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
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
      id="portfolio"
      className="py-20 bg-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Coming soon! I&apos;m currently working on some exciting projects that I&apos;ll be sharing here.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder cards */}
            {portfolio.map((project) => (
              <div
                key={project.title}
                className="group relative aspect-[4/3] rounded-lg bg-accent/10 border border-border overflow-hidden"
              >
                <Image src={project.image} alt={project.title} width={1000} height={1000} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-center p-6">
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground text-center bg-black/50 p-4 rounded-lg">
                      {project.description}
                    </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 