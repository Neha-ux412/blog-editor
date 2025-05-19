const Blog = require('../models/Blog');

const blogController = {
  // Save or update draft
  saveDraft: async (req, res) => {
    try {
      const { id, title, content, tags } = req.body;
      
      if (id) {
        const blog = await Blog.findByIdAndUpdate(
          id,
          { 
            title, 
            content, 
            tags, 
            updated_at: Date.now() 
          },
          { new: true }
        );
        return res.json(blog);
      }

      const newBlog = new Blog({
        title,
        content,
        tags,
        status: 'draft'
      });
      
      await newBlog.save();
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Publish blog
  publish: async (req, res) => {
    try {
      const { id, title, content, tags } = req.body;
      
      const blog = await Blog.findByIdAndUpdate(
        id,
        { 
          title, 
          content, 
          tags, 
          status: 'published',
          updated_at: Date.now() 
        },
        { new: true }
      );
      
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all blogs
  getAll: async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ updated_at: -1 });
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get blog by ID
  getById: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = blogController;