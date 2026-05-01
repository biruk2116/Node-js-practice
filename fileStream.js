const fs = require("node:fs");

const readableStream=fs.createReadStream("./text1.txt", "utf-8");

const writeablestream=fs.createWriteStream("./text.txt");

// readableStream.on("data",(chunk)=>

//     {console.log(chunk);

// writeablestream.write(chunk)
// })

//  and also we can use pipe method to write data from one file to another file

readableStream.pipe(writeablestream)