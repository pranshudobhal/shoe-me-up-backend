const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const productRouter = require('./routers/product.router');
const cartRouter = require('./routers/cart.router');
const wishlistRouter = require('./routers/wishlist.router');
const loginRouter = require('./routers/login.router');
const signupRouter = require('./routers/signup.router');
const userRouter = require('./routers/user.router');
const paymentRouter = require('./routers/payment.router');

const { connectToDatabase } = require('./database/database');
const { addProductsToCollection } = require('./models/product.model');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const { verifyAuth } = require('./authentication');

connectToDatabase();

// Run once when DB is empty
// addProductsToCollection();

app.get('/', (req, res) => {
  res.json({ success: true, message: 'ShoeMeUp API' });
});

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/products', productRouter);

app.use(verifyAuth);
app.use('/cart', cartRouter);
app.use('/wishlist', wishlistRouter);
app.use('/user', userRouter);
app.use('/payment', paymentRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route does not exist!!!' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Error occured on server side!!!', errMessage: err.message });
});

app.listen(port, () => {
  console.log('Server ONLINE and running at PORT ' + port);
});
