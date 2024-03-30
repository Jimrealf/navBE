const fs = require("fs");
const http = require("http");

const homepageHtml = fs.readFileSync("./index.html");
const homepageStyles = fs.readFileSync("./styles.css");
const homepageLogo = fs.readFileSync("./logo.svg");
const homepageLogic = fs.readFileSync("./browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepageHtml);
    res.end();
  } else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homepageStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homepageLogo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homepageLogic);
    res.end();
  } else if (url === "/about.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>404, Resource Not Found</h1>");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server listening at port 8080");
});
