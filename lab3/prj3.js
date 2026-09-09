import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
        const stream = createReadStream("index.html", {
            encoding: "utf-8"
        });

        stream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("prg3 is running");
});