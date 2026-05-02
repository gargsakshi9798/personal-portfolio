<div align="center">

# 🌐 Sakshi Garg — Personal Portfolio Website

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&lines=Software+Developer+%F0%9F%92%BB;React+%2B+Node.js+%2B+MySQL+Stack;Full+Stack+Web+Developer;Always+Learning%2C+Always+Building!" alt="Typing SVG" />

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

<br/>

> A modern, fully responsive **Full Stack Portfolio Website** built with React.js, Node.js & MySQL —  
> designed to showcase my skills, projects, and journey as a Software Developer.

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-6C63FF?style=for-the-badge)](https://github.com/gargsakshi9798)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gargsakshi9798)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gargsakhi9798/)

</div>

---

## 📸 Preview

<div align="center">

| Desktop View | Mobile View |
|:---:|:---:|
| ![Desktop](https://via.placeholder.com/600x350/0a0a0f/6c63ff?text=Desktop+Preview) | ![Mobile](https://via.placeholder.com/250x450/0a0a0f/fd79a8?text=Mobile+Preview) |

> 💡 *Replace the placeholder images above with actual screenshots of your portfolio.*

</div>

---

## ✨ Features

- 🎨 **Modern Dark Theme** — sleek dark UI with purple/pink gradient accents
- ⚡ **Smooth Animations** — powered by Framer Motion for fluid transitions
- ⌨️ **Typewriter Effect** — dynamic role cycling in the Hero section
- 📊 **Animated Skill Bars** — progress bars that animate on scroll into view
- 🗂️ **Filterable Projects** — filter projects by category (Web App / Website / Game)
- 📬 **Contact Form + MySQL** — form submissions saved directly to a MySQL database via REST API
- 📱 **Fully Responsive** — optimized for all screen sizes (320px → 1440px+)
- 🔝 **Smooth Scroll Navigation** — active link highlighting with react-scroll
- 🌐 **Custom Favicon** — personalized SVG favicon with initials

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

### Tools & Others
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)

</div>

---

## � Project Structure

```
sakshi-portfolio/
│
├── 📂 portfolio-frontend/          # React.js (Vite) — Frontend
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── profile.png         # Profile photo
│   │   ├── components/
│   │   │   ├── Navbar/             # Fixed navbar with mobile menu
│   │   │   ├── Hero/               # Hero section with typewriter
│   │   │   ├── About/              # About me + stats + highlights
│   │   │   ├── Skills/             # Animated skill bars
│   │   │   ├── Projects/           # Filterable project cards
│   │   │   ├── Contact/            # Contact form → MySQL
│   │   │   ├── Footer/             # Footer with links
│   │   │   └── Loader/             # Splash screen loader
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css               # Global styles & CSS variables
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── 📂 portfolio-backend/           # Node.js + Express — Backend API
│   ├── routes/
│   │   └── contact.js              # POST & GET /api/contact
│   ├── db.js                       # MySQL connection pool
│   ├── server.js                   # Express app entry point
│   ├── schema.sql                  # Database setup script
│   ├── .env                        # Environment variables (not committed)
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [MySQL](https://www.mysql.com/) (v8 or above)
- [Git](https://git-scm.com/)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/gargsakshi9798/portfolio.git
cd portfolio
```

---

### Step 2 — MySQL Database Setup

Open your MySQL client (MySQL Workbench / terminal) and run:

```sql
CREATE DATABASE IF NOT EXISTS portfolio_db;

USE portfolio_db;

CREATE TABLE IF NOT EXISTS contacts (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100)  NOT NULL,
  email       VARCHAR(150)  NOT NULL,
  subject     VARCHAR(200)  NOT NULL,
  message     TEXT          NOT NULL,
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);
```

> ✅ Or simply run the provided file: `portfolio-backend/schema.sql`

---

### Step 3 — Backend Setup

```bash
cd portfolio-backend
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
PORT=5000
```

Install dependencies and start the server:

```bash
npm install
npm run dev        # Development (nodemon)
# or
npm start          # Production
```

> 🟢 Backend runs on: `http://localhost:5000`

---

### Step 4 — Frontend Setup

```bash
cd portfolio-frontend
npm install
npm run dev
```

> 🟢 Frontend runs on: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Save a contact form message to MySQL |
| `GET` | `/api/contact` | Retrieve all contact messages (admin) |

### Sample Request — POST `/api/contact`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "Hi Sakshi, I'd love to connect!"
}
```

### Sample Response

```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon.",
  "id": 1
}
```

---

## � Responsive Breakpoints

| Breakpoint | Target Device |
|------------|--------------|
| `375px` | Small phones (iPhone SE) |
| `480px` | Mobile phones |
| `640px` | Large phones / small tablets |
| `768px` | Tablets (portrait) |
| `900px` | Tablets (landscape) |
| `1024px` | Small laptops / iPad Pro |
| `1200px+` | Desktops & large screens |

---

## 🗂️ Sections Overview

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Name, typewriter role animation, stats, social links, profile photo |
| 👩‍💻 **About** | Bio, personal info grid, stat cards, skill highlights |
| 🛠️ **Skills** | Animated progress bars — Frontend, Backend, Languages, Tools |
| 🚀 **Projects** | Filterable cards — Personal Portfolio, E-Commerce, Restaurant, Tic-Tac-Toe |
| 📬 **Contact** | Contact form with MySQL integration + social links |
| 🔗 **Footer** | Quick links, social icons, back-to-top button |

---

## 🤝 Connect With Me

<div align="center">

| Platform | Link |
|----------|------|
| 📧 Email | [gargsakshi9798@gmail.com](mailto:gargsakshi9798@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/gargsakhi9798](https://www.linkedin.com/in/gargsakhi9798/) |
| 🐙 GitHub | [github.com/gargsakshi9798](https://github.com/gargsakshi9798) |

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Sakshi Garg**

⭐ *If you found this project helpful, please consider giving it a star!* ⭐

</div>
