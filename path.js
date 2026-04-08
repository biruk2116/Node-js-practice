const path=require("node:path")

// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

console.log(path.format(path.parse(__filename)))
console.log(path.format(path.parse(__dirname)))