import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaJava, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import { SiC, SiMysql, SiExpress, SiTailwindcss, SiPostman } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#61dafb',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 85 },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', level: 80 },
      { name: 'React.js', icon: <FaReact />, color: '#61dafb', level: 78 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', level: 70 },
    ],
  },
  {
    title: 'Backend',
    color: '#68a063',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', level: 75 },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 72 },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', level: 70 },
      { name: 'REST APIs', icon: <FaDatabase />, color: '#a29bfe', level: 75 },
    ],
  },
  {
    title: 'Languages',
    color: '#f89820',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#f89820', level: 80 },
      { name: 'C Language', icon: <SiC />, color: '#a8b9cc', level: 75 },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    color: '#fd79a8',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032', level: 80 },
      { name: 'GitHub', icon: <FaGithub />, color: '#ffffff', level: 82 },
      { name: 'Postman', icon: <SiPostman />, color: '#ff6c37', level: 70 },
      { name: 'MySQL DB', icon: <SiMysql />, color: '#4479a1', level: 70 },
    ],
  },
];

const SkillBar = ({ skill, isInView, delay }) => (
  <div className="skill-item">
    <div className="skill-header">
      <div className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-percent">{skill.level}%</span>
    </div>
    <div className="skill-bar-bg">
      <motion.div
        className="skill-bar-fill"
        style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          What I Know
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A snapshot of the technologies and tools I work with regularly
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.1 }}
            >
              <div className="category-header">
                <div
                  className="category-dot"
                  style={{ background: category.color }}
                />
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    skill={skill}
                    isInView={isInView}
                    delay={0.4 + catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud */}
        <motion.div
          className="tech-cloud"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="tech-cloud-label">Also familiar with:</p>
          <div className="tech-tags">
            {[
              'Problem Solving', 'Data Structures', 'Algorithms', 'OOP',
              'Responsive Design', 'Version Control', 'Agile / Scrum',
              'Debugging', 'API Integration', 'MVC Architecture',
              'Cross-Browser Compatibility', 'Performance Optimization',
            ].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
