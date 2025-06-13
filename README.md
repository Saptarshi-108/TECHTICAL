# TECHTICAL — War, Geopolitics & Global Insight Blog

TECHTICAL is a full-stack web platform focused on exploring **warfare**, **geopolitics**, **military strategies**, and their **humanitarian consequences**. This website serves as an open resource for readers and researchers alike who wish to understand global conflicts, defense technology, and historical battle analytics.

Readers can browse detailed articles, view interactive media (images, videos, audio), and leave authenticated comments. Admins can create, update, and manage blogs using a full-featured WYSIWYG editor.

---

## 🔗 Live Demo

> [TECHTICAL - Live Website Link](https://techtical.vercel.app/)

---

## 📌 Features

### ✅ Public (Reader) Features

- View all published blogs with title, cover image & date
- Click to read full blog content (formatted with TinyMCE WYSIWYG)
- Read existing comments on each blog
- Login / Register as user (JWT-based)
- Leave comments (only when logged in)
- Responsive layout (mobile + desktop)
- Newsletter subscribe form (UI only)

---

### 🔐 Admin Features

- Admin login & protected dashboard
- Create blogs with:
  - Title
  - Rich content (HTML via TinyMCE)
  - Cover image + optional media uploads (images/videos/audio)
- Edit / Delete existing blogs
- See all submitted blogs in a list view
- Tags classification support (horror, bravery, NSFW etc.)
- Role-based access (`admin` vs `reader`)
- JWT Auth-protected routes

---

### 🛠️ Features in Progress / To Be Added

- Search bar for blog titles / tags
- Like / dislike per blog
- Blog view count tracking
- Save drafts (admin)
- Forgot password / email verification
- Admin media library
- Comment moderation / reporting
- Newsletter integration (backend)

---

## ⚙️ Tech Stack

### 🧠 Frontend
- React.js (with Vite)
- React Router
- TinyMCE (Rich Text Editor)
- Axios
- Tailwind / Custom CSS
- React Scroll (smooth scroll)
- Hosted on **Vercel**

### 🧱 Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (authentication)
- Bcrypt.js
- Multer (media upload)
- Hosted on **Render**

---

## 📂 Folder Structure
my-blog/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── admin/
│ │ └── context/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── uploads/
│ └── server.js


---

## 🔧 Setup Instructions

### 🖥️ Clone Repo

git clone https://github.com/Saptarshi-108/TECHTICAL
cd TECHTICAL

### 📦 Backend

cd backend
npm install

#### Create .env file
touch .env
.env sample
env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/mil-blog
JWT_SECRET=your_secret_key

Start backend:
npm run dev

### 🌐 Frontend
cd frontend
npm install
Start frontend:
npm run dev


## 🤝 Contributions
Pull requests welcome! If you'd like to suggest features or report bugs, use Issues.

## 🛡 License
This project is licensed under MIT License.

## 📧 Contact
Developer: Me 

