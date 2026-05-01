const buffer = new Buffer.from("Biruk");

buffer.write("Bura"); // over write

console.log(buffer.toString())
// console.log(buffer);

// console.log(buffer.toJSON())