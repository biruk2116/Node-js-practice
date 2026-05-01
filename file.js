           const fs = require("node:fs") 



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

        
//  

// const data = fs.appendFile("./text.txt"," adding file in the existing file ",(error) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("File updated successfully")
//     }
// }
// );
//              

// const data = fs.writeFile("./text.txt"," Removing and replacing the whole content with new content ",(error) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("File updated successfully")
//     }
// }
// );
            //  deleting file using unlink



const data = fs.unlink("./new.txt",(error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("File deleted successfully")
    }
}
);
            //  renaming file using rename
            
// const data = fs.rename("./delete.txt","./new.txt",(error) => {
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("File renamed successfully")
//     }
// }
// );