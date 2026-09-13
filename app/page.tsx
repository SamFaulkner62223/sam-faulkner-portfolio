'use client';

import { useEffect, useState } from 'react';

const systems = [
  { id:'CV-01', label:'CURRENT ROLE', title:'Data Analyst · Arkansas Department of Agriculture', health:97, status:'ACTIVE', problem:'Enterprise programs need dependable reporting, shared definitions, and clearer paths from operational data to leadership decisions.', process:'Requirements → SQL and Python workflows → metadata and governance → Power BI reporting.', result:'Supporting enterprise reporting, data quality, workflow automation, modernization, and responsible AI adoption.' },
  { id:'CV-02', label:'BI EXPERIENCE', title:'Operational analytics across complex organizations', health:94, status:'VERIFIED', problem:'Rental, sales, logistics, and inventory teams need usable measures across fragmented operational systems.', process:'Business analysis → data extraction → semantic models → dashboards and executive reporting.', result:'Experience spanning Riggs Rents, WESCO International, Northwest Center, and Mighty AI.' },
  { id:'CV-03', label:'AI + DATA BUILD', title:'Governed AI and analytics systems', health:92, status:'VALIDATED', problem:'AI prototypes need trustworthy data, explicit limits, traceable evidence, and independent testing.', process:'Validate data → constrain claims → test interfaces → preserve evidence and decision lineage.', result:'Built healthcare analytics, MIRA governance, and independently tested AI-assisted web prototypes.' },
];

const code = [
  { kind:'header', text:'CAREER / CURRENT ROLE' },
  { kind:'code', text:'role = DataAnalyst(state_government)' },
  { kind:'code', text:'deliver(SQL, Python, PowerBI)' },
  { kind:'code', text:'govern(metadata, quality, access)' },
  { kind:'code', text:'translate(operations -> decisions)' },
  { kind:'header', text:'EXPERIENCE / BUSINESS INTELLIGENCE' },
  { kind:'code', text:'analyze(rental, sales, logistics)' },
  { kind:'code', text:'model(KPI, utilization, lifecycle)' },
  { kind:'code', text:'automate(reporting_workflows)' },
  { kind:'code', text:'communicate(findings, leadership)' },
  { kind:'header', text:'BUILD / AI + DATA SYSTEMS' },
  { kind:'code', text:'validate(data_before_ai)' },
  { kind:'code', text:'enforce(evidence, guardrails)' },
  { kind:'code', text:'test(interface, state, lifecycle)' },
  { kind:'code', text:'publish(public_safe_claims)' },
];

export default function Home() {
  const [active,setActive] = useState(0);
  const [clock,setClock] = useState('00:00:00');
  const item = systems[active];
  useEffect(() => {
    const tick=()=>setClock(new Date().toLocaleTimeString('en-US',{hour12:false}));
    tick(); const timer=window.setInterval(tick,1000); return()=>window.clearInterval(timer);
  },[]);
  return (
    <main className="soc">
      <header>
        <div className="brand"><b>SF</b><span>CV / EXPERIENCE MATRIX</span></div>
        <div className="global-state"><i /> PROFILE ONLINE</div>
        <time>{clock} / LOCAL</time>
      </header>
      <aside className="code-feed" aria-label="Decorative pseudocode feed">
        <div className="panel-title"><span>01</span> EXECUTION STREAM <b>LIVE</b></div>
        <div className="code-window">
          <div className="code-scroll">{[...code,...code,...code].map((line,i)=><p className={line.kind} key={i}><em>{String(i+1).padStart(2,'0')}</em><code>{line.text}</code></p>)}</div>
        </div>
        <div className="hex-grid" aria-hidden="true">{['A4','19','F2','8B','D0','77','3E','C1','09','EE','41','6A'].map((h,i)=><span key={i}>{h}</span>)}</div>
      </aside>
      <section className="network">
        <div className="panel-title"><span>02</span> CAREER TOPOLOGY <b>ACTIVE</b></div>
        <svg viewBox="0 0 720 500" role="img" aria-label="Animated systems network connecting evidence to decisions">
          <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <g className="circuit-lines"><path d="M38 90H180V180H330V95H502V170H684"/><path d="M38 410H145V310H274V388H447V288H684"/><path d="M180 180V310M330 95V388M502 170V288"/><path d="M274 310H502"/></g>
          <g className="packets"><circle cx="38" cy="90" r="4"><animateMotion dur="4s" repeatCount="indefinite" path="M0 0H142V90H292V5H464V80H646"/></circle><circle cx="38" cy="410" r="4"><animateMotion dur="5s" repeatCount="indefinite" path="M0 0H107V-100H236V-22H409V-122H646"/></circle></g>
          {[
            ['ROLE',0,38,90],['DELIVER',0,180,180],['ANALYZE',1,330,95],
            ['MODEL',1,330,388],['BUILD',2,502,170],['GOVERN',2,502,288],
          ].map(([label,index,x,y]) => (
            <foreignObject key={String(label)} x={Number(x)-32} y={Number(y)-32} width="64" height="64" className="svg-node-wrap">
              <button type="button" className={`svg-node ${active===index?'active':''}`} onClick={()=>setActive(Number(index))} aria-label={`Open ${systems[Number(index)].label} through ${label} node`}>{label}</button>
            </foreignObject>
          ))}
        </svg>
        <div className="telemetry">
          <div><span>CAREER ARC</span><b>15+</b><small>YEARS EXPERIENCE</small></div>
          <div><span>PRIMARY STACK</span><b>BI+AI</b><small>DATA SYSTEMS</small></div>
          <div><span>EVIDENCE</span><b>PPP</b><small>PUBLIC-SAFE</small></div>
        </div>
      </section>
      <section className="case-view">
        <div className="panel-title"><span>03</span> ACTIVE CASE <b>{item.id}</b></div>
        <div className="case-heading"><div><small>{item.label}</small><h1>{item.title}</h1></div><div className="health"><b>{item.health}</b><span>HEALTH</span></div></div>
        <dl>
          <div><dt>FAULT</dt><dd>{item.problem}</dd></div>
          <div><dt>LOGIC</dt><dd>{item.process}</dd></div>
          <div><dt>OUTPUT</dt><dd>{item.result}</dd></div>
        </dl>
        <button className="open-case">VIEW EXPERIENCE <span>[ ENTER ]</span></button>
      </section>
      <nav className="system-switcher" aria-label="Select case">
        {systems.map((system,index)=><button key={system.id} className={active===index?'active':''} onClick={()=>setActive(index)} aria-pressed={active===index}><i /><span>{system.id}</span><strong>{system.label}</strong><small>{system.status}</small></button>)}
      </nav>
      <footer><span>SAMUEL LOY FAULKNER</span><span>BUSINESS INTELLIGENCE · DATA ENGINEERING · GOVERNED AI</span><a href="/links">DIGITAL CARD ↗</a><a href="https://linkedin.com/in/samuel-faulkner-739698166">LINKEDIN ↗</a></footer>
    </main>
  );
}
