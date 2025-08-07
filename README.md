# 🚀 MERN App

*A simple full-stack CRUD application built using the MERN stack (MongoDB, Express, React, and Node.js).*

---

## 📚 Table of Contents

- 📖 About the Project
- ✨ Features
- 🛠️ Technologies Used
- 🚀 Getting Started
  - ✅ Prerequisites
  - ⚙️ Installation
- ▶️ Running the Application
- 🌐 API Endpoints
- 📁 Project Structure

---

## 📖 About the Project

This is a basic MERN CRUD app built to demonstrate the core functionality of:

- 🗃️ Creating, reading, updating, and deleting records
- 🔄 Seamless interaction between front-end and back-end
- 🧑‍💻 Hands-on experience in full-stack development

> _Example:_  
> A simple item manager where users can add, view, edit, and delete data like tasks, posts, or products.

---

## ✨ Features

- ✅ Create new records
- 🔍 View all records
- ✏️ Edit existing records
- 🗑️ Delete records
- 📦 RESTful API integration

---

## 🛠️ Technologies Used

- **MongoDB** – NoSQL Database
- **Express.js** – Backend Framework
- **React.js** – Front-end Library
- **Node.js** – Backend Runtime Environment
- **Others**: Mongoose, Axios, Bootstrap or Tailwind CSS

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running:

### ✅ Prerequisites

- [Node.js & npm](https://nodejs.org/)
- [MongoDB or MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/abhaykumardesai/mern-app.git

# 2. Navigate to the project folder
cd mern-app

# 3. Install backend dependencies
npm install

# 4. Navigate to the client and install front-end dependencies
cd client
npm install

# 5. Return to the root directory
cd ..

```
## ▶️ Running the Application
Once all dependencies are installed, follow these steps to run both the backend and frontend:
### 🖥️ Backend (Server)
From the root directory
```bash
npm run server
```
> This will start the backend server (usually on http://localhost:5000)

### 🌐 Frontend (Client)
From the /client directory
```bash
cd client
npm start
```
> This will launch the React app in your default browser at http://localhost:3000


## 🌐 API Endpoints

Here are some common RESTful endpoints used in the backend:

| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/items`     | Fetch all items         |
| POST   | `/api/items`     | Create a new item       |
| PUT    | `/api/items/:id` | Update an existing item |
| DELETE | `/api/items/:id` | Delete an item          |

> These endpoints interact with MongoDB via Mongoose and return JSON responses.

## 📁 Project Structure

```plaintext
mern-app/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Page-level components
│       ├── App.js        # Main React app file
│       └── index.js      # Entry point for React
├── models/               # Mongoose schemas
│   └── Item.js
├── routes/               # Express route handlers
│   └── items.js
├── .env                  # Environment variables (e.g., DB URI, port)
├── server.js             # Entry point for the backend
├── package.json          # Backend dependencies and scripts
├── README.md             # Project documentation






