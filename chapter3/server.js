
const http= require("http");
const server= http.createServer((req, res)=>{

    console.log('welocme');
    // res.end('welcme t serve'+ req.url)
    switch (req.url) {
        case '/':
            res.end('welcme t serve! '+ req.url)
            
            
            break;
        case '/login':
            res.end('ma waxaad rabtaa login');  
            break;
        case '/regester':
            res.end('ma waxaad rabtaa regester') ;    
    
        default:
            break;
    }
    
});
server.listen(5000,"localhost",()=>{
    console.log('listening on port');
})

// const http = require('http');

// const server= http.createServer((req, res)=>{
//     console.log('welcome');
//     res.end('welcme t serve'+ req.url);
    
// });
// server.listen(5000,"localhost",()=>{
//     console.log('listening on port');
    
// });