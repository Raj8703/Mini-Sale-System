# Mini-Sale-System
Mini Sales Order System (Inventory Aware)
 Project Overview
A basic sales order system with inventory awareness, built with the MERN stack (MongoDB, Express, React, Node.js).

Features include:
Add and list products with stock management.
Place orders while validating stock availability.
Reduce product stock automatically after orders.
Display success/error messages and fun confetti animations.
This simulates real-world ERP logic for sales and inventory management.

Features
Backend

Add product: POST /api/products
List products: GET /api/products
Place order: POST /api/orders
Validates quantity against stock.
Automatically reduces stock after successful order.
Returns proper JSON error messages.

Frontend
Product List Page: Displays product name, price, and available stock.
Add Product Page: Form to add new products with validation.
Create Order Page: Form for customer orders with product selection.
Fully styled with Tailwind CSS.


1.Setup Backend
cd backend
npm install
Create a .env file in backend:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start backend server:
npm run dev

2.Setup Frontend
cd ../frontend
npm install
npm run dev

Frontend runs on http://localhost:5173 (Vite default)
Make sure backend is running on http://localhost:5000



Folder Structure
mini-sales-order/
├─ backend/
│  ├─ config/
│  │  └─ db.js
│  ├─ controllers/
│  │  ├─ productController.js
│  │  └─ orderController.js
│  ├─ models/
│  │  ├─ Product.js
│  │  └─ Order.js
│  ├─ routes/
│  │  ├─ productRoutes.js
│  │  └─ orderRoutes.js
│  ├─ server.js
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ pages/
│  │  │  ├─ ProductList.jsx
│  │  │  ├─ CreateProduct.jsx
│  │  │  └─ CreateOrder.jsx
│  │  ├─ services/
│  │  │  └─ api.js
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ package.json
│  └─ tailwind.config.js
└─ README.md
