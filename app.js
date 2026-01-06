import express from 'express';
import contactsRoutes from './routes/contacts.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'CSE 341 API running' });
});

// 👇 THIS LINE IS REQUIRED
app.use('/contacts', contactsRoutes);

export default app;
