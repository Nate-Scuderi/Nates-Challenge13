const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Additional routes for POST, PUT, DELETE...

module.exports = router;
