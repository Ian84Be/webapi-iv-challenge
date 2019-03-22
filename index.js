require('dotenv').config();

const server = require('./server.js');

const port = process.env.PORT || 5555;
const greeting = process.env.GREETING || 'hullo';

server.listen(port, () => {
  console.log(`\n* ${greeting} This is Port ${port} *\n`);
});