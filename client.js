// Import net
const net = require("net");

// Import IP and PORT variables
const { IP, PORT } = require("./constants")

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Lets player know they have connected and puts initials above snake
  conn.on("connect", () => {
    console.log("Succesfully connected to the server!");
    console.log("Use 'wasd' to move");
    console.log("Press ctrl C to exit at any time");
    conn.write("Name: MG");
  })

  // conn.on("connnection", () => {
  //   console.log("Someone connected!");
  //   client.on("end", () => {
  //     console.log("Someone left!")
  //   })
  // })

  return conn;
};

module.exports = { connect };