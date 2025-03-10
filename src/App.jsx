import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import * as echarts from 'echarts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import './App.css';

// Import Admin Components
import Dashboard from './admin/Dashboard';
import Products from './admin/Products';
import Order from './admin/Order';
import Customer from './admin/Customer';
import Setting from './admin/Setting';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const reviewChartRef = useRef(null);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 49.99,
      image: 'https://public.readdy.ai/ai/img_res/9e0df4e1df77a2f6dc9dac2d6ef79478.jpg',
      isNew: true,
      isSale: false
    },
    {
      id: 2,
      name: 'Slim Fit Denim Jeans',
      price: 89.99,
      image: 'https://public.readdy.ai/ai/img_res/2dbf3ca83a7abc9c7a68a6a8a938fc86.jpg',
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: 'Casual Blazer',
      price: 129.99,
      image: 'https://public.readdy.ai/ai/img_res/29f8ffb63b639f7e48d9242511656330.jpg',
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Leather Sneakers',
      price: 159.99,
      image: 'https://public.readdy.ai/ai/img_res/fcfd0648ad4bc80abfb9679b226c689c.jpg',
      isNew: true,
      isSale: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Emily Thompson',
      rating: 5,
      comment: 'Absolutely love the quality of their clothes! The attention to detail is remarkable.',
      image: 'https://public.readdy.ai/ai/img_res/02e86f1871c24dc4db31c2482727aaa9.jpg'
    },
    {
      id: 2,
      name: 'Michael Anderson',
      rating: 5,
      comment: 'Great selection and excellent customer service. Will definitely shop here again!',
      image: 'https://public.readdy.ai/ai/img_res/e5571b9a9b2785b2cdab08652d16f2f5.jpg'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      rating: 5,
      comment: 'The fit is perfect and the style is exactly what I was looking for. Highly recommended!',
      image: 'https://public.readdy.ai/ai/img_res/d716fd2e5e0e73110983a3a69fe343c0.jpg'
    }
  ];

  useEffect(() => {
    if (reviewChartRef.current) {
      const chart = echarts.init(reviewChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Customer Reviews',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'center'
            },
            data: [
              { value: 85, name: '5 Stars' },
              { value: 10, name: '4 Stars' },
              { value: 3, name: '3 Stars' },
              { value: 1, name: '2 Stars' },
              { value: 1, name: '1 Star' }
            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }, []);

  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={
        <SignedIn>
          <Dashboard />
        </SignedIn>
      } />
      <Route path="/admin/products" element={
        <SignedIn>
          <Products />
        </SignedIn>
      } />
      <Route path="/admin/orders" element={
        <SignedIn>
          <Order />
        </SignedIn>
      } />
      <Route path="/admin/customers" element={
        <SignedIn>
          <Customer />
        </SignedIn>
      } />
      <Route path="/admin/settings" element={
        <SignedIn>
          <Setting />
        </SignedIn>
      } />

      {/* Client Routes */}
      <Route path="/" element={
        <div>
          {/* Navigation */}
          <nav className="navbar">
            <div className="container navbar-inner">
              <div className="navbar-logo">LUXE</div>
              <div className="hidden md:flex navbar-links">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input"
                />
                <a href="#featured" className="nav-link">Featured</a>
                <a href="#new-arrivals" className="nav-link">New Arrivals</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
                <div className="navbar-icons">
                  <button className="cart-button">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{cartCount}</span>
                  </button>
                  <Link to="/admin" className="nav-link bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Admin
                  </Link>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
              <button
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="container mobile-menu-inner">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input"
                />
                <div className="mobile-menu-links">
                  <a href="#featured" className="mobile-menu-link">Featured</a>
                  <a href="#new-arrivals" className="mobile-menu-link">New Arrivals</a>
                  <a href="#about" className="mobile-menu-link">About</a>
                  <a href="#contact" className="mobile-menu-link">Contact</a>
                </div>
              </div>
            </div>
          )}

          {/* Hero Section */}
          <div className="hero" style={{ backgroundImage: `url('https://public.readdy.ai/ai/img_res/db94f3f06d474b6831f40014cfb73273.jpg')` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <div className="hero-title">Elevate Your Style</div>
              <div className="hero-subtitle">Discover the latest trends in luxury fashion</div>
              <button className="hero-button">Shop Now</button>
            </div>
          </div>

          {/* Featured Products */}
          <section id="featured" className="section">
            <div className="container">
              <h2 className="section-title">Featured Collection</h2>
              <div className="product-grid">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      {product.isNew && (
                        <span className="product-badge">New</span>
                      )}
                      {product.isSale && (
                        <span className="product-badge sale">Sale</span>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">${product.price}</p>
                      <div className="product-buttons">
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setShowQuickView(true);
                          }}
                          className="product-button"
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => setCartCount(prev => prev + 1)}
                          className="product-button"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Arrivals */}
          <section id="new-arrivals" className="section">
            <div className="container">
              <h2 className="section-title">Latest Arrivals</h2>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="swiper-container"
              >
                {featuredProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="product-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section about-section">
            <div className="container">
              <div className="about-grid">
                <div>
                  <h2 className="section-title">Our Story</h2>
                  <p>
                    Founded in 2020, LUXE has been at the forefront of luxury fashion,
                    offering carefully curated collections that blend timeless elegance
                    with contemporary style. Our commitment to quality and sustainability
                    sets us apart in the fashion industry.
                  </p>
                  <p>
                    We believe in the power of fashion to express individuality and
                    confidence. Every piece in our collection is thoughtfully selected
                    to help you create your unique style statement.
                  </p>
                  <div className="about-stats">
                    <div>
                      <h3 className="about-stat">50+</h3>
                      <p className="about-stat-label">Brands</p>
                    </div>
                    <div>
                      <h3 className="about-stat">10k+</h3>
                      <p className="about-stat-label">Customers</p>
                    </div>
                    <div>
                      <h3 className="about-stat">95%</h3>
                      <p className="about-stat-label">Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://public.readdy.ai/ai/img_res/1f30a215de6067b41cd8e5703b1b0811.jpg"
                    alt="About Us"
                    className="about-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="section">
            <div className="container">
              <h2 className="section-title">What Our Customers Say</h2>
              <div className="testimonial-grid">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <div className="testimonial-header">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="testimonial-image"
                      />
                      <div>
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-comment">{testimonial.comment}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <div ref={reviewChartRef} style={{ height: '400px' }}></div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section about-section">
            <div className="container">
              <h2 className="section-title">Get in Touch</h2>
              <div className="contact-grid">
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsContactFormSubmitted(true);
                    }}
                    className="contact-form"
                  >
                    <div>
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-input h-32"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="form-button"
                    >
                      Send Message
                    </button>
                  </form>
                  {isContactFormSubmitted && (
                    <div className="success-message">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                </div>
                <div>
                  <div className="contact-info">
                    <h3 className="contact-info-title">Contact Information</h3>
                    <div className="contact-info-item">
                      <i className="fas fa-map-marker-alt contact-info-icon"></i>
                      <span className="contact-info-text">123 Fashion Street, New York, NY 10001</span>
                    </div>
                    <div className="contact-info-item">
                      <i className="fas fa-phone contact-info-icon"></i>
                      <span className="contact-info-text">+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-info-item">
                      <i className="fas fa-envelope contact-info-icon"></i>
                      <span className="contact-info-text">contact@luxe.com</span>
                    </div>
                    <div className="contact-social">
                      <h4 className="contact-social-title">Follow Us</h4>
                      <div className="contact-social-icons">
                        <a href="#" className="contact-social-link">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="contact-social-link">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="contact-social-link">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="contact-social-link">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick View Modal */}
          {showQuickView && selectedProduct && (
            <div className="quick-view-modal">
              <div className="quick-view-content">
                <div className="quick-view-header">
                  <button
                    onClick={() => setShowQuickView(false)}
                    className="quick-view-close"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="quick-view-body">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="quick-view-image"
                    />
                    <div className="quick-view-details">
                      <h3 className="quick-view-name">{selectedProduct.name}</h3>
                      <p className="quick-view-price">${selectedProduct.price}</p>
                      <div className="quick-view-sizes">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            className="quick-view-size-button"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setCartCount(prev => prev + 1);
                          setShowQuickView(false);
                        }}
                        className="quick-view-add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      } />
    </Routes>
  );
};

export default App;
