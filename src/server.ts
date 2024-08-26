import express, { Application } from 'express';
import userNavigation from './modules/user/routes/user.router';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authNavigation from './modules/auth/routes/auth.router';
import exerciseNavigation from './modules/excercise/routes/exercise.router';
import trainerNavigation from './modules/trainer/routes/trainer.router';
import { middleware } from './middleware';

dotenv.config();

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(middleware);

app.use('/api', userNavigation);
app.use('/api', authNavigation);
app.use('/api', exerciseNavigation);
app.use('/api', trainerNavigation);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
