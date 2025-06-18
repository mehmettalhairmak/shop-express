import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  res.send('<h1>Products Page</h1>');
})

app.get('/add-product', (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});