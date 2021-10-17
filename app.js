console.log('App');
const path = require('path');
const express = require('express');
const config = require('config');
const app = express();
const kill = require('kill-port');

app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
const PORT = config.get('PORT') || 5000;
app.use('/test', require('./routes/routerTest'));
app.use('/api/message', require('./routes/routerMessage'));

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

kill(PORT, 'tcp')
  .then((d) => {
    /**
 * Create HTTP server.
 */
    // server = http.createServer(app);

    // server.listen(port, () => {
    //     console.log(`api running on port:${port}`);
    // });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  })
  .catch((e) => {
    console.log('Server Error', e.message);
    process.exit(1);
  })

// async function start() {
//   try {
//     app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
//   } catch (e) {
//     console.log('Server Error', e.message);
//     process.exit(1);
//   }
// }

// start();

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })

//   res.end('Hi!')
// })

// server.listen(port, () => {
//   setTimeout(() => {

//     // Currently you can kill ports running on TCP or UDP protocols
//     kill(port, 'tcp')
//       .then(console.log)
//       .catch(console.log)
//   }, 1000)
// })
