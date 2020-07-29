const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

  // conn.on('w', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('a', () => {
  //   conn.write('Move: left');
  // });

  // conn.on('s', () => {
  //   conn.write('Move: down');
  // });

  // conn.on('d', () => {
  //   conn.write('Move: down');
  // });
    
  return conn;
}

module.exports = {connect}; 