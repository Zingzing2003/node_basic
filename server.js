const http= require('http');

const server = http.createServer((req,res)=>{
    console.log('run reqyest');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello Wolrd!</h3>');
    res.end();
})
server.listen(3000,'localhost',()=>{
    console.log('run 3000');
})