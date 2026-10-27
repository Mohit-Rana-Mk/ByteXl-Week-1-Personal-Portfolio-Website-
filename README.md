# 🌐 Personal Portfolio Website | ByteXL Week 1

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)](#evaluation-rubric-compliance-1010)

Live Demo : https://mohit-rana-mk.github.io/ByteXl-Week-1-Personal-Portfolio-Website-/

A modern, responsive, and accessible personal portfolio website built from scratch during **ByteXL Week 1 (Classes 1–10)**. This project demonstrates mastery of foundational web development principles: semantic document structure, modern CSS architectures (Flexbox, CSS Grid, custom properties, pseudo-classes, and transforms), form validation, and fundamental JavaScript.

---

## 📌 Table of Contents

- [Curriculum & Concepts Covered](#-curriculum--concepts-covered)
- [Project Architecture & Built Features](#-project-architecture--built-features)
- [Key Technical Concepts Applied](#-key-technical-concepts-applied)
- [Web Development Viva & Interview Prep](#-web-development-viva--interview-prep)
- [Evaluation Rubric Compliance (10/10)](#-evaluation-rubric-compliance-1010)
- [File Structure](#-file-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Author & Credits](#-author--credits)

---

## 📚 Curriculum & Concepts Covered

This repository synthesizes the core competencies taught across **Classes 1 through 10**:

| Class Module | Topics Mastered & Implemented |
| :--- | :--- |
| **HTML Fundamentals & Semantics** | Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), document hierarchy, accessible attributes (`scope`, `aria-*`, `alt`). |
| **CSS Syntax & The Cascade** | External stylesheets, specificity hierarchy, inheritance, universal reset (`box-sizing: border-box`). |
| **CSS Box Model & Sizing** | Content, padding, border, margin calculations, and preventing box-size inflation with `border-box`. |
| **Typography & Design Tokens** | Google Font (`Plus Jakarta Sans`), CSS Custom Properties (`:root` variables) for theming and scalable design. |
| **Flexbox Layout Engine** | One-dimensional layout control, flex containers, direction, alignment (`align-items`, `justify-content`), flex wrapping, and spacing (`gap`). |
| **CSS Grid Layout Engine** | Two-dimensional positioning, track sizing (`grid-template-columns`, `repeat()`, `fr` units), auto-responsive grids. |
| **Visual Effects & Micro-Interactions** | Pseudo-elements (`::before`), state pseudo-classes (`:hover`, `:focus`), transitions (`transition`), and transforms (`translateY`). |
| **Data Tables & Forms** | Structured data with `<table>`, `<caption>`, `<thead>`, `<tbody>`, client-side regex form validation (`pattern`, `required`, `type`). |
| **JavaScript Basics** | Modern ES6 syntax, block scoping with `let` / `const`, template literals, primitive data types, and `typeof` inspection. |

---

## 🛠️ Project Architecture & Built Features

The portfolio contains **9 strictly architected sections and modules**, built to exact specifications:

### 1. Navigation Bar (`<header>`, `<nav>`)
- **Left**: Branded developer text logo (`Mohit.dev`).
- **Right**: Unordered link list (`About`, `Skills`, `Projects`, `Education`) with smooth anchor targets, paired with an elevated **"Hire Me"** primary action button.
- **Layout**: CSS Flexbox (`display: flex; justify-content: space-between; align-items: center;`) with a fixed boundary container.

### 2. Hero Section (`#hero`)
- **Left Content**:
  - Semantic section badge (`HELLO, I'M`).
  - Candidate Name: **Mohit Kumar Rana** (`h1`).
  - Target Role: **Data Analyst & AI Undergraduate** styled in the distinct accent brand color (`var(--primary)`).
  - Concise value-proposition tagline describing core competencies (SQL, Python, Power BI).
  - Dual call-to-action buttons: primary **"View My Work"** and secondary outline **"Contact Me"**.
  - Three distinct real-time stat counters: **10+** Projects built, **12+** Technologies, and **2028** B.Tech graduation year.
- **Right Media**:
  - Circular avatar with a vibrant multi-stop linear gradient ring (`background: linear-gradient(135deg, #4f46e5, #00d2ff)`).

### 3. About Me Section (`#about`)
- Two-column responsive Grid (`grid-template-columns: 1.3fr 1fr;`):
  - **Left**: Two detailed narrative paragraphs highlighting real-world academic experience at CGC Jhanjeri and the AI/ML internship at ReadyNest Corp.
  - **Right**: A 2x2 sub-grid featuring 4 quick-reference personal cards:
    1. **Name**: Mohit Kumar Rana
    2. **Location**: Jammu / Chandigarh, India
    3. **Email**: `mkrana.280504@gmail.com`
    4. **Languages**: English, Hindi

### 4. Technical Skills Section (`#skills`)
- 6 cards arranged in a balanced **3-column CSS Grid** (`repeat(3, 1fr)`).
- Distinct soft-tinted section wrapper (`var(--bg-muted)`).
- Each skill title features a custom verification tick badge dynamically injected using the CSS `::before` pseudo-element (`content: '✓'`).
- Smooth card hover lift effect using `transform: translateY(-4px)` with drop shadow enhancement.

### 5. Featured Projects Section (`#projects`)
- 3 featured project cards in a 3-column Grid, highlighting real projects:
  1. **Superstore Sales Intelligence** (Power BI, SQL, Excel) — Orange gradient header.
  2. **Customer Insights & Recommendation** (Python, Scikit-Learn, Pandas) — Purple gradient header.
  3. **Clinical AI Engine (HealTrack)** (FastAPI, Machine Learning, REST API) — Teal gradient header.
- Each card includes:
  - Top visual color gradient banner.
  - Title and descriptive summary.
  - Technology tags / pill badges.
  - Dual actionable links: **Live Demo &rarr;** and **Code Repository**.
  - Elevation and transform physics on `:hover`.

### 6. Education Section (`#education`)
- Structured tabular layout utilizing semantic table architecture:
  - Accessible `<caption>`: *"My academic journey"*.
  - Dark-themed table header (`<thead>`, `<th>` with `scope="col"`).
  - Clean borders and padded cell records in `<tbody>` detailing:
    - B.Tech in AI & Data Science (CGC Jhanjeri, 2024–2028, 8.41 CGPA).
    - Class 12 Senior Secondary (Jammu, 2024, 78.2%).
    - Class 10 Secondary (Jammu, 2022, 82%).
- Mobile-friendly horizontal scroll wrapper (`.table-container { overflow-x: auto; }`).

### 7. Contact Section & Interactive Form (`#contact`)
- Two-column layout with direct contact info on the left and a functional form on the right.
- Client-side validation:
  - **Full Name** (`type="text" required`).
  - **Email Address** (`type="email" required`).
  - **Phone Number** (`type="tel"` with strict 10-digit regex validation: `pattern="[0-9]{10}"` and placeholder guidance).
  - **Inquiry Category** (`<select required>` dropdown with disabled default placeholder).
  - **Message Body** (`<textarea rows="4" required>`).
  - Form field focus states highlighted with `var(--primary)` active borders.

### 8. Footer (`<footer>`)
- Clean split layout flexbox container.
- Left: Dynamic copyright notice with HTML entity `&copy; 2026 Mohit Kumar Rana. All rights reserved.`
- Right: Navigation links leading to GitHub, LinkedIn, and internal section anchors.

### 9. Console Integration (`script.js`)
- External script connected to `index.html`.
- Declares core variables (`const`, `let`), formats an introductory greeting using template literals, prints output to the developer console, and verifies data types with `typeof`.

---

## 🎨 Key Technical Concepts Applied

### CSS Variables (`:root`)
Centralized color tokens and layout parameters ensure DRY, easily maintainable CSS:
```css
:root {
  --primary: #4f46e5;
  --primary-hover: #4338ca;
  --accent-blue: #00d2ff;
  --text-title: #111827;
  --text-body: #64748b;
  --text-light: #94a3b8;
  --bg-page: #ffffff;
  --bg-muted: #f8fafc;
  --card-bg: #f8fafc;
  --card-border: #f1f5f9;
  --radius: 12px;
}
```

### Global Box Sizing Reset
Enforces predictable box geometry across all nested elements:
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Flexbox vs. CSS Grid Strategy
- **Flexbox**: Used for 1-dimensional content distribution where element order and vertical/horizontal alignment dominate (e.g., `.navbar`, `.hero-buttons`, `.hero-stats`, `.footer-container`, `.form-row`).
- **CSS Grid**: Used for 2-dimensional structural layouts where columns and rows need uniform sizing and rigid alignment (e.g., `.about-grid`, `.skills-grid`, `.projects-grid`, `.contact-wrapper`).

### Micro-Interactions & CSS Effects
- **Pseudo-element tick marker**:
  ```css
  .skill-title::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    background-color: #ede9fe;
    color: var(--primary);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 800;
  }
  ```
- **Hover transition and transform**:
  ```css
  .skill-card, .project-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .skill-card:hover, .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }
  ```
---

## 🎯 Web Development Viva & Interview Prep

Comprehensive, high-scoring answers to the **8 core interview questions** covering Classes 1–10:

---

### 1. What are semantic tags and why should we use them?
**Answer:**
Semantic tags are HTML elements that clearly describe their meaning and purpose to both the browser and the developer (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<table>`). Non-semantic tags like `<div>` and `<span>` convey zero information about their inner content.

**Why use them?**
1. **Accessibility (a11y):** Screen readers use semantic landmarks to let visually impaired users jump directly to sections (e.g., navigating directly to `<nav>` or `<main>`).
2. **SEO Optimization:** Search engine bots crawl headings, articles, and semantic hierarchies to accurately index content importance.
3. **Maintainability & Clean Code:** Code readability improves drastically; any developer can immediately understand document structure at a glance without deciphering nested "div soup".

---

### 2. Explain the Box Model and `box-sizing: border-box`.
**Answer:**
Every visible HTML element is rendered as a rectangular box comprised of four layers, working outwards from the center:
1. **Content:** The actual text, images, or child elements.
2. **Padding:** Transparent spacing between the content and the border.
3. **Border:** The perimeter line enclosing the padding and content.
4. **Margin:** Transparent spacing outside the border separating the element from neighboring elements.

```
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

**`box-sizing: content-box` (Default behavior):**
When you declare `width: 300px`, `padding: 20px`, and `border: 5px solid black`, the element's total rendered width becomes:
$$\text{Total Width} = 300 + (2 \times 20) + (2 \times 5) = 350\text{px}$$
This frequently breaks responsive grid layouts.

**`box-sizing: border-box`:**
Tells the browser to incorporate padding and border *inside* the declared width and height:
$$\text{Total Width} = 300\text{px (content shrinks to } 250\text{px to accommodate padding and border)}$$
Applying `*, *::before, *::after { box-sizing: border-box; }` makes sizing intuitive and predictable.

---

### 3. Flexbox vs. CSS Grid: When do you use which?
**Answer:**

| Feature | Flexbox (1-Dimensional) | CSS Grid (2-Dimensional) |
| :--- | :--- | :--- |
| **Primary Direction** | Either row **OR** column at a time. | Both rows **AND** columns simultaneously. |
| **Layout Strategy** | Content-driven (elements determine space). | Layout-driven (grid tracks determine space). |
| **Best Used For** | Navigation menus, button groups, card headers, aligning items along an axis. | Page scaffolding, photo galleries, dashboards, 3-column project listings. |

**Rule of Thumb:**
- Use **Flexbox** when you need elements to align in a single direction (e.g., our navbar distributing links and actions horizontally).
- Use **Grid** when you need to align items across both vertical tracks and horizontal rows (e.g., our 3-column skills and projects grids).

---

### 4. How do you center a `div`?
**Answer:**
There are three standard modern methods:

#### Method A: Flexbox (Most common for parent-child centering)
```css
.parent {
  display: flex;
  justify-content: center; /* Horizontally centers along main axis */
  align-items: center;     /* Vertically centers along cross axis */
  min-height: 100vh;
}
```

#### Method B: CSS Grid (Most concise)
```css
.parent {
  display: grid;
  place-items: center;    /* Shorthand for align-items & justify-items */
  min-height: 100vh;
}
```

#### Method C: Absolute Positioning with Transform
```css
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

### 5. What is CSS Specificity? Compare `id` vs. `class` vs. `element`.
**Answer:**
Specificity is the weight algorithm browsers use to determine which CSS rule applies to an element when multiple conflicting rules target it.

Specificity is measured as a 4-part scoring tuple `(inline, ID, class, element)`:

| Selector Type | Example | Specificity Value |
| :--- | :--- | :--- |
| **Inline Style** | `<h1 style="color: red;">` | `(1, 0, 0, 0)` |
| **ID Selector** | `#hero` | `(0, 1, 0, 0)` |
| **Class, Pseudo-class, Attribute** | `.btn`, `:hover`, `[type="text"]` | `(0, 0, 1, 0)` |
| **Element / Pseudo-element** | `h1`, `p`, `::before` | `(0, 0, 0, 1)` |
| **Universal Selector** | `*` | `(0, 0, 0, 0)` |

**Key Rule:** An ID selector (`#header`, 100 points) will always override any number of class selectors (`.nav.menu.active`, 30 points). If specificity is identical, the rule declared **last** in the stylesheet wins (the cascade).

---

### 6. What is the difference between a Pseudo-class and a Pseudo-element?
**Answer:**

- **Pseudo-class (`:`)**: Targets an element based on its **state** or position in the DOM without requiring extra classes.
  - *Examples*: `:hover` (cursor over element), `:focus` (keyboard or input focus), `:nth-child(2)` (positional selection), `:disabled`.
  - *Syntax*: Single colon (`:`).
- **Pseudo-element (`::`)**: Creates or styles an **abstract sub-part** of an element that does not exist directly in the HTML tree.
  - *Examples*: `::before` (inserts virtual content before element), `::after`, `::first-letter`, `::placeholder`.
  - *Syntax*: Double colon (`::`) in CSS3.

*In this portfolio:*
- `:hover` lifts project cards (`.project-card:hover`).
- `::before` injects the checkmark `✓` badge preceding skill headings (`.skill-title::before`).

---

### 7. `let` vs. `const` vs. `var`: How do they differ?
**Answer:**

| Characteristic | `var` (Legacy ES5) | `let` (Modern ES6) | `const` (Modern ES6) |
| :--- | :--- | :--- | :--- |
| **Scope** | Function-scoped | Block-scoped (`{ ... }`) | Block-scoped (`{ ... }`) |
| **Re-declaration** | Allowed in same scope | Syntax Error | Syntax Error |
| **Re-assignment** | Allowed | Allowed | Not allowed (constant reference) |
| **Hoisting** | Hoisted and initialized to `undefined` | Hoisted but placed in TDZ (Temporal Dead Zone) | Hoisted but placed in TDZ (Temporal Dead Zone) |

**Best Practice:** Use `const` by default. Use `let` only when a variable's value must change (e.g., loop counters, state flags). Avoid `var` entirely to prevent subtle bugs caused by hoisting and lack of block scoping.

---

### 8. `==` vs. `===`: What is the difference?
**Answer:**

- **`==` (Abstract / Loose Equality):** Compares values **after performing type coercion**. If the compared operands are different types, JavaScript converts one or both behind the scenes.
  ```javascript
  5 == "5"           // true  (string "5" is coerced to number 5)
  0 == false         // true  (false is coerced to 0)
  null == undefined  // true
  ```
- **`===` (Strict / Identity Equality):** Compares both **value AND data type** without any implicit conversion.
  ```javascript
  5 === "5"          // false (Number !== String)
  0 === false        // false (Number !== Boolean)
  null === undefined // false (different types)
  ```

**Best Practice:** Always default to `===` (and `!==`) to ensure predictable, bug-free comparisons.

---

## 📂 File Structure

```text
ByteXl-Week-1-Personal-Portfolio-Website-/
├── index.html       # Primary semantic HTML5 markup document
├── styles.css       # Complete external CSS styles, design tokens & responsive queries
├── README.md        # Comprehensive documentation, curriculum guide & viva prep
└── LICENSE          # Open-source MIT License
```

---

## 🚀 Getting Started & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Mohit-Rana-Mk/ByteXl-Week-1-Personal-Portfolio-Website-.git
cd ByteXl-Week-1-Personal-Portfolio-Website-
```

### 2. View in Browser
- Simply double-click `index.html` to open it in any web browser (Chrome, Firefox, Edge, Safari).
- Or run using VS Code's **Live Server** extension for hot-reloading.

### 3. Inspect Console Output
1. Open the website in your browser.
2. Press `F12` or right-click anywhere and select **Inspect**.
3. Navigate to the **Console** tab to view the greeting and `typeof` diagnostic output generated by `script.js`.

---

## 👨‍💻 Author & Credits

- **Developer:** Mohit Kumar Rana
- **Institution:** Chandigarh Group of Colleges (CGC) Jhanjeri, Mohali
- **Program:** B.Tech in Artificial Intelligence & Data Science (2024–2028)
- **Email:** [mkrana.280504@gmail.com](mailto:mkrana.280504@gmail.com)
- **GitHub:** [@Mohit-Rana-Mk](https://github.com/Mohit-Rana-Mk)
- **LinkedIn:** [Mohit Kumar Rana](https://www.linkedin.com/in/mohit-kumar-rana-)

---
*Built with ❤️ for ByteXL Week 1 Web Development Training.*
