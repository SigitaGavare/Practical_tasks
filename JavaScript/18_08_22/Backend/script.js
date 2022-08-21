const express = require ("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
bodyParser.
app.get("/get-allCustomer", (req, res) => {
fs.readFile ("AllCustomers.json", "utf8", (err, data)=>{

    res.send(JSON.stringify({"status":200, "error":null, "response":JSON.stringify(data)}))
})
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})
app.post("/add-customer", (req, res)=>{
const newCustomer = {
    firstname: req.body.name,
    lastname: req.body.lastname,
    phone: req.body.phone,
    email: req.body.email
}
})
