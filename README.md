# Multi-Vendor E-Commerce Marketplace

A full-stack multi-tenant e-commerce platform (Gumroad-style) where vendors can create their own storefronts, sell digital products, and get paid through **Stripe Connect**.  
Built with **Next.js 15, Payload CMS, Stripe Connect, MongoDB, TailwindCSS v4, and ShadcnUI**.  

👉 **Live Demo**: [finess-gamma.vercel.app](https://finess-gamma.vercel.app/)

⚠️ **Note**: The project works perfectly in local development, but I am still fixing some issues on the deployed version.  

---

## ✨ Features

- 🏬 Multi-tenant architecture with vendor subdomains  
- 🎨 Custom merchant storefronts  
- 💳 Stripe Connect integration for payments and automatic platform fees  
- ⭐ Product ratings & reviews  
- 📚 User purchase library with secure file delivery  
- 🧑‍💼 Role-based access control (Admin & Merchant dashboards)  
- 🛠️ Product catalog with categories, search, and filtering  
- 🖼️ File and image uploads  
- 🎨 Modern UI with TailwindCSS v4 + ShadcnUI  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TailwindCSS v4, ShadcnUI  
- **Backend:** Payload CMS, MongoDB  
- **Payments:** Stripe Connect  
- **Other:** Git/GitHub, Vercel (deployment)  

---

## ⚙️ Installation & Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/Makar1o/Marketplace.git
   cd Marketplace
Install dependencies

npm/bun install


Create a .env.local file and add your environment variables:

- MONGODB_URI
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_KEY
- PAYLOAD_SECRET

Run the development server

npm/bun run dev 

Open http://localhost:3000
 in your browser.

🚀 Deployment

The app is deployed on Vercel:
👉 finess-gamma.vercel.app

Currently, I am working on fixing some deployment issues, but the local version is fully functional.

