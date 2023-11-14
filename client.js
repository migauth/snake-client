const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  })

  conn.on("connect", () => {
    console.log("Succesfully connected to the server!");
  })

  conn.on("connect", () =>{
    conn.write("Name: MAG");  
    // setInterval(function() {
    //     conn.write("Move: up");
    //   }, 500)
  })

  
  
  


  return conn;
};

module.exports = connect;