# 🧾 Customer Points System Admin Panel

A responsive admin dashboard built with **React**, **Tailwind CSS**, and **Framer Motion**, designed to manage customer rewards, promos, and redemption logs efficiently.

## 🚀 Features

### 👤 Admin / Operator Views

- View and manage **clients**
- Add / edit / soft-delete **promos**
- View and manage **redeem logs**
- Toggle **dark/light themes**
- Responsive **sidebar with animations**

### 📱 Client View (Planned)

- Scan QR to view total & remaining points
- View redeem history
- Download printable QR code

---

## 📁 Project Structure

```
src/
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── SidebarUserInfo.jsx
│   └── ThemeToggle.jsx
├── context
│   └── ThemeContext.jsx
├── index.css
├── layouts
│   └── Layout.jsx
└── main.jsx
```

---

## ⚙️ Tech Stack

- **React** (Functional Components)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Animations)
- **React Router** (Routing)
- **Vite** (Bundler & Dev Server)

---

## 🌓 Dark Mode

- Toggleable via button (☀️ / 🌙)
- Smooth transitions with `transition-all`
- Fully supported across all components

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## ✨ Coming Soon

- Client QR scanning support
- Time In/Out logging
- Points calculation
- API integration with backend (Node.js + Kysely + MySQL)

---

## 🤝 Contributing

Feel free to fork and submit pull requests to help improve the system. Let's build something awesome together!

---

## 📄 License

This project is licensed under [MIT](LICENSE).
