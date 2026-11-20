'use client';

const disclosures = [
  { label: 'Public case studies', value: 'None', note: 'by design' },
  { label: 'Client names', value: 'Under NDA', note: '' },
  { label: 'References', value: 'On request', note: 'privately' },
  { label: 'Work in progress', value: 'Redacted', note: 'see status' },
];

export function AboutSection() {
  return (
    <section id="how-we-work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left side - Content */}
          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5FA89D]">
              Work in the shadow
            </p>
            <h2 className="bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Quiet by default.
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                We don&apos;t chase logos or turn clients into case studies. The work
                is the marketing.
              </p>
              <p>
                Forgevine plugs into your team as a quiet extension of it —
                white-label delivery, NDA from the first call, and no public
                footprint until you decide to launch. You take the credit for what
                ships. We take the edge cases, the maintenance, and the pager.
              </p>
              <p className="font-medium text-[#5FA89D]">
                When the work is ready for the light, it&apos;s yours to announce.
                Until then, we stay in the background.
              </p>
            </div>
            <p className="font-mono text-sm text-slate-500">
              That is why there is no portfolio on this page. There is nothing
              we are allowed to show.
            </p>
          </div>

          {/* Right side - Disclosure ledger */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-800/60 bg-slate-900/50 p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  Disclosure ledger
                </span>
                <span className="font-mono text-[11px] text-[#5FA89D]">
                  forgevine.com
                </span>
              </div>

              <ul className="divide-y divide-slate-800/60">
                {disclosures.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <span className="flex items-baseline gap-2 font-mono text-sm text-slate-200">
                      {item.value}
                      {item.note && (
                        <span className="text-[11px] text-slate-500">
                          {item.note}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-lg border border-[#3E8B82]/30 bg-[#3E8B82]/10 p-4 text-sm text-[#7FC5B8]">
                Want references? We share them privately under NDA — not on a page.
              </p>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#3E8B82]/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-[#5FA89D]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
