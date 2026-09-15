const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get('/dashboard', (req, res) => {
    const indicators = {
        activeTotal: 48,
        inMaintenance: 7,
        preventiveMaintenance: 2
    };
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(indicators));
    return;
            
});

app.listen(3000);


// const http = require("http");
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     console.log("Método:", req.method);
//     console.log("URL:", req.url);
//     if (req.url === "/"){
//         res.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//         res.end("API do sistema de manutenção blz, eoq?");
//         return;
//     }

//     if (req.url === "/dashboard"){
//         const indicators = {
//             activeTotal: 48,
//             inMaintenance: 7,
//             preventiveMaintenance: 2
//         };
//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         });
//         res.end(JSON.stringify(indicators));
//         return;
//     }
//     res.writeHead(404, {
//         "Content-Type": "text/plain"
//     });
//     res.end("Rota não encontrtada blz!");
// });

// server.listen(PORT, () => {
//     console.log(`Servidor show de bola em http://localhost:${PORT}`);
// });