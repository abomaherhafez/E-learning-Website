const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const adminRoutes = require ('./server/routes/admin.routes');
const enseignantRoutes = require('./server/routes/enseignant.routes');
const etudiantRoutes = require('./server/routes/etudiant.routes');
const seanceRoutes = require('./server/routes/seance.routes');
const userRoutes = require('./server/routes/user.routes');

// const conf = require('./server/config/mongoose.config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  mongoose.connect('mongodb+srv://panzouz:1234@cluster0.k5zjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')); 
  app.use('/',adminRoutes);
  app.use('/',seanceRoutes);
  app.use('/',etudiantRoutes);
  app.use('/',enseignantRoutes);
  app.use(userRoutes);

  
  
 



module.exports = app;