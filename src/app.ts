import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import path from 'path';

const app = express();
const port = 3000;

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});