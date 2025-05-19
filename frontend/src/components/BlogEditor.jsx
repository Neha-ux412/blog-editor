import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5000';

const BlogEditor = () => {
  const { id } = useParams(); // Get the ID from URL params
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    tags: '',
    status: 'draft'
  });
  
  const [saving, setSaving] = useState(false);

  // Debounced auto-save function
  const autoSave = useCallback(
    debounce(async (blogData) => {
      try {
        setSaving(true);
        const response = await fetch(`${API_BASE_URL}/api/blogs/save-draft`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData),
        });
        
        if (response.ok) {
          toast.success('Draft saved automatically');
        }
      } catch (error) {
        toast.error('Failed to save draft');
      } finally {
        setSaving(false);
      }
    }, 5000),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newBlog = { ...blog, [name]: value };
    setBlog(newBlog);
    autoSave(newBlog);
  };

  const handlePublish = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/publish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...blog,
          id: id  // Use id from useParams instead of blogId
        }),
      });

      if (response.ok) {
        toast.success('Blog published successfully');
        window.location.href = '/'; // Redirect to home page after publishing
      }
    } catch (error) {
      toast.error('Failed to publish blog');
    }
  };

  useEffect(() => {
    if (id) {  // Use id instead of blogId
      fetch(`${API_BASE_URL}/api/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
        .catch(err => toast.error('Failed to load blog'));
    }
  }, [id]);  // Update dependency

  return (
    <div className="blog-editor">
      <div className="editor-header">
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="title-input"
        />
      </div>
      
      <textarea
        name="content"
        value={blog.content}
        onChange={handleChange}
        placeholder="Write your blog content here..."
        className="content-input"
      />
      
      <input
        type="text"
        name="tags"
        value={blog.tags}
        onChange={handleChange}
        placeholder="Enter tags (comma-separated)"
        className="tags-input"
      />
      
      <div className="editor-actions">
        {saving && <span className="saving-indicator">Saving...</span>}
        <button onClick={() => autoSave(blog)} className="save-draft-btn">
          Save Draft
        </button>
        <button onClick={handlePublish} className="publish-btn">
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;