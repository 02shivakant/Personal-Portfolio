# 🚀 Shivakant Pandey — Developer Portfolio

A personal portfolio website built with **React**, showcasing my projects, skills, and a working contact form powered by EmailJS.

🔗 **Live Demo:** [Add your deployed URL here]

---

## 📸 Preview

> Add a screenshot of your portfolio here
> `![Portfolio Preview](./preview.png)`

---

## ✨ Features

- ⚡ Fast, responsive single-page React app
- 🎨 Brutalist design with custom CSS variables
- 📬 Working contact form via **EmailJS** (no backend needed)
- 🔗 Links to GitHub, LinkedIn, and email
- 📱 Mobile-friendly layout using Bootstrap grid

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Bootstrap | Responsive grid & layout |
| EmailJS | Contact form email delivery |
| CSS Variables | Custom theming & design tokens |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Contact.jsx      # Contact form with EmailJS
│   │   └── ...              # Other sections (Hero, About, Projects, etc.)
│   ├── App.jsx
│   └── index.js
├── .env                     # EmailJS keys (not committed)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/02shivakant/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`

---

## 📬 EmailJS Setup (Contact Form)

The contact form sends messages directly to my inbox using [EmailJS](https://www.emailjs.com/).

To run this locally with a working contact form:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (Gmail recommended)
3. Create an Email Template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Replace the following in `src/components/Contact.jsx`:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `/build` folder, ready to deploy on Vercel, Netlify, or GitHub Pages.

---

## 🌐 Deployment

This portfolio can be deployed easily on:

- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop the `/build` folder
- **GitHub Pages** — using `gh-pages` package

---

## 📞 Contact

| Platform | Link |
|---|---|
| 📧 Email | shivakant4582@gmail.com |
| 💼 LinkedIn | [shivakant-pandey](https://www.linkedin.com/in/shivakant-pandey-5a2b56270/) |
| 🐙 GitHub | [@02shivakant](https://github.com/02shivakant) |
| 📍 Location | Noida, India |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by Shivakant Pandey</p>
