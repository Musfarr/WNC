import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Business Structure for Your Company',
      excerpt: 'Understanding the differences between LLC, Corporation, and other business structures is crucial for long-term success. Learn the pros and cons of each option.',
      category: 'Company Formation',
      author: 'Sarah Johnson',
      date: 'May 10, 2025',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: '5 Key Legal Considerations When Expanding Your Business Globally',
      excerpt: 'International expansion brings unique legal challenges. Discover the essential legal considerations to protect your business when entering new markets.',
      category: 'Legal Services',
      author: 'Aisha Al-Mansouri',
      date: 'April 28, 2025',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies That Actually Work for B2B Companies',
      excerpt: 'Navigate the complex world of B2B digital marketing with proven strategies that generate quality leads and build your brand authority.',
      category: 'Marketing',
      author: 'Robert Williams',
      date: 'April 15, 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'The Future of Business Banking: Trends to Watch in 2025',
      excerpt: 'From open banking to blockchain technology, explore the latest trends shaping the future of business banking and financial services.',
      category: 'Business Banking',
      author: 'Michael Chen',
      date: 'April 5, 2025',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Building a Strong Brand Identity for Your Startup',
      excerpt: 'A strong brand identity is crucial for startup success. Learn the step-by-step process to create a brand that resonates with your target audience.',
      category: 'Branding',
      author: 'Emma Parker',
      date: 'March 22, 2025',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Tax Planning Strategies for International Businesses',
      excerpt: 'Effective tax planning is essential for global businesses. Discover strategies to optimize your tax position while maintaining full compliance.',
      category: 'Accounting & VAT',
      author: 'David Thompson',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80',
      readTime: '11 min read'
    }
  ];

  const categories = [
    'All Categories',
    'Company Formation',
    'Legal Services',
    'Business Banking',
    'Branding',
    'Marketing',
    'Accounting & VAT'
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h6 className="hero-subtitle">OUR BLOG</h6>
            <h1 className="hero-title">Business <span className="text-gradient">Insights</span> & News</h1>
            <p className="hero-description">Stay informed with the latest trends, strategies, and insights in business, legal services, and global markets.</p>
          </div>
        </div>
        <div className="hero-waves">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {/* Main Content */}
            <div className="main-content">
              <div className="category-filter">
                <div className="filter-title">Filter by Category:</div>
                <div className="categories">
                  {categories.map((category, index) => (
                    <button key={index} className={index === 0 ? 'category-btn active' : 'category-btn'}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="featured-post">
                <div className="featured-image">
                  <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                  <div className="image-overlay"></div>
                  <div className="category-tag">{blogPosts[0].category}</div>
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-author">By {blogPosts[0].author}</span>
                    <span className="post-date">{blogPosts[0].date}</span>
                    <span className="post-read-time">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="post-title">{blogPosts[0].title}</h2>
                  <p className="post-excerpt">{blogPosts[0].excerpt}</p>
                  <Link to={`/blog/${blogPosts[0].id}`} className="read-more">
                    Read Article
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="posts-grid">
                {blogPosts.slice(1).map(post => (
                  <div className="post-card" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="image-overlay"></div>
                      <div className="category-tag">{post.category}</div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">{post.date}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-footer">
                        <div className="post-author">By {post.author}</div>
                        <Link to={`/blog/${post.id}`} className="read-more">
                          Read More
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <button className="pagination-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-form">
                  <input type="text" placeholder="Search blog..." />
                  <button type="submit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <a href="#" className="category-link">{category}</a>
                      <span className="post-count">{index + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts">
                  {recentPosts.map(post => (
                    <div className="recent-post" key={post.id}>
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="post-info">
                        <h4 className="post-title">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget subscribe-widget">
                <h3 className="widget-title">Subscribe to Our Newsletter</h3>
                <p>Stay updated with our latest insights and news.</p>
                <form className="subscribe-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="btn-subscribe">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Expert Business Advice?</h2>
            <p>Our team of professionals is ready to help you navigate your business challenges.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
              <Link to="/services" className="btn-secondary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
