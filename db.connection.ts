import mongoose from 'mongoose';

let databaseConnected = false;

export const connectDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI required');
    }
    if (!databaseConnected) {
      await mongoose.connect(process.env.MONGODB_URI);

      databaseConnected = true;
    }
  } catch (error) {
    console.error('Database connection failed', error);
  }
};
