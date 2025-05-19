import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState({ drafts: [], published: [] });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => {
        const drafts = data.filter(blog => blog.status === 'draft');
        const published = data.filter(blog => blog.status === 'published');
        setBlogs({ drafts, published });
      })
      .catch(err => console.error('Failed to fetch blogs:', err));
  }, []);

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h2>My Blogs</h2>
        <button 
          className="create-blog-btn"
          onClick={() => navigate('/edit')}
        >
          Create New Blog
        </button>
      </div>

      <div className="drafts-section">
        <h3>Drafts</h3>
        {blogs.drafts.length === 0 ? (
          <p className="no-blogs">No drafts yet</p>
        ) : (
          blogs.drafts.map(blog => (
            <div key={blog._id} className="blog-item">
              <Link to={`/edit/${blog._id}`}>
                <h4>{blog.title || 'Untitled Draft'}</h4>
                <p>Last updated: {new Date(blog.updated_at).toLocaleDateString()}</p>
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="published-section">
        <h3>Published</h3>
        {blogs.published.length === 0 ? (
          <p className="no-blogs">No published blogs yet</p>
        ) : (
          blogs.published.map(blog => (
            <div key={blog._id} className="blog-item">
              <Link to={`/edit/${blog._id}`}>
                <h4>{blog.title}</h4>
                <p>Published: {new Date(blog.created_at).toLocaleDateString()}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;