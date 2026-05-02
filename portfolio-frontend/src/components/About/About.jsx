import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiLayers, FiZap } from 'react-icons/fi';
import './About.css';

const stats = [
  { number: '4+', label: 'Projects Built' },
  { number: '8+', label: 'Technologies' },
  { number: '1+', label: 'Years of Coding' },
  { number: '100%', label: 'Dedication' },
];

const highlights = [
  { icon: <FiCode />, title: 'Clean Code', desc: 'I write readable, well-structured, and maintainable code following best practices and design principles.' },
  { icon: <FiLayers />, title: 'Full Stack', desc: 'Comfortable building complete applications — from pixel-perfect UIs in React to RESTful APIs in Node.js.' },
  { icon: <FiCpu />, title: 'Problem Solver', desc: 'I enjoy breaking down complex problems into simple, elegant solutions using logical thinking and DSA.' },
  { icon: <FiZap />, title: 'Fast Learner', desc: 'Technology evolves fast — so do I. I quickly pick up new frameworks, tools, and languages as needed.' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get To Know Me
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A little bit about who I am, what drives me, and what I do
        </motion.p>

        <div className="about-grid">
          {/* Left - Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-card">
              <h3>Hi, I'm Sakshi Garg 👩‍💻</h3>
              <p>
                I'm a passionate <strong>Software Developer</strong> with a strong foundation in
                both frontend and backend technologies. I enjoy building web applications that
                are not only functional but also visually appealing and user-friendly.
              </p>
              <p>
                My journey in software development started with learning the fundamentals of
                programming in <strong>C and Java</strong>, which gave me a solid understanding
                of core computer science concepts like data structures, algorithms, and
                object-oriented programming. This foundation helped me think like a developer
                before I even wrote my first web page.
              </p>
              <p>
                I then expanded into web development with <strong>HTML, CSS, and JavaScript</strong>,
                and quickly fell in love with building interactive UIs. I leveled up by learning
                modern frameworks like <strong>React.js</strong> for the frontend and
                <strong> Node.js + Express</strong> for the backend, along with <strong>MySQL</strong>
                for database management — making me a well-rounded full stack developer.
              </p>
              <p>
                I'm always looking for opportunities to grow, collaborate on meaningful projects,
                and create impactful digital experiences. When I'm not coding, I'm exploring new
                technologies, solving DSA problems, or working on personal projects to sharpen my skills.
              </p>

              <div className="about-info-grid">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Sakshi Garg</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Role</span>
                  <span className="info-value">Software Developer</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">gargsakshi9798@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">India 🇮🇳</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages</span>
                  <span className="info-value">Java, C, JavaScript</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Available</span>
                  <span className="info-value available">Open to Work ✅</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats & Highlights */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="highlights-grid">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
