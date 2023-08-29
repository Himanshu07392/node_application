const fs = require('fs')

// fs.readFile('./readFile.pdf', function(error, data){
//     if(error){
//         console.log('error in reading file ::', error)
//     }

//     console.log('read Data ::', data.toString())
// })

let rstream = fs.createReadStream('./readFile.pdf')
let wstream = fs.createWriteStream('./writeFile.pdf')

rstream.on('data', (chunkData)=>{
    console.log('chunk data ::', chunkData.toString())
})

rstream.pipe(wstream)
// rstream.pipe(wstream)

rstream.on('error', (error)=>{
    console.log('data ::', error)
})