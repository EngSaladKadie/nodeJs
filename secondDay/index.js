

const { log } = require('console')
const fs = require('fs')

// fs.readFile('./sam.txt',(err,date)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(date.toString());
// })

// fs.readFile('./sam.txt',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return
        
        
//     }
//     console.log(data.toString());
    

    
// });

data= "waxaad ku badahsaa midkaan adigo raali ah";
fs.writeFile('./sam.txt',data,(err)=>{
    if (err) {
        console.log(err);
        
        
    }
  console.log(data);
  

})


// date= 'welecn t anther exam'
// fs.writeFile('./sam.txt',date,(err)=>{
//     if(err){
//         console.log(err);
//     }
    
// })

