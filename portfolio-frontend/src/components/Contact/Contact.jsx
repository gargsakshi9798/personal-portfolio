import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import {
  FiMail, FiGithub, FiLinkedin, FiSend,
  FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'gargsakshi9798@gmail.com',
    href: 'mailto:gargsakshi9798@gmail.com',
    color: '#fd79a8',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/gargsakshi9798',
    href: 'https://github.com/gargsakshi9798',
    color: '#a29bfe',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gargsakhi9798',
    href: 'https://www.linkedin.com/in/gargsakhi9798/',
    color: '#0077b5',
  },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', form);
      if (res.data.success) {
        setStatus('success');
        setForm(initialForm);
        setTimeout(() => setStatus(null), 5000);
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Let's Talk
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind, a job opportunity, or just want to say hi? I'd love to hear from you!
        </motion.p>

        <div className="contact-grid">
          {/* Left - Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact-info-card">
              <h3>Let's Connect 🤝</h3>
              <p>
                I'm currently open to new opportunities — whether it's a full-time role,
                freelance project, or an exciting collaboration. I love working on challenging
                problems and building things that make a real difference.
              </p>
              <p>
                Feel free to reach out through the form or directly via any of the channels
                below. I typically respond within 24 hours. Let's build something great together!
              </p>

              <div className="contact-links">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-link-icon" style={{ background: `${item.color}20`, color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="contact-link-label">{item.label}</span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="availability-badge">
                <span className="availability-dot" />
                Available for freelance & full-time roles
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser /> Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Sakshi Garg"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  className="form-alert success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="form-alert error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle /> {errorMsg}
                </motion.div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
