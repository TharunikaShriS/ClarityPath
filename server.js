import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI, { dbName: 'pathfinder' })
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.log('❌ Database error:', err));

app.listen(5000, () => console.log('🚀 Server running on port 5000'));

mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'pathfinder' 
})