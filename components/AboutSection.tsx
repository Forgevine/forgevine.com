'use client';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-transparent">
              Why ForgeVine?
            </h2>
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                At ForgeVine, we forge the critical infrastructure for the decentralized future. 
                Like a vine, our projects are interconnected, sharing strength and resources to 
                grow in new directions.
              </p>
              <p>
                We are dedicated to creating foundational Web3 technologies, weaving individual 
                projects into a powerful, unified network. Each solution we build strengthens 
                the entire ecosystem.
              </p>
              <p className="text-[#5FA89D] font-medium">
                Our expertise spans the full spectrum of Web3 development, from smart contract 
                architecture to user-facing dApps, ensuring your project is built on solid foundations.
              </p>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
              {/* Animated vine pattern */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#3E8B82] animate-pulse"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#3E8B82] to-transparent"></div>
                  <div className="text-sm text-slate-400 font-mono">Infrastructure</div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="w-3 h-3 rounded-full bg-[#5FA89D] animate-pulse delay-300"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#5FA89D] to-transparent"></div>
                  <div className="text-sm text-slate-400 font-mono">Smart Contracts</div>
                </div>
                <div className="flex items-center gap-3 ml-8">
                  <div className="w-3 h-3 rounded-full bg-[#7FC5B8] animate-pulse delay-700"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#7FC5B8] to-transparent"></div>
                  <div className="text-sm text-slate-400 font-mono">dApps</div>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 rounded-full bg-[#3E8B82] animate-pulse delay-1000"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#3E8B82] to-transparent"></div>
                  <div className="text-sm text-slate-400 font-mono">Consulting</div>
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <path
                  d="M 24 40 Q 40 60, 56 80 Q 72 100, 88 120 Q 104 140, 120 160"
                  stroke="url(#vineGradient)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="vineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3E8B82" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#5FA89D" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#7FC5B8" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3E8B82]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#5FA89D]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

