const express = require('express');

let dotenv = require('dotenv').config()

const app= express();
const port= process.env.PORT;

app.use(express.json());

const userRoutes = require('./routes/User_route');
const tokensRoute = require('./routes/token_route');
app.use(userRoutes);
app.use(tokensRoute);

// app.get("/", (req,res) => {
//     res.send('200 ok status')
// });


app.listen(port, () =>
{
    console.log(`running on ${port}`);
});