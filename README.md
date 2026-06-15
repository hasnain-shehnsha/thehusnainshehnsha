# Husnain Shehnsha - ML/AI Engineer Portfolio

Welcome to my professional portfolio! I'm **M Husnain Shehnsha**, a Machine Learning and AI Engineer passionate about building intelligent systems, developing RAG applications, and integrating Large Language Models into production environments.

**Portfolio Website**: Built with modern technologies to showcase my skills, projects, and professional experience.

---

## 🚀 About Me

I'm an ML/AI Engineer from Islamabad, Pakistan, specializing in:
- **Machine Learning**: Scikit-learn, TensorFlow, PyTorch
- **AI/LLM Integration**: LangChain, OpenAI API, Prompt Engineering
- **RAG Systems**: Vector Databases, Semantic Search
- **Full-Stack Development**: React, Next.js, TypeScript
- **Natural Language Processing**: Text Analysis, Embeddings, NLP pipelines

Currently interning as an ML Engineer at **DEVNESS** (July 2025 - September 2025).

📧 **Email**: hasnainshehnsha.ai@gmail.com  
📱 **Phone**: +92 3404386378  
🌍 **Location**: Islamabad, Pakistan

---

## 🎓 Education

**BS Software Engineering**  
COMSATS University, Islamabad (September 2022 - June 2026)  
CGPA: 3.67/4.0

**Intermediate**  
Superior College, Islamabad

---

## 💼 Featured Projects

### 1. ANIAD - AI-Powered Nutrition & Diet Assistant
Advanced Retrieval-Augmented Generation system for personalized nutrition guidance.  
**Stack**: Python, LangChain, OpenAI API, Pinecone, React  
**Role**: Full-Stack Developer  
**Year**: 2025  
[View on GitHub](https://github.com/hasnain-shehnsha)

### 2. Research ChatBot
LLM-powered conversational assistant for research paper analysis and Q&A.  
**Stack**: Python, FastAPI, OpenAI, React, PostgreSQL  
**Role**: Backend Lead  
**Year**: 2024

### 3. AI Tutor Platform
Intelligent tutoring system with adaptive learning paths.  
**Stack**: React, Next.js, Python, TensorFlow  
**Role**: Full-Stack Developer  
**Year**: 2024

### 4. Weather System with ML Predictions
Real-time weather data with machine learning forecasting models.  
**Stack**: Python, Scikit-learn, React, Flask  
**Role**: ML Engineer  
**Year**: 2023

---

## 🛠️ Tech Stack & Skills

### AI/ML
Python (Advanced) • LangChain • OpenAI API • Scikit-learn • TensorFlow • RAG Systems • Vector Databases • NLP • LLM Integration • Prompt Engineering

### Full-Stack Development
JavaScript • TypeScript • React • Next.js • Node.js • SQL • PostgreSQL

### Tools & Platforms
Docker • Git • Jupyter Notebooks • Pandas • NumPy

---

## 📜 Certifications

- Stanford Machine Learning Specialization (DeepLearning.AI)
- Deep Learning Specialization (Andrew Ng, Coursera)
- Natural Language Processing with Transformers
- Advanced LangChain for Production

---

## 🔗 Connect With Me

- **GitHub**: [hasnain-shehnsha](https://github.com/hasnain-shehnsha)
- **LinkedIn**: [Husnain Shehnsha](https://linkedin.com/in/husnain-shehnsha)
- **Email**: hasnainshehnsha.ai@gmail.com
- **Instagram**: [@thehusnainshehnsha](https://instagram.com/thehusnainshehnsha)

---

## 📋 Portfolio Features

This portfolio website includes:

- **Hero Section**: Animated introduction with AI visualization
- **About Section**: Professional background and expertise
- **Experience Section**: Work history and achievements
- **Education Section**: Academic credentials with CGPA
- **Skills Section**: 30+ technologies across 6 categories
- **Services Section**: ML Engineering, RAG Systems, LLM Integration
- **Projects Gallery**: Featured projects with GitHub links and tech stack
- **Testimonials**: Professional feedback and recommendations
- **Responsive Design**: Mobile-first approach with smooth animations

---

## 🛠️ Development Setup

This portfolio is built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and modern animations.

### Requirements
- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── data/               # portfolio.json - Central data source
├── hooks/              # Custom React hooks (usePortfolio)
├── types/              # TypeScript type definitions
├── assets/             # Images and static files
├── index.css           # Global styles
├── App.tsx             # Main app component
└── main.tsx            # React entry point
```

---

## 💡 Data-Driven Architecture

All portfolio content is managed from `src/data/portfolio.json`, enabling easy updates without modifying component code:
- Profile information
- Social links
- Skills and expertise
- Work experience
- Project details
- Testimonials
- Education credentials

---

## 🎨 Design & Animations

- **Color Scheme**: Dark theme (#0C0C0C) with cyan (#00D9FF) and purple (#A78BFA) accents
- **Responsive**: Mobile-first design with Tailwind CSS breakpoints
- **Animations**: Custom CSS keyframes and Framer Motion for smooth transitions
- **Typography**: Fluid sizing with clamp() for responsive text

---

## 📝 License

This portfolio website is my personal project. Feel free to use it as inspiration for your own portfolio!

---

## 📬 Contact

Have a project in mind or want to collaborate? Reach out!

**Email**: hasnainshehnsha.ai@gmail.com  
**Phone**: +92 3404386378  
**GitHub**: [@hasnain-shehnsha](https://github.com/hasnain-shehnsha)

---

**Last Updated**: June 2026  
**Owner**: M Husnain Shehnsha

Vite will print the local URL, usually:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the Vite development server with hot reload.

```bash
npm run build
```

Runs TypeScript project checks and creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for verification.

## Project Structure

```text
src/
  assets/
    img/                  # Local image assets
  components/             # React UI sections and shared components
  data/
    portfolio.json        # Main site content source
  hooks/
    usePortfolio.ts       # Typed portfolio data access
  types/
    portfolio.ts          # Portfolio data interfaces
  App.tsx                 # Section order
  index.css               # Tailwind entry and shared CSS
  main.tsx                # React mount
```

## Editing Site Content

Most content lives in:

```text
src/data/portfolio.json
```

Common updates:

- `profile`: name, bio, specialization, location, social links
- `experience`: company, role, period, summary, highlights
- `projects`: project title, subtitle, description, link, image, highlight order
- `testimonials`: quote, name, role, avatar color

Notes:

- Project cards render projects with `highlight: true` first.
- Empty project links hide the `LIVE PROJECT` button.
- Empty project images render a styled placeholder.
- Testimonial names marked with `// DUMMY:` are placeholders and should be replaced with real reviewer names when available.

## Styling Notes

- Tailwind scans `index.html` and `src/**/*.{ts,tsx}`.
- Shared chrome-gradient heading styling lives in `src/index.css` as `.hero-heading`.
- The site uses the Kanit font family from the existing Tailwind config.
- Section order is controlled in `src/App.tsx`.

## Production Build

Create the optimized production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

Deploy the generated `dist/` folder to any static hosting provider such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Maintenance Checklist

- Replace all `// DUMMY` testimonial values before publishing as real endorsements.
- Replace any `// FILL IN` values in `portfolio.json`.
- Add real project images to each `projects[].image` field when available.
- Run `npm run build` before deployment.
# thehusnainshehnsha
