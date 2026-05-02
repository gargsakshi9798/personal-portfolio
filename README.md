# Sakshi Garg — Portfolio Website

A modern, responsive portfolio website built with **React.js**, **Node.js**, and **MySQL**.

## 🗂️ Project Structure

```
sakshi-portfolio/
├── portfolio-frontend/   # React.js (Vite)
└── portfolio-backend/    # Node.js + Express + MySQL
```

---

## 🚀 Getting Started

### 1. MySQL Database Setup

Open your MySQL client and run:

```sql
-- From portfolio-backend/schema.sql
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Backend Setup

```bash
cd portfolio-backend

# Update .env with your MySQL credentials
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=portfolio_db
# PORT=5000

npm run dev   # starts on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd portfolio-frontend
npm run dev   # starts on http://localhost:5173
```

---

## ✨ Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations with Framer Motion
- ⌨️ Typewriter effect in Hero section
- 📊 Animated skill progress bars
- 🗂️ Filterable projects section
- 📬 Contact form with MySQL storage
- 🔝 Smooth scroll navigation
- 🌐 Custom favicon

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, Vite, Framer Motion     |
| Styling   | CSS3 (custom, no UI library)      |
| Backend   | Node.js, Express.js               |
| Database  | MySQL                             |
| Icons     | React Icons                       |
| HTTP      | Axios                             |
