const net = require('net');

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

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: right');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: right');
  // });

  // conn.on('connect', () => {
  //   conn.write('Move: down');
  // });
    
  return conn;
}

module.exports = {connect}; 