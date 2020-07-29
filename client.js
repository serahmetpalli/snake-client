const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', function(data){
    console.log(data);
  });

  conn.on('connect', function(){
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: SSS');
  });
 
  
  return conn;
}

module.exports = {connect}; 