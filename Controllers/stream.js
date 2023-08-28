const fs = require('fs')

fs.readFile('./readFile.pdf', function(error, data){
    if(error){
        console.log('error in reading file ::', error)
    }

    console.log('read Data ::', data.toString())
})