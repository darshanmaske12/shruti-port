# 🎬 Shruti Bharti — Cinematic Film Producer Portfolio

A personal website built for **Shruti Bharti**, Film Production Manager & Creative Director.

Designed to international cinema standards with a combination of **cinematic luxury, modern editorial design, minimalist layouts, elegant typography, and smooth vanilla animations**.

---

## 🎨 Color Palette & Design Direction

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Midnight Navy** | `#101827` | Primary cinematic backdrop for Hero, Experience, Portfolio & Contact |
| **Champagne Gold** | `#D6B77A` | Accent color for headlines, borders, buttons, and decorative icons |
| **Warm Ivory** | `#F7F3EC` | High-contrast editorial backdrop for About Me, Skills & Education |
| **Deep Burgundy** | `#702D46` | Editorial highlight color for quotes, badges, and subtle glows |
| **White** | `#FFFFFF` | Crisp readable typography across dark cinematic sections |

### 🖋️ Typography
- **Headings**: `Playfair Display` (Classic cinema luxury serif)
- **Body Text**: `Poppins` (Clean, geometric, highly legible modern sans-serif)
- **Editorial Accents**: `Cormorant Garamond` (Editorial italic quotes and section titles)

---

## 🛠️ Technology Stack

Strictly crafted with:
- **HTML5**: Semantic, accessible markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Custom properties, CSS Grid, Flexbox, keyframe animations, and `@media (prefers-reduced-motion)`.
- **Vanilla JavaScript**: Pure ES6+, zero external libraries or frameworks (no jQuery, Bootstrap, React, Vue, or Tailwind).

---

## 📂 Folder Structure

```text
shruti-portfolio/
│
├── index.html                  # Main semantic HTML document
├── css/
│   └── style.css               # Complete custom stylesheet & responsive rules
├── js/
│   └── script.js               # Vanilla JS: navbar, scroll reveals, filters, lightbox
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # Hero portrait (maintain original appearance)
│   │   ├── about.jpg           # About section editorial portrait
│   │   └── projects/           # Curated cinematic project stills & posters
│   │       ├── project-film-1.jpg
│   │       ├── project-film-2.jpg
│   │       ├── project-song-1.jpg
│   │       ├── project-song-2.jpg
│   │       ├── project-short-1.jpg
│   │       ├── project-short-2.jpg
│   │       ├── project-bts-1.jpg
│   │       └── project-bts-2.jpg
│   └── videos/
│       └── README.txt          # Guide for adding local showreel/teaser mp4 files
└── README.md                   # Project documentation
```

---

## 🌐 Sections & Content Overview

### A. Navigation
- Brand name: **SHRUTI BHARTI** (with role tag: *Film Production & Creative Direction*).
- Navigation links: Home, About, Experience, Portfolio, Skills, Contact.
- Sticky transparent navbar that transitions to blurred frosted Midnight Navy on scroll.
- Fully accessible mobile hamburger drawer menu with smooth transition.

### B. Full-Screen Cinematic Hero
- **Left Column**:
  - Name: `SHRUTI BHARTI`
  - Roles: `Film Producer | Production Manager | Creative Director`
  - Quote: *"Turning creative visions into cinematic experiences."*
  - Champagne Gold call-to-actions: **Explore My Work** and **Contact Me**.
- **Right Column**:
  - Large professional portrait framed with gold offset borders.
  - Floating status badge: *"Visual Storyteller • Film & Song Shoots"*.
- **Scroll Indicator**: Elegant animated mouse scroll indicator at bottom.

### C. About Me (Warm Ivory Background)
- Two-column editorial layout with overlapping imagery and large typography watermark (`"VISION"`).
- Exact text:
  > *"I am Shruti Bharti, a creative professional passionate about filmmaking, production management and visual storytelling. My interests include managing film productions, coordinating song shoots and developing creative concepts into meaningful visual experiences.*
  >
  > *I believe every successful production begins with a strong vision, effective teamwork and thoughtful execution."*
- Three key pillars: **Creative Direction**, **Production Flow**, and **Team Harmony**.

### D. Professional Experience
- Premium vertical timeline with champagne gold markers and glowing nodes:
  - **2025–2026**: *Production Manager & Creative Director*
    - Film management and direction.
    - Song shoot management and direction.
    - Short film management and direction.
  - **2024–2026**: *Production Manager*
    - Song Shoot Film Production Management.

### E. Selected Works / Portfolio
- **Filter Tabs**: *All Projects*, *Films*, *Song Shoots*, *Short Films*, *Behind the Scenes*.
- Hover zoom animations, title overlays, category badges, and quick-view actions.
- Interactive **Image & Video Lightbox** supporting both high-res still photography and playable trailer previews.
- **Identifiable Editable Placeholders**: As instructed, no fake awards or unverified credits were fabricated. All items are clearly tagged as placeholders ready to be updated with Shruti's actual productions.

### F. Skills & Expertise (Warm Ivory Background)
- Featured skills with custom SVG icons:
  1. **Team Leadership**
  2. **Budgeting**
  3. **Problem Solving**
  4. **Decision Making**
  5. **Scheduling**
- Strictly respects the requirement: *no invented proficiency percentages*.

### G. Education
- Degree: **Animation – Filmmaking**
- University: **Swami Ramanand Teerth Marathwada University, Nanded**
- Duration: **2023–2026**
- Styled inside a luxury dark-slate banner with gold accents.

### H. Contact Section
- Heading: **Let's Create Something Amazing Together.**
- **Location**: Latur, Maharashtra, India.
- **Phone**: `+91 98XXX XXXXX` (`<!-- Update with phone number from resume -->`)
- **Email**: `contact.shrutibharti@gmail.com` (`<!-- Update with email from resume -->`)
- **Social Media**: Placeholders for Instagram and LinkedIn profiles.
- **Inquiry Form**: Form with scope selection (*Feature Film, Song Shoot, Short Film, Creative Consultation*) and a prominent Champagne Gold **"Let's Work Together"** button.

---

## 🚀 How to Run & Preview

### Method 1: Direct Browser Launch (Zero Installation)
Simply double-click [**`index.html`**](file:///c:/Users/hp/OneDrive/Desktop/port/index.html) or open it with Google Chrome, Firefox, Microsoft Edge, or Safari.

### Method 2: Local HTTP Server
```powershell
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve .
```
Then visit `http://localhost:8000`.

---

## ✏️ How to Customize with Personal Assets

1. **Replace Hero & About Photos**:
   - Save your original portrait as `assets/images/profile.jpg`.
   - Save your on-set photo as `assets/images/about.jpg`.
2. **Update Phone & Email**:
   - Open [**`index.html`**](file:///c:/Users/hp/OneDrive/Desktop/port/index.html).
   - Search for `+91 98XXX XXXXX` and update with your exact phone number.
   - Search for `contact.shrutibharti@gmail.com` and update with your exact email address.
3. **Add Real Projects**:
   - In `index.html`, locate the `<article class="portfolio-card">` elements under `#portfolio`.
   - Replace placeholder titles, descriptions, and point `data-full-img` or `src` to your production stills in `assets/images/projects/`.
   - To link a teaser video, add `data-video-src="assets/videos/your-clip.mp4"`.
