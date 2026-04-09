const EventEmitter = require("node:events")  //class

const emitter = new EventEmitter();  // object

//Event listner
emitter.on("greet",function(name){
    console.log(`Hello,${name}`)
})

emitter.emit("greet" , "Biruk")


