const fs = require("fs");
const http = require("http");

fs.writeFile("index.html", `<h1> Hello World </h1>
<p> This is Narasimha.... </p>`, () => { console.log() });

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
    })
})

server.listen(5000, () => console.log("server is up at 5000"));