import Link from 'next/link';

const links = [
  { label: 'Portfolio', note: 'Selected work and experience', href: '/' },
  { label: 'LinkedIn', note: 'Professional profile', href: 'https://linkedin.com/in/samuel-faulkner-739698166' },
  { label: 'Email me', note: 'samfaulkner681@gmail.com', href: 'mailto:samfaulkner681@gmail.com' },
  { label: 'Download CV', note: 'Resume and qualifications', href: '/resume.pdf' },
];

export default function LinksPage() {
  return (
    <main className="card-page">
      <div className="card-glow" aria-hidden="true" />
      <section className="digital-card" aria-labelledby="card-title">
        <Link className="card-back" href="/">← Portfolio</Link>
        <div className="card-mark" aria-hidden="true">SF</div>
        <p className="card-kicker">BUSINESS INTELLIGENCE · DATA ANALYTICS</p>
        <h1 id="card-title">Samuel Faulkner</h1>
        <p className="card-intro">I build trustworthy data systems that turn complex operations into clear decisions.</p>
        <div className="card-links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="card-link" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>{link.label}</span><small>{link.note}</small><b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
        <p className="card-footer">SHANNON HILLS, ARKANSAS <span>·</span> AVAILABLE FOR CONVERSATION</p>
      </section>
    </main>
  );
}
