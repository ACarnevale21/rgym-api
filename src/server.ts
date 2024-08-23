import express, { Application, Request, Response } from 'express';
import router from './modules/user/routes/user.router';
import userNavigation from './modules/user/routes/user.router';

const app: Application = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('HOla, world!');
});

app.get('/api', userNavigation);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api', router);
