console.log('App');
const path = require('path');
const express = require('express');
const config = require('config');
const app = express();

app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
const PORT = config.get('PORT') || 5000;

// app.use('/api/message', require('./routes/routerMessage'));
// app.use('/', require('./routes/routerIndex')); dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
if (process.env.NODE_ENV === 'production') {
  // app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });

  console.log("production mode");
} else {
  console.log("development mode");
}
config.has();
async function start() {
  try {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
