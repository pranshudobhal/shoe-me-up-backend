const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRouter = require('./routers/product.router');
const cartRouter = require('./routers/cart.router');
const wishlistRouter = require('./routers/wishlist.router');
const { connectToDatabase } = require('./database/database');
const { addProductsToCollection } = require('./models/product.model');
const PORT = 3000;
const app = express();

app.use(bodyParser.json())
app.use(cors())

connectToDatabase();

// Run once when DB is empty
// addProductsToCollection();

app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/wishlist', wishlistRouter);


app.get('/', (req, res) => {
  res.json({ success: true, message: "ShoeMeUp API" })
});


app.use((req,res) => {
  res.status(404).json({ success: false, message: "Route does not exist!!!"})
})

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: 'Error occured on server side!!!', errMessage: err.message})
})


app.listen(PORT, () => {
  console.log('Server ONLINE and running at PORT ' + PORT);
});