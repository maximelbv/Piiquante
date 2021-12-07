import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import saucesRoutes from './routes/sauces.js';

const app = express();

mongoose.connect('mongodb+srv://Maximelbv:azer@piiquante.s8orz.mongodb.net/Piiquante?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(() => console.log('Connexion à MongoDB échouée'));

// CORS middleware (Cross-origin resource sharing)
// autorise la compatibilité entre les ports
// a mettre dans config.js
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// regarder a quoi ça sert
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/sauces', saucesRoutes);

export default app; 