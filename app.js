// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const { sequelize } = require('./models');
// const { engine } = require('express-handlebars');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const helmet = require('helmet');

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(express.json()); // Add this line to parse JSON data
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: true }));

// // Handlebars setup
// app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('view engine', 'hbs');

// // Static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// const postRoutes = require('./routes/postRoutes');
// const userRoutes = require('./routes/userRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const authRoutes = require('./routes/authRoutes');

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Social Media App!');
// });

// // Route handling
// app.use('/api/posts', postRoutes); // Ensure the route starts with /api
// app.use('/api/users', userRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/auth', authRoutes);

// // Sync database and start server
// sequelize.sync().then(() => {
//   app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
//   });
// }).catch(error => {
//   console.error('Unable to connect to the database:', error);
// });

// module.exports = app;


require('dotenv').config();
const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: process.env.JWT_SECRET || 'your_default_secret', resave: false, saveUninitialized: true }));

// Handlebars setup
app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media App!');
});

// Route handling
app.use('/api/posts', postRoutes); // Ensure the route starts with /api
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

module.exports = app;
