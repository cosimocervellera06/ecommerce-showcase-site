# Modern Living E-commerce Concept

## 📄 Project Overview

**Modern Living** is a conceptual e-commerce website designed to showcase modern, minimalist, and sustainable design across two primary categories: **Furniture** and **Apparel**. The project utilizes a clean, modern aesthetic powered by Tailwind CSS and includes foundational JavaScript features for an interactive user experience.

This concept focuses on high-quality design, simplicity, and core e-commerce functionalities like a persistent shopping cart (using `localStorage`).

## ✨ Features

* **Responsive Design:** Built using Tailwind CSS for a fluid experience on desktop, tablet, and mobile devices.
* **Minimalist Aesthetic:** Uses a dark palette (`#1A1A1A`) accented with a terracotta color (`#A54F3F`) for a sophisticated look.
* **Sticky Navigation:** Persistent header navigation for easy site access.
* **Hero Carousel:** An automatically cycling image slider on the homepage to highlight featured collections (implemented with JavaScript).
* **Subtle Parallax Effect:** A scroll-based parallax effect on a dedicated CTA section, enhancing visual depth.
* **Functional Shopping Cart:**
    * Items can be added to the cart from the product listings.
    * Cart contents persist across page loads using `localStorage`.
    * A dedicated cart page (`cart.html`) displays items, quantity, subtotals, and a grand total.
    * Ability to **remove** individual items from the cart.

## 🚀 Structure and Technologies

The project follows a standard file structure:
ecommerce-showcase-site/ 
├── index.html # Homepage (Main Landing Page) 
├── cart.html # Shopping Cart Page 
├── styles/ 
    │ 
    └── style.css # Custom CSS for colors and parallax 
├── scripts/ 
    │ 
    ├── script.js # Homepage JS: Mobile menu, Carousel, Add to Cart logic 
    │ 
    └── cart-logic.js # Cart Page JS: Renders cart items and handles removal logic 
└── img/ # (Placeholder for images used in the project) 

### Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure and content. |
| **Tailwind CSS (CDN)** | Utility-first framework for rapid styling and responsiveness. |
| **CSS3** | Custom variables, parallax styling, and custom classes. |
| **JavaScript (ES6)** | Core interactions: Carousel, Parallax calculation, and `localStorage` Cart Management. |
| **Font Awesome (CDN)** | Social media icons in the footer. |

## 🛠️ Setup and Installation

This is a front-end static project and requires no server-side setup.

1.  **Clone or Download:** Get a copy of the project files.
2.  **Navigate:** Ensure all HTML, CSS, and JS files are in the specified directories.
3.  **Open:** Open `index.html` directly in your web browser (e.g., Chrome, Firefox).

> **Note:** Due to browser security restrictions, the `background-attachment: fixed` property (used for the parallax effect) might behave inconsistently when opening files locally using the `file://` protocol. For best results, use a simple local server extension (like "Live Server" for VS Code).

## 💡 Customizing the Project

* **Colors:** Modify the CSS variables in `styles/style.css` to change the main color scheme:
    * `--color-terracotta`
    * `--color-dark`
* **Products:** Update the `data-id`, `data-name`, and `data-price` attributes on the `.add-to-cart-btn` elements in `index.html` to reflect different product data.
* **Images:** Replace the placeholder images in the `img/` folder with your own high-quality product photos.

---