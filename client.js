const net = require('net');

const config = {
  host: 'localhost',
  port: 50541
}

// establishes a connection with the game server
const connect = function() {
  console.log('Connecting...')
  const conn = net.createConnection(config)

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("successfully connected to server")
    conn.write('Name: AL');
  })
  
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
}

module.exports = connect;

/* Movement commands
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/