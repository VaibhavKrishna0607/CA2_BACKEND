const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello Kalvian");
// })

app.post('/', (req, res) => {
    const username = req.params.username;
    if(!username){
        res.send("Username cannot be empty");
    }
    const email = req.params.email;
    if(!email){
        res.send("Email cannot be empty");
    }
    const password = req.params.password;
    if(password.length<8 || password.length>=16){
        res.send("Password length should be greater than 8 or less than or equal to 16");
}});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});