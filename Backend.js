const http = require("http");
const server = http.createServer((req, res) => {

    // ✅ CORS
 res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // ✅ Handle OPTIONS
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    // ✅ USERS API
    if (req.url === "/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ users: ["Rahul", "Aman"] }));
    }

    // ✅ PRODUCTS API
    if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ products: ["Phone", "Laptop"] }));
    }

    // ✅ ORDERS API
    if (req.url === "/orders" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ orders: [101, 102] }));
    }

    // ❌ Not found
    res.writeHead(404);
    res.end("Not Found");

});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});