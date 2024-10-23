const net = require('net');

const config = {
  host: 'localhost',
  port: 50541
}

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection(config)

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data)
  })



  return conn;
}

console.log('Connecting...')
connect();