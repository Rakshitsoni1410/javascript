const express = require("express");
const app = express();

app.use(express.json()); // important for POST body

// GET API
app.get("/users", (req, res) => {
    res.send("GET API Working");
});

// POST API
app.post("/add", (req, res) => {
    const data = req.body;
    res.send({
        message: "POST API working",
        receivedData: data
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});