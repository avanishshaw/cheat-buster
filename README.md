# Cheat Buster 💔

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/react-^19.1.0-blue.svg?logo=react)](https://react.dev/)
[![Node.js Version](https://img.shields.io/badge/node-^20.x-green.svg?logo=node.js)](https://nodejs.org/)

An application to check if your partner might be on a... less than faithful... list of users. This project features a full-stack architecture with a Node.js/Express backend and a modern React frontend.

![Cheat Buster Demo GIF](httpss://github.com/user-attachments/assets/b0ef9dd1-86a5-4641-a237-ebd7772c930e)

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## About The Project

The "Cheat Buster" application was developed to provide a simple and intuitive interface for searching a database of users. It began as a vanilla JavaScript project and was later migrated to a full React application to enhance scalability, state management, and the overall developer experience. The backend is powered by Node.js and connects to a MongoDB Atlas database, with robust validation handled by Zod.

---

## Key Features

- ✅ **Search by Email:** Find out instantly if a user exists in the database.
- ✅ **Search by Name:** Broaden your search by looking for users by their first name.
- ✅ **Real-time Validation:** Invalid email formats are caught before the search is sent to the server.
- ✅ **Clear User Feedback:** The UI provides distinct messages for found users, safe users, and errors.
- ✅ **Loading State:** A smooth loading indicator prevents multiple submissions and informs the user that a search is in progress.
- ✅ **RESTful API:** A well-defined backend API serves the user data securely.

---

## Tech Stack

Here are the major frameworks and libraries used to build Cheat Buster:

| Frontend | Backend | Database |
| :--- | :--- | :--- |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) |
| ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white) | **Mongoose** |
| ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) | **Zod** (Validation) | **MongoDB Atlas** |
| **Axios** (API Calls) | **Dotenv** | |

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **MongoDB Atlas** account and a connection string (URI).

### Backend Setup

1. **Clone the repo**
   ```sh
   git clone [https://github.com/your-username/cheat-buster.git](https://github.com/your-username/cheat-buster.git)
   ```
2. **Navigate to the backend folder**
   ```sh
   cd cheat-buster/backend
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Create a `.env` file** in the `backend` folder and add your MongoDB connection string:
   ```env
   MONGO_URI="your_mongodb_connection_string_here"
   PORT=3000
   ```
5. **Seed the database** (This is a one-time step to populate the database with initial data):
   ```sh
   node seed.js
   ```
6. **Start the backend server**
   ```sh
   npm run dev
   ```
   Your backend API will be running on `http://localhost:3000`.

### Frontend Setup

1. **Open a new terminal**.
2. **Navigate to the frontend folder**
   ```sh
   cd cheat-buster/frontend
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **Start the frontend development server**
   ```sh
   npm run dev
   ```
   Your React app will open in your browser, likely at `http://localhost:5173`.

---

## Usage

Once both servers are running, you can test the application's functionality:

- **Found User:** Enter an email or name that exists in the database (e.g., `dylan.peck@example.com` or `dylan`).
  ![Found User](https://github.com/user-attachments/assets/53e2c7ea-2e5e-4a88-abaf-076d6c76019c)

- **User Not Found:** Enter an email or name that does not exist.
  ![Not Found User](https://github.com/user-attachments/assets/a5d51517-3789-4ace-82f8-e1cbbd639e74)

- **Invalid Input:** Enter an invalid email format to see the Zod validation in action.
  ![Invalid Email](https://github.com/user-attachments/assets/9e887e96-15c4-441e-853b-f81f1c999989)

---

## Project Structure

A monorepo structure is used to keep the frontend and backend code separate but within the same parent repository for easy management.

```
cheat-buster/
├── backend/
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── seed.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── userAPI.js
│   │   ├── components/
│   │   │   ├── Results.jsx
│   │   │   └── SearchForm.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.