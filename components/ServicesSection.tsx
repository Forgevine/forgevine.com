interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Smart Contract Development',
    description:
      'Contracts written to be read, reviewed, and handed over. DeFi, NFTs, DAOs, and the unpleasant edge cases in between.',
  },
  {
    title: 'dApp Development',
    description:
      'Full-stack decentralized apps with interfaces people can use without a tutorial. Wired end to end and shipped quietly.',
  },
  {
    title: 'Web3 Consulting',
    description:
      'Architecture, tokenomics, and protocol design reviewed by people who have shipped it. Straight answers, no theatre.',
  },
  {
    title: 'Blockchain Infrastructure',
    description:
      'Nodes, indexers, APIs, and tooling that stay up. Built to be run by your team after we leave.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#5FA89D]">
            Services
          </p>
          <h2 className="mb-4 bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            What we do
          </h2>
          <p className="text-lg text-slate-300">
            A narrow surface, done properly. If it is not on this list, we will
            tell you who to talk to instead.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-slate-800/50 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3E8B82]/50 hover:shadow-lg hover:shadow-[#3E8B82]/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3E8B82]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#3E8B82]">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-8 bg-slate-700 transition-colors duration-300 group-hover:bg-[#3E8B82]"></span>
                </div>
                <h3 className="mb-3 mt-6 text-xl font-semibold text-slate-100 transition-colors group-hover:text-[#5FA89D]">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-gradient-to-br from-[#3E8B82]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
