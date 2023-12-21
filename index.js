const http = require('http');
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal, orgVal)=>{
    let temperature = tempval.repalce("{%tempval%}",orgVal.main.temp)
}

const server =http.createServer((req,res)=>{
    if(req.url =="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=2f58404f59342e36636e5c837f385793')

        .on('data', function (chunk) {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
        // console.log(arrData[0].main.temp/10);
            const realTimeData = arrData.map((val)=>{
                replaceVal(homeFile,val);
            })



        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
 
          console.log('end');
        });
    }
});

server.listen(8000,"127.0.0.1");