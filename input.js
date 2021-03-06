let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = function (data){
  if (data === '\u0003') {
    process.exit();
  }
  console.log(data);

  if (data === 'w') {
    connection.write('Move: up');
  }

  if (data === 'a') {
    connection.write('Move: left');
  }

  if (data === 's') {
    connection.write('Move: down');
  }

  if (data === 'd') {
    connection.write('Move: right');
  }

  if (data === 'q') {
    connection.write('Say: I\'m winning thisss!');
  }

  if (data === 'z') {
    connection.write('Say: I\'m the fastessst!');
  }

}

module.exports = {setupInput};