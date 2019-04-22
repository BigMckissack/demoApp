const http = require('http');
const express = require('express');
// const fs = require('fs');
const path = require('path');
let app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res) => {
    const p = path.join(__dirname, 'public/index.html')
    res.sendFile(p);
});

http.createServer(app).listen(port, (err) => {
    if (err) {
        return console.log('server stopped', err)
    }
    console.log(`server is listening on ${port}`)
})