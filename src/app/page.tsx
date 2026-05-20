export default function Home() {
  const executionHighlights = [
    "Designed and executed intervention programs including hydraulic fractures and chemical stimulations that sustained production uplift above 1000 BOPD across annual operations.",
    "Implemented machine learning proxy models to accelerate history matching and increase the number of technically screened development scenarios per planning cycle.",
    "Delivered integrated engineering and economic evaluations for subsurface and business development opportunities to support capital allocation decisions.",
  ];

  const coreCapabilities = [
    "reservoir simulation (CMG, Intersect/Petrel RE)",
    "field development planning",
    "production forecasting and optimization",
    "reservoir characterization and surveillance",
    "planning and economics",
    "pressure transient analysis",
    "machine learning and proxy modeling",
    "SQL-based engineering data management",
    "multidisciplinary technical leadership",
    "bilingual communication (English/Spanish)",
  ];

  const careerJourney = [
    {
      period: "2025 - Present",
      role: "Senior Reservoir Engineering Specialist",
      company: "Parex Resources",
      location: "Calgary, Alberta, Canada",
      impact:
        "Leads high-stakes reservoir decisions, production optimization strategies, and reserve growth initiatives.",
    },
    {
      period: "2024 - 2025",
      role: "Senior Reservoir Engineer",
      company: "Parex Resources",
      location: "Bogota and Calgary",
      impact:
        "Drove integrated development scenarios and economic evaluations for business-critical subsurface opportunities.",
    },
    {
      period: "2022 - 2024",
      role: "Reservoir Engineer",
      company: "Parex Resources",
      location: "Calgary, Alberta, Canada",
      impact:
        "Applied machine learning proxy models to accelerate history matching and improve simulation turnaround time.",
    },
    {
      period: "2018 - 2022",
      role: "Reservoir Engineer",
      company: "Parex Resources",
      location: "Bogota, Colombia",
      impact:
        "Designed stimulation interventions and delivered more than 1000 BOPD average production uplift through workovers.",
    },
    {
      period: "2013 - 2018",
      role: "Jr Production Engineer",
      company: "Parex Resources",
      location: "Casanare and Bogota, Colombia",
      impact:
        "Built an operational foundation across field performance monitoring, SQL-backed reporting, and team leadership.",
    },
  ];

  const portfolioLinks = [
    {
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/emiliano-gonzalez-rodriguez",
      note: "Full public profile, endorsements, and career timeline.",
    },
    {
      label: "Professional Profile PDF",
      href: "/Emiliano_Gonzalez_Profile.pdf",
      note: "Downloadable profile dossier with experience and education details.",
    },
    {
      label: "Direct Contact",
      href: "mailto:emilianogonzalez92@gmail.com",
      note: "Request project-specific case studies and collaboration opportunities.",
    },
  ];

  return (
    <div className="relative isolate overflow-x-clip pb-16">
      <div className="ambient-bg" aria-hidden="true" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pt-8 sm:px-10 lg:px-12">
        <header className="reveal panel flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Personal Website
            </p>
            <h1 className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--ink)]">
              Emiliano Gonzalez
            </h1>
          </div>
          <a
            className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
            href="tel:+14039664552"
          >
            +1 403 966 4552
          </a>
        </header>

        <section className="reveal grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="panel space-y-6 px-8 py-10">
            <p className="inline-flex rounded-full border border-[var(--line)] bg-[var(--tint)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">
              Senior Reservoir Engineering Specialist
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Enterprise discipline.
              <span className="block hero-glow">Edgy execution.</span>
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
              Senior Reservoir Engineer with more than a decade of experience
              in reservoir and production engineering, strengthened by a
              Master&apos;s degree in Big Data and Visual Analytics. I build
              strategy where physics, economics, and data science align to
              accelerate production and expand reserves.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="cta cta-primary"
                href="https://www.linkedin.com/in/emiliano-gonzalez-rodriguez"
                target="_blank"
                rel="noreferrer"
              >
                Open LinkedIn
              </a>
              <a className="cta cta-secondary" href="/Emiliano_Gonzalez_Profile.pdf">
                View Profile PDF
              </a>
              <a className="cta cta-ghost" href="mailto:emilianogonzalez92@gmail.com">
                Contact Me
              </a>
            </div>
          </article>

          <aside className="panel grid gap-4 px-6 py-7">
            <article className="metric-card reveal" style={{ animationDelay: "80ms" }}>
              <p className="metric-value">12+</p>
              <p className="metric-label">
                Years at Parex Resources, with consistent execution in
                reservoir and production engineering across simulation,
                forecasting, and field optimization.
              </p>
            </article>
            <article className="metric-card reveal" style={{ animationDelay: "140ms" }}>
              <p className="metric-value">strength</p>
              <p className="metric-label">
                International experience in both Canada and Colombia,
                delivering technical decisions in multidisciplinary teams
                under different operational and business environments.
              </p>
            </article>
          </aside>
        </section>

        <section className="reveal grid gap-6 lg:grid-cols-2">
          <article className="panel space-y-4 px-7 py-8">
            <h3 className="section-title">About Me</h3>
            <p className="body-copy">
              I specialize in reservoir simulation, development planning,
              production forecasting, and integrated economics. My background
              combines classical petroleum engineering with modern analytics,
              allowing me to make confident technical decisions in complex,
              multidisciplinary environments.
            </p>
            <p className="body-copy">
              Core strengths include CMG and Intersect simulation workflows,
              subsurface opportunity screening, intervention design, and
              machine learning enabled performance optimization.
            </p>
          </article>

          <article className="panel space-y-4 px-7 py-8">
            <h3 className="section-title">Education and Languages</h3>
            <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
              <li>
                Master&apos;s Degree, Big Data and Visual Analytics, UNIR
                (2019-2022)
              </li>
              <li>
                Bachelor&apos;s Degree, Petroleum Engineering, Universidad
                Surcolombiana (2009-2013)
              </li>
              <li>
                Computer Technologist, Data Management and Software
                Development, SENA (2016-2018)
              </li>
              <li>Languages: Spanish (Native), English (Full Professional)</li>
            </ul>
          </article>
        </section>

        <section className="reveal grid gap-6 lg:grid-cols-2">
          <article className="panel space-y-4 px-7 py-8">
            <h3 className="section-title">Execution Highlights</h3>
            <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
              {executionHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel space-y-4 px-7 py-8">
            <h3 className="section-title">Core Capabilities</h3>
            <div className="flex flex-wrap gap-2">
              {coreCapabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs tracking-[0.04em] text-[var(--ink)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="reveal panel px-7 py-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="section-title">Career Journey</h3>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              2013 to Present
            </p>
          </div>
          <div className="mt-8 grid gap-5">
            {careerJourney.map((item, index) => (
              <article
                key={item.period}
                className="timeline-item reveal"
                style={{ animationDelay: `${index * 90 + 120}ms` }}
              >
                <p className="timeline-period">{item.period}</p>
                <h4 className="timeline-role">{item.role}</h4>
                <p className="timeline-company">
                  {item.company} | {item.location}
                </p>
                <p className="timeline-impact">{item.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal grid gap-6 lg:grid-cols-3">
          {portfolioLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="portfolio-card reveal"
              style={{ animationDelay: `${index * 120 + 100}ms` }}
            >
              <p className="portfolio-eyebrow">Portfolio Link</p>
              <h4 className="portfolio-title">{link.label}</h4>
              <p className="portfolio-note">{link.note}</p>
              <span className="portfolio-action">Open Link</span>
            </a>
          ))}
        </section>

        <footer className="reveal mx-auto mt-2 text-center text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          Built with Next.js | Calgary x Colombia
        </footer>
      </main>
    </div>
  );
}
