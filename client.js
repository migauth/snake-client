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

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  })

  // Lets player know they have connected and puts initials above snake
  conn.on("connect", () =>{
    console.log("Succesfully connected to the server!");
    conn.write("Name: MG");  
    // setInterval(function() {
    //     conn.write("Move: up");
    //   }, 500)
  })


  //conn.on("connnection", () => {
  //  console.log("Someone connected!");
  /**
   * client.on("end", () => {
   *  console.log("Someone left!")
   * })
   */
  //})
  
  
  


  return conn;
};

module.exports = { connect };