const express = require('express');
const app = express();


app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello Kalvian");
// });

app.post('/', (req, res) => {
    const { username, email, password } = req.body;

    if (!username) {
        return res.status(400).send("Username cannot be empty");
    }
    if (!email) {
        return res.status(400).send("Email cannot be empty");
    }
    if (password.length <= 8 || password.length > 16) {
        return res.status(400).send("Password length should be greater than 8 and less than or equal to 16");
    }

    

    res.send("Credentials saved successfully");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
