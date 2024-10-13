// const fs = require('fs')
// const readStream  = fs.createReadStream('./samle.csv')
// readStream.setEncoding('utf-8')
// readStream.on('data',(data)=>{
//     console.log(data);
    
// })
const fs = require('fs')
const readStream= fs.createReadStream('./samle.csv')
readStream.setEncoding('utf-8')
readStream.on('data',(data)=>{
    console.log(data);
    
})
 