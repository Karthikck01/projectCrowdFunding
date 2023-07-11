const express = require("express");
const mysql
 = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "register"
})

app.post('/register', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone =req.body.phone;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
   

    con.query("INSERT INTO users (fname, lname, phone, email, username, password) VALUES (?, ?, ?, ?, ?, ?)", [fname,lname,phone,email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})