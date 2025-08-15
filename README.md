# foursightech/home

## Overview

This repository is a React-based web application built with **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn-ui**. It serves as the base “home” application for future development and customization.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Contributing](#contributing)
- [Repository Structure](#repository-structure)
- [License](#license)

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js) or **yarn**

### Installation

```bash
git clone <REPO_URL>
cd home
npm install
```

### Running the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (default Vite port).

---

## Development Workflow

- Edit files in the `src/` directory.
- The development server supports **hot module replacement (HMR)**, so changes will update instantly in the browser.
- Use `npm run build` to create an optimized production build in the `dist/` folder.

---

## Technologies Used

- **React** – UI library
- **Vite** – next-generation frontend tooling
- **TypeScript** – type-safe JavaScript
- **shadcn-ui** – prebuilt and customizable UI components
- **Tailwind CSS** – utility-first styling framework

---

## Deployment

To deploy the app, build it and serve the static files with your hosting provider of choice (e.g., Netlify, Vercel, Cloudflare Pages, AWS S3 + CloudFront):

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## Custom Domain Setup

Once deployed, configure your DNS provider to point your domain to your hosting service. Refer to your hosting provider’s documentation for specifics.

---

## Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request

---

## Repository Structure

```text
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components
│   └── main.tsx           # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
