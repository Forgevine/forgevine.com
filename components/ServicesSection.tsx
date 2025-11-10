'use client';

import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Smart Contract Development',
    description: 'Secure, audited smart contracts built with best practices for DeFi, NFTs, DAOs, and more.',
    icon: '📜',
  },
  {
    title: 'dApp Development',
    description: 'Full-stack decentralized applications with intuitive UX and seamless Web3 integration.',
    icon: '🌐',
  },
  {
    title: 'Web3 Consulting',
    description: 'Strategic guidance on blockchain architecture, tokenomics, and decentralized system design.',
    icon: '💡',
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Robust infrastructure solutions including nodes, APIs, and custom blockchain tools.',
    icon: '⚙️',
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive Web3 solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-[#3E8B82]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3E8B82]/10 hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3E8B82]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-[#5FA89D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#3E8B82]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

