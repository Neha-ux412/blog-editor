import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogEditor from './components/BlogEditor'
import BlogList from './components/BlogList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';  // Add this line

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Blog Editor</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/edit/:id?" element={<BlogEditor />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
