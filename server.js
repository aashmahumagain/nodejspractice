const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {
    res.write("Hello first!");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
