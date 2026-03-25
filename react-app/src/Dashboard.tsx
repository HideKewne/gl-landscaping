import { useState, useEffect } from 'react'

const testimonials = [
  {
    text: "GL Landscaping completely transformed our backyard. The attention to detail and creative garden design exceeded all our expectations. Highly recommend their services!",
    author: "Sarah Mitchell",
    role: "Homeowner, Austin TX"
  },
  {
    text: "Professional, reliable, and incredibly talented. Our commercial property has never looked better. The hardscaping work they did is absolutely stunning.",
    author: "James Rodriguez",
    role: "Property Manager"
  },
  {
    text: "From the initial consultation to the final walkthrough, the entire experience was seamless. They truly care about bringing your vision to life.",
    author: "Emily Chen",
    role: "Homeowner, Dallas TX"
  }
]

function Dashboard() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonialOpacity, setTestimonialOpacity] = useState(1)
  const [navBg, setNavBg] = useState('rgba(10, 10, 10, 0.6)')
  const [submitText, setSubmitText] = useState('Send Message')
  const [submitBg, setSubmitBg] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50 ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.6)')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeTestimonial = (direction: number) => {
    setTestimonialOpacity(0)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + direction + testimonials.length) % testimonials.length)
      setTestimonialOpacity(1)
    }, 200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitText('Sent!')
    setSubmitBg('#1B5E20')
    setTimeout(() => {
      setSubmitText('Send Message')
      setSubmitBg('')
      const form = e.target as HTMLFormElement
      form.reset()
    }, 2000)
  }

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const t = testimonials[currentTestimonial]

  return (
    <>
      {/* Background Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar" style={{ background: navBg }}>
        <a href="#" className="nav-logo"><span>GL</span> Landscaping</a>
        <ul className="nav-links">
          <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')}>Services</a></li>
          <li><a href="#portfolio" onClick={(e) => smoothScroll(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => smoothScroll(e, '#contact')}>Get a Quote</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Welcome, Cole</p>
            <h1 className="hero-title">Crafting Beautiful Landscapes Since 2010</h1>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary" onClick={(e) => smoothScroll(e, '#contact')}>Get Free Quote</a>
              <a href="#portfolio" className="btn-secondary" onClick={(e) => smoothScroll(e, '#portfolio')}>View Our Work</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=600&fit=crop&crop=center" alt="Beautiful landscape garden" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-layout">
            {/* Top area: thumbs + organic image + lawn care label */}
            <div className="services-top">
              <div className="services-thumbs">
                <div className="service-thumb-card">
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=150&fit=crop" alt="Hardscaping project" />
                </div>
                <div className="service-thumb-card">
                  <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200&h=150&fit=crop" alt="Garden project" />
                </div>
              </div>
              <div className="service-organic-image">
                <img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=500&h=500&fit=crop" alt="Lawn Care" />
              </div>
              <div className="service-lawn-label glass-card">
                <h3>Lawn Care</h3>
                <p>Premium lawn maintenance including mowing, fertilization, aeration, and weed control.</p>
                <span className="service-tag">24hr border radius</span>
              </div>
            </div>
            {/* Bottom row: 3 glass cards */}
            <div className="services-bottom">
              <div className="service-card glass-card">
                <h3>Hardscaping</h3>
                <p>Patios, walkways, retaining walls, and outdoor living spaces built to last.</p>
              </div>
              <div className="service-card glass-card">
                <h3>Garden Design</h3>
                <p>Custom garden layouts with native plants, flower beds, and seasonal color planning.</p>
              </div>
              <div className="service-card glass-card">
                <h3>Tree Services</h3>
                <p>Expert tree trimming, removal, and stump grinding services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop" alt="Garden project 1" />
              <div className="portfolio-overlay"><span>Residential Garden</span></div>
            </div>
            <div className="portfolio-item tall">
              <img src="https://images.unsplash.com/photo-1584479898061-15742e14f50d?w=400&h=500&fit=crop" alt="Garden project 2" />
              <div className="portfolio-overlay"><span>Luxury Backyard</span></div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop" alt="Garden project 3" />
              <div className="portfolio-overlay"><span>Patio Design</span></div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=250&fit=crop" alt="Garden project 4" />
              <div className="portfolio-overlay"><span>Garden Pathway</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="testimonial-card glass-card">
          <div className="testimonial-quotes">&ldquo;</div>
          <div className="testimonial-quotes end">&ldquo;</div>
          <p className="testimonial-text" style={{ opacity: testimonialOpacity, transition: 'opacity 0.2s' }}>{t.text}</p>
          <p className="testimonial-author">{t.author}</p>
          <p className="testimonial-role">{t.role}</p>
          <div className="testimonial-nav">
            <button className="testimonial-prev" aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)}>&larr;</button>
            <button className="testimonial-next" aria-label="Next testimonial" onClick={() => changeTestimonial(1)}>&rarr;</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Form</h2>
          <div className="contact-wrapper">
            {/* Localized decorative blobs */}
            <div className="contact-blob contact-blob-left"></div>
            <div className="contact-blob contact-blob-right"></div>
            {/* Left info badges */}
            <div className="contact-info-left">
              <div className="contact-badge glass-card">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(555) 234-5678</span>
              </div>
              <div className="contact-badge glass-card">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@gllandscaping.com</span>
              </div>
            </div>

            {/* Center form */}
            <div className="contact-form-card glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="form-submit" style={submitBg ? { background: submitBg } : {}}>{submitText}</button>
              </form>
            </div>

            {/* Right info badges */}
            <div className="contact-info-right">
              <div className="contact-badge glass-card">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>Austin, TX</span>
              </div>
              <div className="contact-badge glass-card">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon-Sat 8am-6pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <ul className="footer-links">
            <li><a href="#services" onClick={(e) => smoothScroll(e, '#services')}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => smoothScroll(e, '#portfolio')}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => smoothScroll(e, '#testimonials')}>Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
          <p className="footer-copy">&copy; 2024 GL Landscaping. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Dashboard
