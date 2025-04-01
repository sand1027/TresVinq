import { motion } from "framer-motion";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Clean Room Technology",
    category: "Technology",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1581093458791-9d15cc3e2251",
    excerpt:
      "Exploring the latest advancements in clean room technology and their impact on various industries.",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
  },
  {
    id: 2,
    title: "Best Practices in Clean Room Maintenance",
    category: "Maintenance",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1581093588401-fdd3915c912f",
    excerpt:
      "Essential guidelines and protocols for maintaining clean room efficiency and compliance.",
    author: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
  },
  {
    id: 3,
    title: "Future of Pharmaceutical Clean Rooms",
    category: "Industry",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5",
    excerpt:
      "Insights into how pharmaceutical clean rooms are evolving with new technologies and regulations.",
    author: {
      name: "Emma Williams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="coming-soon-overlay-main">
        <motion.div
          className="coming-soon-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Coming Soon</h2>
          <p>Our blog is under construction. Stay tuned for amazing content!</p>
        </motion.div>
      </div>

      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Latest Blog Posts</h1>
        <p>Stay updated with our latest insights and industry news</p>
      </motion.div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-author">
                <img src={post.author.avatar} alt={post.author.name} />
                <span>{post.author.name}</span>
              </div>
              <button className="read-more" disabled>
                Read More
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="blog-newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get notified when our blog launches!</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
