const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Blog routes
router.post('/save-draft', blogController.saveDraft);
router.post('/publish', blogController.publish);
router.get('/', blogController.getAll);
router.get('/:id', blogController.getById);

module.exports = router;