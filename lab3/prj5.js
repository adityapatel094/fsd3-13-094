import http from 'http'
import { url } from 'inspector';

const server = http,createServer((req, res) =>{

    // req method -> GET, POST, PUT, DELETE, PATCH
    console.log("Method:",req.mmethod);
    console.log("URL:",req,url);

    // Browser can send only GET request to the server 
    // POST/PUT/PATCH/DELETE -> can be checked  by api tester
    // API Tester:- postman, echo api, thunder client 


});