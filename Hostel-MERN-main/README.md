# 🏫 Hostel Management System

<div align="center">

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)
![Node Version](https://img.shields.io/badge/Node-v18%2B-brightgreen?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=for-the-badge&logo=mongodb)

A powerful and intuitive **Hostel Management System** designed to streamline hostel operations and enhance communication between administrators and students.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API Endpoints](#-api-endpoints) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Login Credentials](#-login-credentials)
- [Key Features Explained](#-key-features-explained)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication
- **Secure Login/Signup** with JWT-based authentication
- Role-based access control (Admin, Student)
- Password encryption with bcryptjs

### 👨‍💼 Admin Panel
- ✅ Register new students
- ✅ Mark and manage attendance
- ✅ Handle student complaints
- ✅ Manage mess operations and meal tracking
- ✅ Generate invoices and payment records
- ✅ Review and manage student suggestions
- ✅ View comprehensive reports and analytics

### 👨‍🎓 Student Panel
- ✅ View personal attendance records
- ✅ Request mess off/exemptions
- ✅ View invoice details and payment status
- ✅ Submit complaints to administration
- ✅ Submit suggestions and feedback
- ✅ Track personal academic records

### 🤖 Additional Features
- **AI Chatbot Integration** - FastAPI-powered chatbot proxy for student support
- **Data Export** - JSON to CSV conversion for reports
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Real-time Updates** - Dynamic data visualization with Chart.js and Recharts

---

## 🛠 Tech Stack

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router v6** | Client-side routing |
| **Chart.js & Recharts** | Data visualization |
| **Heroicons** | Icon library |
| **EmailJS** | Email notifications |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js & Express.js** | Server framework |
| **MongoDB & Mongoose** | NoSQL database |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **CORS** | Cross-origin requests |
| **json2csv** | Report generation |
| **Nodemon** | Development auto-reload |

### **DevOps & Tools**
- **Git** - Version control
- **npm** - Package management
- **concurrently** - Run multiple processes
- **Vite** - Frontend bundling

---

## 📁 Project Structure

```
Hostel-MERN-main/
├── backend/                          # Express.js Server
│   ├── controllers/                  # Business logic
│   │   ├── adminController.js
│   │   ├── studentController.js
│   │   ├── authController.js
│   │   ├── attendanceController.js
│   │   ├── complaintController.js
│   │   ├── invoiceController.js
│   │   ├── messoffController.js
│   │   ├── requestController.js
│   │   └── suggestionController.js
│   ├── models/                       # Database schemas
│   │   ├── User.js
│   │   ├── Student.js
│   │   ├── Admin.js
│   │   ├── Attendance.js
│   │   ├── Complaint.js
│   │   ├── Invoice.js
│   │   ├── MessOff.js
│   │   ├── Request.js
│   │   └── Suggestion.js
│   ├── routes/                       # API endpoints
│   ├── utils/                        # Helper functions
│   └── index.js                      # Server entry point
│
├── client/                           # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Dashboards/
│   │   │   │   ├── AdminDashboard/
│   │   │   │   ├── StudentDashboard/
│   │   │   │   └── Common/
│   │   │   └── LandingSite/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── mongoCollections/                 # Sample data files
│   ├── hostel.users.json
│   ├── hostel.students.json
│   ├── hostel.admins.json
│   └── ...
│
└── package.json                      # Root package config
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** v18 or higher
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[MongoDB](https://www.mongodb.com/try/download/community)** v4.4 or higher
- **Git** for cloning the repository

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/Hostel-MERN.git
cd Hostel-MERN-main
```

### Step 2: Install Root Dependencies

```bash
npm install -g concurrently
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### Step 4: Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

### Step 5: Install All Dependencies (Alternative)

```bash
# From root directory
npm install  # Install root dependencies
cd backend && npm install && cd ..
cd client && npm install && cd ..
```

---

## 🗄 Database Setup

### 1. Start MongoDB

```bash
# On Linux/Mac
mongod

# On Windows
# Run MongoDB from Services or use mongosh
```

### 2. Create Database and Import Collections

```bash
# Connect to MongoDB
mongosh

# Create database and switch to it
use hostel

# Import collections (exit mongosh first)
# Run these commands from the project root:
mongoimport --db hostel --collection users --file mongoCollections/hostel.users.json --jsonArray
mongoimport --db hostel --collection students --file mongoCollections/hostel.students.json --jsonArray
mongoimport --db hostel --collection admins --file mongoCollections/hostel.admins.json --jsonArray
mongoimport --db hostel --collection attendances --file mongoCollections/hostel.attendances.json --jsonArray
mongoimport --db hostel --collection complaints --file mongoCollections/hostel.complaints.json --jsonArray
mongoimport --db hostel --collection invoices --file mongoCollections/hostel.invoices.json --jsonArray
mongoimport --db hostel --collection messoffs --file mongoCollections/hostel.messoffs.json --jsonArray
mongoimport --db hostel --collection requests --file mongoCollections/hostel.requests.json --jsonArray
mongoimport --db hostel --collection suggestions --file mongoCollections/hostel.suggestions.json --jsonArray
mongoimport --db hostel --collection hostels --file mongoCollections/hostel.hostels.json --jsonArray
```

---

## 🔒 Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
# MongoDB Configuration
MONGO_URI="mongodb://127.0.0.1:27017/hostel"

# JWT Configuration
JWT_SECRET="Anappleadaykeepsthedoctoraway"

# Server Port (optional, defaults to 3000)
PORT=3000
```

**⚠️ Important:** Never commit the `.env` file to version control. Add it to `.gitignore`.

---

## ▶️ Running the Application

### Development Mode (Recommended)

Run both backend and frontend concurrently:

```bash
npm run dev
```

This will start:
- **Backend Server**: http://localhost:3000
- **Frontend Application**: http://localhost:5173

### Individual Processes

```bash
# Terminal 1 - Start Backend Server
npm run server
# or
cd backend && npm start

# Terminal 2 - Start Frontend Development Server
npm run client
# or
cd client && npm run dev
```

### Production Build

```bash
# Build frontend
cd client
npm run build

# Start backend server
cd ../backend
npm start
```

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/signup` | User registration |
| GET | `/api/auth/verify` | Verify JWT token |

### Student Routes (`/api/student`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/student/profile` | Get student profile |
| GET | `/api/student/attendance` | Get attendance records |
| GET | `/api/student/invoices` | Get invoice details |

### Admin Routes (`/api/admin`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/register-student` | Register new student |
| POST | `/api/admin/mark-attendance` | Mark attendance |
| GET | `/api/admin/reports` | Generate reports |

### Complaints Routes (`/api/complaint`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/complaint/create` | Submit complaint |
| GET | `/api/complaint/all` | Get all complaints |
| PUT | `/api/complaint/:id` | Update complaint status |

### Invoice Routes (`/api/invoice`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/invoice/all` | Get all invoices |
| POST | `/api/invoice/generate` | Generate invoice |

### Mess Off Routes (`/api/messoff`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/messoff/request` | Request mess off |
| GET | `/api/messoff/history` | Get mess off history |

### Attendance Routes (`/api/attendance`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/attendance/mark` | Mark attendance |
| GET | `/api/attendance/records` | Get attendance records |

### Suggestion Routes (`/api/suggestion`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/suggestion/create` | Submit suggestion |
| GET | `/api/suggestion/all` | Get all suggestions |

### Chatbot Proxy (`/chatbot`)
- Proxies requests to FastAPI chatbot service

---

## 🔑 Login Credentials

Use the following credentials to test the application:

### Admin Account
```
Email: Ammar@gmail.com
Password: 123456789
```

### Student Account
```
Email: shoaib@gmail.com
Password: 12345678
```

---

## 🎯 Key Features Explained

### 📊 Dashboard Analytics
- Real-time attendance statistics
- Invoice payment tracking
- Complaint resolution timeline
- Student engagement metrics

### 📧 Email Integration
- Automated notifications using EmailJS
- Event-based alerts (complaint updates, invoice generation)
- Newsletter support

### 📈 Reports & Export
- Convert data to CSV format using json2csv
- Generate printable reports
- Download attendance sheets and invoices

### 🤖 AI Chatbot
- FastAPI-powered backend
- Proxy integration via Express.js
- Student support and FAQ assistance

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes before submission
- Update documentation if needed

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shoaib Akhter** - Backend Development

---

## 🙏 Acknowledgments

- MERN stack community
- MongoDB for the excellent database
- Tailwind CSS for utility-first styling
- All contributors and testers

---

## 📞 Support

For support, email: shoaibamreen01@gmail.com or open an issue on GitHub.

---

<div align="center">

### Made with ❤️ by the Development Team

⭐ If you find this project helpful, please consider giving it a star!

</div>



