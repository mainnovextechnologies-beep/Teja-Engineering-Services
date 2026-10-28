import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Building2, CheckCircle2, ChevronDown, ClipboardCheck, Clock3, HardHat, Home, Layers3, MapPin, Menu, MessageCircle, Phone, Ruler, ShieldCheck, Star, X, Images, Warehouse, Send, Wrench } from 'lucide-react';
import siteConfig from './siteConfig';
import './styles.css';

const icons = { home: Home, ruler: Ruler, hardhat: HardHat, clipboard: ClipboardCheck, building: Building2, warehouse: Warehouse, messages: MessageCircle, layers: Layers3 };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState('');
  const [activeImage, setActiveImage] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Custom Home Design', location: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const categories = useMemo(() => ['All', ...new Set(siteConfig.projects.map(p => p.category))], []);
  const [filter, setFilter] = useState('All');
  const shownProjects = filter === 'All' ? siteConfig.projects : siteConfig.projects.filter(p => p.category === filter);
  const phoneHref = `tel:${siteConfig.phoneDigits}`;
  const waHref = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent('Hello Teja Engineering Services, I would like to enquire about your services.')}`;

  function contactAction(type) {
    if (siteConfig.demoMode) setModal(type);
    else window.open(type === 'whatsapp' ? waHref : phoneHref, type === 'whatsapp' ? '_blank' : '_self', 'noopener,noreferrer');
  }
  function submitEnquiry(e) {
    e.preventDefault();
    const message = `Hello Teja Engineering Services, I would like to enquire.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nProject location: ${form.location || 'Not provided'}\nRequirements: ${form.message}`;
    if (siteConfig.demoMode) { setFormMessage('This is a website demo. WhatsApp enquiry will be activated when the live site is approved.'); setModal('form'); return; }
    window.open(`https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setFormMessage('WhatsApp opened with your enquiry. Please press Send in WhatsApp to deliver it.');
  }

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.businessName,
    telephone: siteConfig.phoneDisplay,
    address: { '@type': 'PostalAddress', streetAddress: 'Bhakthavatsala Nagar', addressLocality: siteConfig.city, addressRegion: siteConfig.state, postalCode: siteConfig.postalCode, addressCountry: siteConfig.country },
    areaServed: { '@type': 'City', name: siteConfig.city },
    description: 'Home design, construction planning, project management and building contract services in Nellore, Andhra Pradesh.',
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {})
  };

  return <>
    <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    <header className="header">
      <a className="brand" href="#home" aria-label="Teja Engineering Services home"><span className="brand-mark"><Building2 size={23}/></span><span><strong>TEJA<span className="brand-dot">.</span></strong><small>ENGINEERING SERVICES</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{[['About','#about'],['Services','#services'],['Projects','#projects'],['Reviews','#reviews'],['Contact','#contact']].map(([label,href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setMenuOpen(false)}>Plan a project <ArrowUpRight size={16}/></a></nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid"></div><div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"></span> CIVIL ENGINEERING · NELLORE, AP</div>
          <h1>Strong ideas.<br/><em>Solid foundations.</em><br/>Spaces for life.</h1>
          <p className="hero-copy">Thoughtful home design and construction support — helping you move from the first sketch to a clearer plan for what comes next.</p>
          <div className="hero-actions"><a className="button button-gold" href="#services">Explore services <ArrowUpRight size={18}/></a><a className="text-link" href="#projects">See project gallery <ArrowDownRight size={17}/></a></div>
          <div className="hero-proof"><div className="proof-stars"><Star/><strong>{siteConfig.rating.toFixed(1)}</strong></div><div><strong>Google rating</strong><span>Based on {siteConfig.reviewCount} reviews</span></div><span className="proof-divider"></span><div><strong>Local service</strong><span>Nellore & nearby areas</span></div></div>
        </div>
        <div className="hero-visual"><div className="hero-image-wrap"><img src="/images/modern-residence-02.png" alt="Modern multi-level residential building design concept"/><div className="image-tag"><span className="tag-icon"><Ruler size={19}/></span><span><b>Plan thoughtfully.</b><small>Build with confidence.</small></span></div></div><div className="vertical-note">DESIGN · PLANNING · DELIVERY</div><div className="hero-number">01 <span>/ BUILT AROUND YOUR VISION</span></div></div>
        <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro section" id="about"><div className="section-kicker">01 / OUR APPROACH</div><div className="intro-layout"><h2>Every good build<br/>starts with a <em>better plan.</em></h2><div className="intro-text"><p>Building a home or commercial space is a major decision. Teja Engineering Services helps clients in Nellore start with clear conversations, practical planning and a considered approach to construction.</p><p>From exploring a floor plan to coordinating project requirements, the goal is simple: make the next step feel more informed and manageable.</p><a className="inline-link" href="#contact">Let's discuss your project <ArrowRight size={17}/></a></div></div><div className="value-strip"><div><span>01</span><b>Clear communication</b><p>Know the scope before moving ahead.</p></div><div><span>02</span><b>Practical planning</b><p>Keep your priorities in view.</p></div><div><span>03</span><b>Project-focused</b><p>Make decisions with purpose.</p></div><div><span>04</span><b>Local understanding</b><p>Serving Nellore and nearby areas.</p></div></div></section>

      <section className="services section" id="services"><div className="section-top"><div><div className="section-kicker">02 / WHAT WE DO</div><h2>Services built around<br/><em>your next step.</em></h2></div><p>Start with a conversation about your site, requirements and goals. We’ll help you understand the service that best fits your project.</p></div><div className="service-grid">{siteConfig.services.map((service,i)=>{const Icon=icons[service.icon]||Wrench;return <article className="service-card" key={service.title}><div className="service-card-top"><span className="service-icon"><Icon size={22}/></span><span className="service-index">0{i+1}</span></div><h3>{service.title}</h3><p>{service.text}</p><button className="circle-arrow" aria-label={`Enquire about ${service.title}`} onClick={()=>{setForm({...form,service:service.title});document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}><ArrowUpRight size={19}/></button></article>})}</div></section>

      <section className="projects section" id="projects"><div className="section-top"><div><div className="section-kicker">03 / SELECTED VISUALS</div><h2>Ideas take shape.<br/><em>See the possibilities.</em></h2></div><p>A visual collection of residential design, construction stages and structural work. Images are illustrative portfolio material; confirm project details with the business.</p></div><div className="filter-row" role="group" aria-label="Filter project images">{categories.map(c=><button className={filter===c?'filter active':'filter'} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="project-grid">{shownProjects.map((p,i)=><button className={`project-card project-${i%3}`} key={p.title} onClick={()=>setActiveImage(p)}><img src={p.image} alt={p.title} loading="lazy"/><span className="project-shade"></span><span className="project-info"><small>{p.category}</small><b>{p.title}</b><span className="project-open"><ArrowUpRight size={18}/></span></span></button>)}</div><p className="gallery-note"><Images size={15}/> Images provided for the website demo. Confirm which projects can be represented as completed work before publishing.</p></section>

      <section className="review-band" id="reviews"><div className="review-left"><div className="section-kicker">04 / CLIENT FEEDBACK</div><h2>Trust is built<br/>one project at a time.</h2><p>See the business's Google listing for current review details and customer feedback.</p><a className="button button-light" href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer">View on Google <ArrowUpRight size={17}/></a></div><div className="review-right"><div className="rating-card"><div className="rating-big">{siteConfig.rating.toFixed(1)}<span>/ 5</span></div><div className="stars" aria-label={`${siteConfig.rating} out of 5 stars`}>{Array.from({length:5},(_,i)=><Star key={i} fill={i<5?'currentColor':'none'} size={19}/>)}</div><p>Google rating</p><strong>{siteConfig.reviewCount} reviews</strong><div className="rating-rule"></div><blockquote>“{siteConfig.reviewHighlights[0]}”</blockquote><small>Review highlight supplied with the business details</small><a className="review-link" href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer">View all reviews on Google <ArrowUpRight size={15}/></a></div></div></section>

      <section className="contact section" id="contact"><div className="section-kicker">05 / LET'S TALK</div><div className="contact-layout"><div className="contact-copy"><h2>Have a project<br/>in <em>mind?</em></h2><p>Tell us a little about what you’re planning. Start with your idea, your site, or the questions you need answered.</p><div className="contact-detail"><span><MapPin size={19}/></span><div><b>Visit / Service area</b><p>{siteConfig.address}</p><a href={siteConfig.mapDirectionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14}/></a></div></div><div className="contact-detail"><span><Phone size={19}/></span><div><b>Call the office</b><p>{siteConfig.phoneDisplay}</p><button onClick={()=>contactAction('call')}>Call contact <ArrowUpRight size={14}/></button></div></div><div className="contact-detail"><span><Clock3 size={19}/></span><div><b>Business hours</b><p>Open · Closes 6 pm <small>(as listed on Google; confirm holiday hours)</small></p></div></div></div>
        <form className="contact-form" onSubmit={submitEnquiry}><div className="form-heading"><span>PROJECT ENQUIRY</span><h3>Let's get the details.</h3><p>Fill in the form to prepare your enquiry.</p></div><div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name"/></label><label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Your contact number"/></label></div><label>Service you're interested in<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{siteConfig.services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Project location<input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="Area / town (optional)"/></label><label>Tell us about your project<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="What are you planning?"/></label><button className="button button-dark submit-btn" type="submit">Prepare enquiry <Send size={16}/></button>{formMessage&&<p className="form-message" role="status">{formMessage}</p>}<small className="privacy-note"><ShieldCheck size={14}/> Your details are used to prepare your enquiry message.</small></form></div>
      </section>

      <section className="map-section"><div className="map-heading"><div><div className="section-kicker">FIND US IN NELLORE</div><h2>Local knowledge.<br/><em>Easy to reach.</em></h2></div><a className="inline-link" href={siteConfig.mapDirectionsUrl} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={17}/></a></div><div className="map-frame"><iframe title="Map showing Teja Engineering Services, Bhakthavatsala Nagar, Nellore" src={siteConfig.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe><div className="map-label"><MapPin size={18}/><span><b>Teja Engineering Services</b><small>{siteConfig.address}</small></span></div></div></section>
    </main>

    <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Building2 size={23}/></span><span><strong>TEJA<span className="brand-dot">.</span></strong><small>ENGINEERING SERVICES</small></span></a><p>Thoughtful planning for the places where life happens.</p><a className="footer-cta" href="#contact">Start a conversation <ArrowUpRight size={16}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Teja Engineering Services</span><span>Bhakthavatsala Nagar, Nellore, Andhra Pradesh</span><a href={siteConfig.googleBusinessUrl} target="_blank" rel="noreferrer">Google Business Profile ↗</a></div></footer>

    <div className="floating-actions"><button className="float-btn float-whatsapp" onClick={()=>contactAction('whatsapp')} aria-label="WhatsApp contact"><MessageCircle size={23}/><span>WhatsApp</span></button><button className="float-btn float-call" onClick={()=>contactAction('call')} aria-label="Call Teja Engineering Services"><Phone size={21}/><span>Call</span></button></div>

    {modal&&<div className="modal-backdrop" role="presentation" onClick={()=>setModal('')}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal('')} aria-label="Close dialog"><X size={20}/></button><div className="modal-icon"><CheckCircle2 size={28}/></div><div className="section-kicker">WEBSITE DEMO</div><h3 id="modal-title">Thanks for your interest.</h3><p>{modal==='call'?'Direct calling will be activated when the website goes live.':modal==='form'?'WhatsApp enquiry will be activated when the live website is approved. Your form details are ready to be connected.':'WhatsApp contact will be activated when the website goes live.'}</p><button className="button button-dark" onClick={()=>setModal('')}>Got it <ArrowRight size={16}/></button><small>This polite demo notice can be switched off when the owner approves the live contact details.</small></div></div>}
    {activeImage&&<div className="lightbox" role="presentation" onClick={()=>setActiveImage(null)}><button className="lightbox-close" aria-label="Close image" onClick={()=>setActiveImage(null)}><X/></button><div className="lightbox-content" onClick={e=>e.stopPropagation()}><img src={activeImage.image} alt={activeImage.title}/><div><span>{activeImage.category}</span><h3>{activeImage.title}</h3><p>{activeImage.description}</p></div></div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
