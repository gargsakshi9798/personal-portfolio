import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'A modern, fully responsive portfolio website built with React.js, Node.js, and MySQL. Features smooth scroll animations powered by Framer Motion, a typewriter hero section, animated skill progress bars, filterable project cards, and a contact form that saves messages directly to a MySQL database via a REST API.',
    tags: ['React.js', 'Node.js', 'MySQL', 'CSS3', 'Framer Motion'],
    github: 'https://github.com/gargsakshi9798',
    live: '#',
    color: '#6c63ff',
    emoji: '🌐',
    category: 'Web App',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description:
      'A full-featured e-commerce platform with dynamic product listings, an interactive shopping cart, user authentication (login/register), and order management. Built with a mobile-first responsive design ensuring a seamless shopping experience across all screen sizes and devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/gargsakshi9798',
    live: '#',
    color: '#fd79a8',
    emoji: '🛒',
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Restaurant Website',
    description:
      'A visually rich restaurant website featuring a dynamic menu display with categories, an online table reservation system, a photo gallery, customer reviews section, and a contact form. Designed with a mobile-first approach, smooth CSS animations, and an elegant color palette to reflect the restaurant\'s brand.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/gargsakshi9798',
    live: '#',
    color: '#00cec9',
    emoji: '🍽️',
    category: 'Website',
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe Game',
    description:
      'A fully interactive Tic-Tac-Toe game built with vanilla JavaScript. Features a clean and intuitive UI, real-time win/draw detection, a live score tracker for both players, and a restart button. Demonstrates strong understanding of DOM manipulation, event handling, and game logic implementation without any external libraries.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
    github: 'https://github.com/gargsakshi9798',
    live: '#',
    color: '#a29bfe',
    emoji: '🎮',
    category: 'Game',
  },
];

const categories = ['All', 'Web App', 'Website', 'Game'];

const ProjectCard = ({ project, index, isInView }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
  >
    {/* Card Top */}
    <div className="project-top" style={{ background: `${project.color}15` }}>
      <div className="project-emoji" style={{ background: `${project.color}25` }}>
        {project.emoji}
      </div>
      <span className="project-category" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
        {project.category}
      </span>
    </div>

    {/* Card Body */}
    <div className="project-body">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>

    {/* Card Footer */}
    <div className="project-footer">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        aria-label="View on GitHub"
      >
        <FiGithub /> Code
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link project-link-live"
        style={{ color: project.color }}
        aria-label="Live Demo"
      >
        <FiExternalLink /> Live Demo
      </a>
    </div>

    {/* Hover glow */}
    <div className="project-glow" style={{ background: project.color }} />
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          What I've Built
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Real-world projects I've designed, built, and shipped from scratch
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>These are just a few highlights — there's more on my GitHub!</p>
          <a
            href="https://github.com/gargsakshi9798"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
