// const {error} =require("node:console");

// const fs = require("node:fs")

// const data = fs.readFileSync("./texte.txt","utf-8",(error,data) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// }
// );
// console.log(tex);  
                     //   Creating new file  using writeFile and appendFile
  
// const fs = require("node:fs")

// const data = fs.writeFile("./text1.txt","New file created using node js ",(error) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("File created successfully")
//     }
// }
// );
            // Updating file using appendFile and writeFile

        
 const fs = require("node:fs")

const data = fs.appendFile("./text.txt"," adding file in the existing file ",(error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("File updated successfully")
    }
}
);