# 🌸 Perfume Shop – Full Stack Web Development Project

This project is built as part of a Web Development Internship Task.  
It includes a complete homepage, product details page, reviews system, image gallery, and backend API.

---

## 🚀 Tech Stack

### **Frontend**
- React.js  
- React Router  
- CSS / Responsive UI  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  

---

## 📌 Features

### 🏠 **Homepage**
- Responsive Navigation Bar  
- Call-to-Action Banner  
- Product Cards (image, name, price, description)  
- Hover Effects  
- Clicking a product takes you to the product page  

### 📦 **Product Page**
- Full product details  
- Multiple image gallery  
- Add & Read reviews  
- Share product button  
- Related products suggestions  

### 🖼 **Image Handling**
- Images stored in backend `/public/images`
- Served with Express static middleware  
- Products support multiple images  

### 💾 **Backend API**
| Route | Description |
|-------|-------------|
| `GET /api/products` | Fetch all products |
| `GET /api/products/:id` | Fetch product by ID |
| `POST /api/reviews` | Add review |
| `GET /api/reviews/:productId` | Fetch reviews for a product |

Seeder script included to insert demo products.

---

## ⚙️ **How to Run the Project**

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ganeshsamikeri/perfume.git
cd perfume
