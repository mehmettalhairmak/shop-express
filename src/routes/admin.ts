import express from 'express';
import path from 'path';
import rootDir from '../util/path';

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  res.redirect('/');
});

export default router;
