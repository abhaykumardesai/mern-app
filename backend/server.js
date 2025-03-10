import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from '../routes/product.route.js';

dotenv.config();
 // Establish DB connection when the server starts

const app = express();

app.use(express.json());// allow us to use accept json data in the req.body

app.use('/api/products', productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Server is running at http://localhost:5000');
});
//last watch 36:28