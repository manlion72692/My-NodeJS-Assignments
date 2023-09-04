var http = require("http");
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url === "/welcome"){
        res.writeHead(200, {'content-Type': 'text/plain'});
        res.end("Welcome to Dominos!")
    } else if(req.url === "/contact") {
        res.writeHead(200, {'content-Type': 'application/json'})
        // res.status(200).json({
        //     'phone' : '18602100000',
        //     'email' : 'guestcaredominos@jublfood.com' 
        // })
        const ContactInfo = {
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.end(JSON.stringify(ContactInfo));
    } else {
        res.writeHead(404, {"content-Type": 'text/plain'});
        res.end('404 Page Not Found')
    }
}
httpServer.listen(8081, () => {console.log("server is up at 8081")});
module.exports = httpServer;