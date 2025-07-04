# 🛍️ Prizeet Web App

**Prizeet** is a modern smartphone marketplace web app designed to help users discover the latest smartphones, compare prices, and shop with trusted vendors across Nigeria. The app is responsive, accessible, and performance-optimized.

---

## 🧱 Tech Stack

| Category               | Stack / Tools                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| **Framework**          | [Next.js 14](https://nextjs.org/) (App Router, SSR, API Routes)  |
| **Language**           | TypeScript                                                       |
| **Styling**            | Tailwind CSS, CSS Modules, Framer Motion                         |
| **UI Library**         | [shadcn/ui](https://ui.shadcn.com), Lucide Icons                 |
| **State & Forms**      | React Hooks, useState, useRef, React Hook Form *(if integrated)* |
| **Testing**            | Jest, React Testing Library, `@testing-library/jest-dom`         |
| **Image Handling**     | Next/Image                                                       |
| **Linting/Formatting** | ESLint, Prettier                                                 |

---

## 🧠 Key Decisions Made During the Redesign

* **Componentization**: Broke down the UI into reusable components (`Header`, `HeroSection`, `ProductShowcase`, etc.) to improve scalability and maintainability.
* **UI/UX Improvement**: Focused on visual hierarchy, white space, accessibility, and mobile responsiveness.
* **Performance**: Optimized images using `next/image`, lazy-loaded components, and reduced layout shifts using Framer Motion.
* **Testing**: Introduced unit tests for critical UI components using React Testing Library.
* **Scalability**: Set up alias imports (`@/components/`, etc.) and adopted clean file architecture for clarity.

---

## 🚀 Getting Started

### Prerequisites

* Node.js >= 18
* npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/ESTHER-OLA/prizeet-webap
cd prizeet-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## ✅ Running Tests

### Unit Tests

```bash
npm run test
# or
yarn test
```

This will run Jest and test files under the `__tests__` or `*.test.tsx` naming convention using React Testing Library.

### Watch Mode

```bash
npm run test:watch
```

---

## 📁 Project Structure

```
/components     → Reusable UI components
/app            → Next.js app directory structure
/public         → Static assets
/tests          → (if any separated test files)
/__mocks__      → Jest mock files (optional)
```

---

## 📌 Notes

* Uses **App Router** (`app/`) and **Client Components** where needed (`"use client"`).
* Environment variables can be added in `.env.local`.
* SEO, authentication, and backend integration are modular and planned for future releases.
