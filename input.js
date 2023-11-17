// Import key input constants
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, PRESS_Z, PRESS_X, PRESS_C } = require('./constants');

// Global variable for input commands
let connection;

// Listens for keyboard input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Interprets user input key commands
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    connection.write(MOVE_UP_KEY);
  } else if (key === '\u0061') {
    connection.write(MOVE_LEFT_KEY);
  } else if (key === '\u0073') {
    connection.write(MOVE_DOWN_KEY);
  } else if (key === '\u0064') {
    connection.write(MOVE_RIGHT_KEY);
  } else if (key === '\u007A') {
    connection.write(PRESS_Z);
  } else if (key === '\u0078') {
    connection.write(PRESS_X);
  } else if (key === '\u0063') {
    connection.write(PRESS_C);
  }
};

module.exports = { setupInput };