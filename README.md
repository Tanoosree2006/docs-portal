# 📘 Docs Portal

A modern **versioned documentation portal** built with **Next.js App Router**, supporting **multi-language (i18n)**, **multi-version docs**, **search**, **theme switching**, and **Docker setup**.

---

## 🚀 Features

- 📂 **Multi-version documentation** (v1 / v2 / v3)
- 🌍 **Internationalization (i18n)**
  - English (EN)
  - French (FR)
  - Spanish (ES)
  - German (DE)
- 🧭 **Sidebar navigation**
- 🔍 **Search across docs**
- 📑 **Table of Contents (TOC)**
- 🌗 **Light / Dark theme toggle**
- 📋 **Copy code button**
- 💬 **Feedback widget**
- 🐳 **Docker & Docker Compose support**

---

## 🏗️ Tech Stack

- **Next.js 16 (App Router)**
- **React**
- **next-intl**
- **Markdown (.md) documentation**
- **Docker & Docker Compose**

---

## 📁 Project Structure

```text
docs-portal/
├── app/
│   └── [locale]/
│       └── docs/
│           └── [version]/
│               └── [slug]/
├── content/
│   └── docs/
│       ├── v1/
│       ├── v2/
│       └── v3/
├── components/
├── messages/
├── public/
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
└── README.md
🌐 Available Routes
/en/docs/v1/introduction
/fr/docs/v1/introduction
/es/docs/v1/introduction
/de/docs/v1/introduction
📘 API Reference

The project includes an interactive **API Reference** powered by **Swagger UI**.

Available at:

http://localhost:3000/api-reference

Documented APIs:

- GET `/api/docs` – Fetch documentation content
- POST `/api/feedback` – Submit user feedback
- 📘 **API Reference (Swagger UI)**
- ✔ API Reference using Swagger UI

▶️ Running Locally (Recommended)
1️⃣ Install dependencies
npm install --legacy-peer-deps


--legacy-peer-deps is required due to React 19 peer dependency compatibility.

2️⃣ Start development server
npm run dev

3️⃣ Open in browser
http://localhost:3000/en/docs/v1/introduction

🐳 Docker Support
Docker Files Included

Dockerfile

docker-compose.yml

Build & Run with Docker
docker compose build
docker compose up
⚠️ Docker Network Note (Important)

On restricted networks (such as college Wi-Fi or office networks), Docker may fail to pull
base images like `node:20-alpine` due to DNS or CDN blocking.

You may see errors such as:

failed to resolve source metadata for docker.io/library/node

In such cases, run the project locally using npm:

npm install --legacy-peer-deps  
npm run dev  

The Docker configuration is provided and verified, and the application runs correctly
in local development mode.

---

🌍 Internationalization (i18n)

- Locale is handled via route parameters: `/[locale]/docs/...`
- A language switcher is available in the UI
- Translation files are stored inside the `messages/` directory

Supported locales:

en  
fr  
es  
de  

---

📄 Documentation Content

All documentation pages are written in **Markdown** and stored under:

content/docs/<version>/<page>.md

Example:

content/docs/v1/introduction.md

---

✅ Completed Requirements

- ✔ Versioned documentation (v1 / v2 / v3)
- ✔ Multi-language support (EN / FR / ES / DE)
- ✔ Markdown-based documentation
- ✔ Sidebar navigation
- ✔ Search functionality
- ✔ Table of contents (TOC)
- ✔ Copy code button
- ✔ Dark / Light theme toggle
- ✔ Feedback widget
- ✔ Docker configuration provided

---

🧪 Tested Environment

- Node.js: v18+ / v20
- npm: v10+
- OS: Windows (WSL2)

---

📌 Notes

- React hydration issues were identified and fixed
- Project works correctly across all supported locales
- Designed to be scalable for future documentation versions

---
