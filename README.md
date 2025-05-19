# Blog Editor

A modern, real-time blog editor with auto-save functionality built using the MERN stack (MongoDB, Express.js, React, Node.js).
---------------------------------------------------
## Features

- ✨ Real-time auto-saving
- 📝 Draft and published blog management
- 🏷️ Tag support
- 💫 Modern, responsive UI
- 🔄 Seamless editing experience
---------------------------------------------------
## Tech Stack

### Frontend
- React (with Vite)
- React Router for navigation
- React-Toastify for notifications
- Lodash for debouncing
- Modern CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Mongoose for ODM
---------------------------------------------------
## Prerequisites

Before running this project, make sure you have:
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager
---------------------------------------------------
## Setup Instructions

1. Clone the repository
open your cmd:
   git clone <repo-url>
   cd blog-editor
2. Backend setup
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your configuration
# Example .env content:
# MONGODB_URI=mongodb://localhost:27017/blog-editor
# PORT=5000

# Start the backend server
npm run dev
3. Frontend setup
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
4. Access the application at http://localhost:5173
---------------------------------------------------
Project structure
blog-editor/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    └── package.json
---------------------------------------------------
## API Endpoints
- POST /api/blogs/save-draft - Save or update a draft
- POST /api/blogs/publish - Save and publish an article
- GET /api/blogs - Retrieve all blogs
- GET /api/blogs/:id - Retrieve a blog by ID
---------------------------------------------------
## Features in Detail
1. Auto-Save :
   
   - Automatically saves drafts every 5 seconds after changes
   - Visual indicator when saving
2. Blog Management :
   
   - Create new blogs
   - Save drafts
   - Publish blogs
   - View all blogs categorized by status
3. User Interface :
   
   - Clean, modern design
   - Responsive layout
   - Intuitive navigation
   - Real-time feedback
---------------------------------------------------
## License
This project is licensed under the MIT License - see the LICENSE file for details.
---------------------------------------------------
