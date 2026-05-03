# 🚀 Team Task Manager (Full-Stack)

A full-stack web application that allows teams to manage projects, assign tasks, and track progress with role-based access (Admin / Member).

---

## 🌐 Live Demo

* 🔗 Frontend (Netlify):
  https://lively-sable-4b8b71.netlify.app/

* 🔗 Backend (Railway API):
  https://team-task-manager-production-7092.up.railway.app/

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure password handling

### 👥 Role-Based Access

* Admin: Full access (create projects, assign tasks)
* Member: Limited access (view & update assigned tasks)

### 📁 Project Management

* Create projects
* Add team members
* View project details

### 📌 Task Management

* Create tasks
* Assign tasks to users
* Update task status (Todo / In Progress / Done)

### 📊 Dashboard

* View all projects
* Track task progress
* Status-based task display

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)

### Deployment

* Frontend: Netlify
* Backend: Railway
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🚀 How to Run Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
npm start
```

👉 Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

Open new terminal:

```
cd frontend
npm install
npm start
```

👉 Frontend will run on:

```
http://localhost:3000
```

---

### ⚠️ Important

Update API URL in:

```
frontend/src/api/api.js
```

```
baseURL: "http://localhost:5000/api"
```

---

## 🚀 Deployment

### Frontend (Netlify)

* Built using `npm run build`
* Deployed via drag & drop (Netlify Drop)

### Backend (Railway)

* Connected via GitHub
* Auto-deploy enabled
* Environment variables configured

---

## 🔐 API Endpoints (Sample)

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Projects

* GET `/api/projects`
* POST `/api/projects`

### Tasks

* POST `/api/tasks`
* GET `/api/tasks/project/:id`
* PUT `/api/tasks/:id`

---

## 🧪 Testing

You can test APIs using:

* Postman
* Frontend UI

---

## 📈 Future Improvements

* Better UI/UX (modern design)
* Notifications system
* File attachments
* Team chat feature
* Advanced analytics dashboard

---

## 👨‍💻 Author

**Karan Yadav**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
