const wilder = require('./information')
const cowsay = require('cowsay')

console.log(cowsay.say({
    text : "I'm " + wilder.name + " from " + wilder.campus +" campus. EXTERMINATE !",
    e : "øø",
    T : "VV ",
    f: "dalek-shooting"
}));