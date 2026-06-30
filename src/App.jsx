import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faComment, faClock, faMessage } from '@fortawesome/free-solid-svg-icons';
// import { Star, MessageSquare, Flame, ShieldCheck, Clock } from 'lucide-react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const menuItems = [
  {
    id: 1,
    title: "Itago Grilled Fish",
    desc: "Whole fresh croaker, perfectly charred and basted in our house aromatic sweet-pepper glaze.",
    img: "scrilled-pish.jpeg" // Charcoal-grilled fish with pepper glaze style
  },
  {
    id: 2,
    title: "Itago Fish Melt",
    desc: "Tender local fish cuts smothered in a rich fiery chili base paired with ripe sweet plantains.",
    img: "grilled-fish.png" // Richly spiced chili and pepper-coated presentation
  },
  {
    id: 3,
    title: "Itago Marinated Chicken",
    desc: "Juicy poultry quarters infused with rich Nigerian herbs, seared slow over charcoal blocks.",
    img: "Flame-Marinated-Chickens.jpg" // Deeply browned, open-flame grilled chicken
  },
  {
    id: 4,
    title: "Itago Smoky Turkey",
    desc: "Boldly tender turkey legs, basted repeatedly with a local spice blend for extreme depth.",
    img: "Smoky-Local-Turkey.jpeg" // Highly seasoned roasted poultry cuts
  },
  {
    id: 5,
    title: "Itago  Barbecue",
    desc: "An array of char-kissed choice meats arranged nicely with custom fries and real house pepper dip.",
    img: "Signature-Barbecue-Pack.avif" // Charcoal flame-kissed mixed meat pack arrangement
  },
  {
    id: 6,
    title: "Itago Loaded Shawarma",
    desc: "Fresh warm flatbread double-wrapped with slow-shaved rotisserie meats, sausage and cream base.",
    img: "Ultimate-Loaded-Shawarma.jpeg" // Authentic tightly-wrapped street-style shawarma
  }
];

const reviews = [
  { id: 1, name: "Tunde A.", text: "The grilled fish is absolutely amazing. Authentic smoky execution right in the heart of Lagos." },
  { id: 2, name: "Amaka O.", text: "Consistently fiery, incredibly fresh, and deeply satisfying. My standard daily order location." },
  { id: 3, name: "Kelechi N.", text: "The loaded shawarma layout is pure madness. Massive filling allocation and super clean flavors." },
  { id: 4, name: "Bisi M.", text: "Fast processing times coupled with high-tier packaging standards. Highly recommended!" }
];

  // const reviews = [
  //   { id: 1, name: "Tunde A.", text: "The grilled fish is absolutely amazing. Authentic smoky execution right in the heart of Lagos." },
  //   { id: 2, name: "Amaka O.", text: "Consistently fiery, incredibly fresh, and deeply satisfying. My standard daily order location." },
  //   { id: 3, name: "Kelechi N.", text: "The loaded shawarma layout is pure madness. Massive filling allocation and super clean flavors." },
  //   { id: 4, name: "Bisi M.", text: "Fast processing times coupled with high-tier packaging standards. Highly recommended!" }
  // ];

  return (
    <div className="landing-page">
      {/* --- NAVBAR --- */}
<nav className="navbar">
  <div className="logo-container" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    <div className="logo-circle"><img src="logo.png" width="40px" height="40px" style={{borderRadius: '50%'}} alt="" /></div>
    <div className="logo-text-wrapper">
      <span className="logo-text-main">Itagokwaife</span>
      <span className="logo-text-sub">Grillspot</span>
    </div>
  </div>

  <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>

  <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
    <li><a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
    <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a></li>
    <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
    <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
  </ul>

  <div className="nav-actions">
    <FontAwesomeIcon icon={faInstagram} className="nav-icon" onClick={() => window.open('https://www.instagram.com/itagokwaife_grillspot', '_blank')} />
    <FontAwesomeIcon icon={faMessage} className="nav-icon" onClick={() => window.open('https://wa.me/2348089811603', '_blank')} />
    <button className="btn-call" onClick={() => window.location.href = 'tel:+2348089811603'}>
      <FontAwesomeIcon icon={faPhone} />
      <span>Call Spot</span>
    </button>
  </div>
</nav>

      {/* --- HERO SECTION --- */}
      <header className="hero-section" id="home">
        <div className="hero-overlay">
          <div className="badge-location">
            <i className="fas fa-fire"></i> LAGOS · SURULERE
          </div>
          <h1 className="hero-title">Taste the <span className="highlight-text">Art</span> of Premium Grilling</h1>
          <p className="hero-subtitle">
            At Itagokwaife Grillspot, every meal is prepared with passion, premium fresh selection, and authentic Nigerian flavor profiles — ranging from crisp grilled fish to deeply seasoned local turkey lines.
          </p>
          <div className="hero-buttons">
            <button className="btn-whatsapp" onClick={() => window.open('https://wa.me/2348089811603', '_blank')}>
              <i className="fab fa-whatsapp"></i> Order on WhatsApp <i className="fas fa-chevron-right" style={{fontSize: '0.8rem', marginLeft: '4px'}}></i>
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'})}>
              Explore Our Menu
            </button>
          </div>
          <div className="hero-stats">
            <span>★★★★★ &nbsp;500+ REVIEWS</span>
            <span className="divider">|</span>
            <span>OPEN 24 HOURS</span>
            <span className="divider">|</span>
            <span>FRESH CHARCOAL CRAFT</span>
          </div>
        </div>
      </header>

      {/* --- ABOUT / STORY SECTION --- */}
      <section className="story-section" id="about">
        <div className="story-image-container">
          <div className="story-image-placeholder" >
            <span className="story-neon-text">Itagokwaife</span>
          </div>
        </div>
        <div className="story-content">
          <div className="section-badge">Our Legacy</div>
          <h2 className="section-title">Where Supreme Taste Meets <span className="highlight-text">Tradition</span></h2>
          <p>
            Welcome to Itagokwaife Grillspot — an intentional celebration of flame-kissed premium protein execution. We specialize across ultra-fresh grilled catches, rustic local spices, chicken cuts, and premium urban street selections designed to deliver peak luxury flavor.
          </p>
          <p>
            Whether it is an intimate late-night dining run or high-volume festive event packages, we execute each box using hand-selected ingredients and high-grade slow pit fires. Flavor isn't arbitrary here; it is our heritage.
          </p>
          <div className="story-stats-row">
            <div className="story-stat-item">
              <h3>100%</h3>
              <p>FRESH SELECTION</p>
            </div>
            <div className="story-stat-item">
              <h3>24/7</h3>
              <p>UNBROKEN SERVICE</p>
            </div>
            <div className="story-stat-item">
              <h3>4.9★</h3>
              <p>CUSTOMER INDEX</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section className="menu-section" id="menu">
        <div className="section-badge-center">Signature Menu</div>
        <h2 className="section-title-center">Crafted for the <span className="highlight-text">Flavor</span> Seekers</h2>
        <p className="section-subtitle-center">A carefully curated catalog of our highly rated open-pit masterworks.</p>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <div className="menu-card" key={item.id}>
              <div className="menu-img-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="menu-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={`https://wa.me/2348089811603?text=Hello,%20I%20want%20to%20order%20${encodeURIComponent(item.title)}`} target="_blank" rel="noreferrer" className="order-link">
                  Order Delivery <i className="fas fa-arrow-right" style={{fontSize: '0.8rem'}}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="features-section">
        <div className="section-badge-center">The Standard</div>
        <h2 className="section-title-center">The Itagokwaife <span className="highlight-text">Difference</span></h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-fire-alt"></i></div>
            <h3>Artisanal Smoked Pit</h3>
            <p>We do not rush charcoal heating loops. Every product benefits from deep traditional smoking rules.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>Premium Grade Only</h3>
            <p>Our raw material supply routes adhere strictly to high-tier texture checks and clean storage loops.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-shipping-fast"></i></div>
            <h3>Express Urban Route</h3>
            <p>Optimized internal kitchen queues ensure warm food boxes arrive at your door without structural delay.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-pepper-hot"></i></div>
            <h3>Custom Native Spice</h3>
            <p>House marinades mixed via secret spice weights passed down over multiple generational iterations.</p>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="gallery-section" id="gallery">
        <div className="section-badge-center">Visual Stream</div>
        <h2 className="section-title-center">Straight from the <span className="highlight-text">Grill</span> Lines</h2>
        <p className="section-subtitle-center">An organic view into daily workspace cooking and customer favorites.</p>
        
        <div className="gallery-grid">
          <div className="gallery-item tall" style={{backgroundImage: `url('gessturkey.jpeg')`}}></div>
          <div className="gallery-item" style={{backgroundImage: `url('letsgofish.jpeg')`}}></div>
          <div className="gallery-item tall" style={{backgroundImage: `url('Signature-Barbecue-Pack.avif')`}}></div>
          <div className="gallery-item" style={{backgroundImage: `url('scrilled-pish.jpeg')`}}></div>
          <div className="gallery-item" style={{backgroundImage: `url('shawale.jpeg')`}}></div>
          <div className="gallery-item" style={{backgroundImage: `url('scrilled-fish.jpeg')`}}></div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="reviews-section" id="reviews">
        <div className="section-badge-center">Guest Sentiment</div>
        <h2 className="section-title-center">What Our <span className="highlight-text">Patrons</span> Say</h2>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div className="review-card" key={review.id}>
              <div className="stars">★★★★★</div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INSTAGRAM CTA SECTION --- */}
      <section className="instagram-section">
        <div className="insta-container">
          <div className="insta-badge">@ITAGOKWAIFE_GRILLSPOT</div>
          <h2>Follow Our <span className="highlight-text">Food Journey</span></h2>
          <p>Join our thriving digital community for daily flame uploads, localized seasonal drop offers, and real-time operations announcements.</p>
          <button className="btn-insta" onClick={() => window.open('https://instagram.com', '_blank')}>
            <i className="fab fa-instagram" style={{fontSize: '1.2rem'}}></i> Connection Stream
          </button>
        </div>
      </section>

      {/* --- VISIT US / CONTACT SECTION --- */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-info-card">
            <div className="section-badge" style={{display: 'inline-table'}}>Locate Us</div>
            <h3>Drop by the Pit</h3>
            <p className="contact-tagline">Operating an unbroken 24-hour setup. We are ready when you are.</p>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt text-gold"></i>
              <span>27 Adeniran Ogunsanya Street, Surulere, Lagos 100011, Nigeria</span>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone-alt text-gold"></i>
              <span>+234 808 981 1603</span>
            </div>
            
            <div className="info-item">
              <i className="far fa-clock text-gold"></i>
              <span>All Days Active &middot; 24 Hours Delivery Included</span>
            </div>
            
            <div className="contact-action-buttons">
              <button className="btn-call-now" onClick={() => window.location.href = 'tel:+2348089811603'}>
                <i className="fas fa-phone-alt"></i> Call Hub
              </button>
              <button className="btn-action-whatsapp" onClick={() => window.open('https://wa.me/2348089811603', '_blank')}>
                <i className="fab fa-whatsapp"></i> Instant Chat
              </button>
              <button className="btn-action-instagram" onClick={() => window.open('https://instagram.com', '_blank')}>
                <i className="fab fa-instagram"></i> Social Feed
              </button>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.464673322137!2d3.3551522758509893!3d6.462657923838497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c38171f2cd3%3A0x6b4f72db7242d579!2sAdeniran%20Ogunsanya%20St%2C%20Surulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Itagokwaife Core Business Coordinates"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-circle"></div>
              <div className="logo-text-wrapper">
                <span className="logo-text-main">Itagokwaife</span>
                <span className="logo-text-sub">Grillspot</span>
              </div>
            </div>
            <p className="footer-desc">Premium master-grade African barbecue. Sourced organically, executed manually, delivered perfectly.</p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home Base</a></li>
              <li><a href="#about">Our Roots</a></li>
              <li><a href="#menu">Menu Book</a></li>
              <li><a href="#gallery">Visual Stream</a></li>
              <li><a href="#reviews">Patron History</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Timeline</h4>
            <p>Active 24/7/365</p>
            <p>Public Holidays Active</p>
            <h4 className="phone-heading">Direct Hotlines</h4>
            <p style={{color: '#fff', fontWeight: 'bold'}}>+234 808 981 1603</p>
          </div>

          <div className="footer-column">
            <h4>Headquarters</h4>
            <p>27 Adeniran Ogunsanya Street, Surulere, Lagos, Nigeria.</p>
            <div className="footer-socials">
              <a href="#insta"><i className="fab fa-instagram"></i></a>
              <a href="#chat"><i className="far fa-comment"></i></a>
              <a href="#call"><i className="fas fa-phone-alt"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Itagokwaife Grillspot. All structural rights protected globally.</p>
          <p>Premium Culinary Digital Architecture.</p>
        </div>
      </footer>

      {/* Sticky Floating Action Button */}
      <div className="whatsapp-floating" onClick={() => window.open('https://wa.me/2348089811603', '_blank')}>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
}

export default App;