// Import connect function
const { connect } = require('./client');

// Improt setupInput function
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());