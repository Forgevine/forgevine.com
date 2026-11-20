interface Engagement {
  index: string;
  label: string;
  scope: string;
  status: string;
  progress: number;
  bar: string;
  dot: string;
  pill: string;
}

const engagements: Engagement[] = [
  {
    index: '01',
    label: 'Private DeFi protocol',
    scope: 'Smart contracts · audit prep',
    status: 'Building',
    progress: 65,
    bar: 'from-[#3E8B82] to-[#5FA89D]',
    dot: 'bg-[#5FA89D]',
    pill: 'border-[#3E8B82]/40 bg-[#3E8B82]/10 text-[#7FC5B8]',
  },
  {
    index: '02',
    label: 'Unannounced L2',
    scope: 'dApp · indexer · infrastructure',
    status: 'In review',
    progress: 85,
    bar: 'from-[#5FA89D] to-[#7FC5B8]',
    dot: 'bg-[#7FC5B8]',
    pill: 'border-[#5FA89D]/40 bg-[#5FA89D]/10 text-[#A6DED4]',
  },
  {
    index: '03',
    label: 'Confidential client',
    scope: 'Architecture · discovery',
    status: 'Discovery',
    progress: 30,
    bar: 'from-[#3E8B82] to-[#3E8B82]',
    dot: 'bg-[#3E8B82]',
    pill: 'border-slate-600/60 bg-slate-800/60 text-slate-300',
  },
];

export function WorkInProgressSection() {
  return (
    <section id="status" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#5FA89D]">
            Work in progress
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-[#5FA89D] via-[#3E8B82] to-[#7FC5B8] bg-clip-text text-transparent">
              What&apos;s in the forge
            </span>
          </h2>
          <p className="text-lg text-slate-300">
            An intentionally redacted view of the shop. No client names, no chains,
            no dates — just the shape of what is moving right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engagements.map((engagement) => (
            <article
              key={engagement.index}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3E8B82]/50 hover:shadow-lg hover:shadow-[#3E8B82]/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
                  Engagement {engagement.index}
                </span>
                <span
                  className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[11px] ${engagement.pill}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${engagement.dot}`}
                    aria-hidden="true"
                  />
                  {engagement.status}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-100">
                {engagement.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{engagement.scope}</p>

              <div className="mt-6">
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span>Progress</span>
                  <span>{engagement.progress}%</span>
                </div>
                <div
                  className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800"
                  role="progressbar"
                  aria-valuenow={engagement.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${engagement.label} progress`}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${engagement.bar}`}
                    style={{ width: `${engagement.progress}%` }}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#3E8B82]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-slate-500">
          Client names, chains, and launch dates stay off this page until they are
          public. <span className="text-[#5FA89D]">That is the deal.</span>
        </p>
      </div>
    </section>
  );
}
