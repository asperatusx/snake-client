const net = require('net');

const config = {
  host: 'localhost',
  port: 2021
}

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection(config)

    // interpret incoming data as text
    conn.setEncoding("utf8");


  return conn;
}

console.log('Connecting...')
connect();