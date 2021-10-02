const meInfo = require("./userInformation");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${meInfo.firstName} and my campus is ${meInfo.campus} `,
    e : "oO",
    T : "U "
}));