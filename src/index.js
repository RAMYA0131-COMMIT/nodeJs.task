const express = require("express")
const connection = require("./config/connection");
const router = require("./routes/TempleRunCafe.routes")
const accountRouter = require("./routes/account.route")
require("dotenv").config();

const app = express();

app.use(express.json());
connection();

app.use(router);
app.use(accountRouter);
        
app.get("/userdata", (req, res)=> {
    res.json(data)
})

app.post("/createuser", (req, res)=> {
    let data = {
        ...req.body,
        email: "test@gmail.com"
    };

    res.json({
        data,
        message: "user created"
    })
});



app.use("/" ,(req, res ) => {
    res.send("server is alive")
})

const port = 8011;

app.listen(port, () => { 
    console.log("Server is running on:", port);
    
});





