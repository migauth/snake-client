// Global variable for input commands
let connection;

// 
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
  }
  if (key === '\u0077') {
    connection.write("Move: up")
    console.log("Snake moved up!");
  }
  if (key === '\u0061') {
    connection.write("Move: left")
    console.log("Snake moved left!");
  }
  if (key === '\u0073') {
    connection.write("Move: down")
    console.log("Snake moved down!");
  }
  if (key === '\u0064') {
    connection.write("Move: right")
    console.log("Snake moved right!");
  }
  if (key === '\u007A') {
    connection.write("Say: You're going down!")
  }
  if (key === '\u0078') {
    connection.write("Say: Eat dust.")
  }
  if (key === '\u0063') {
    connection.write("Say: Get outta here!")
  }
};

module.exports = { setupInput };