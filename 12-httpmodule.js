//##http module
//createServer(callback function(incoming request,response(object)))
//listen(port number)

const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req);//returns a giant object which contains useful information
    // res.write("welcome to our home page");
    // res.end();
    if(req.url==='/'){
        res.end('Welcome to our home page');
    }
    if(req.url==='/about'){
        res.end('Here is our short history');
    }
    //If an user is trying to access a resource that doesn't exist
    //on our server
    res.end(`
     <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`
    
    )
});

server.listen(4000);