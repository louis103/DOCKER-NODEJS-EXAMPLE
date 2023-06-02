const express = require("express");

const PORT = 8080
const HOST = '0.0.0.0'

const app = express();
app.get("/", (req,res) => {
    res.send("Hello Docker, Its Louis Here!");
});

app.listen(PORT,HOST, ()=> {
    console.log(`SERVER RUNNING ON http://${HOST}:${PORT}`);
});