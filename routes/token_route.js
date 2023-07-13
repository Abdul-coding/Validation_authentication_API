const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const token_creation = require('../Controller/token_creation');
const tokenVerify = require('../middleware/token_verify');

const secret = process.env.JWT_SECRET;

router.post('/generateToken', (req, res) => {
    const resData = token_creation.createToken(req.body);
    console.log("Data Response");
    res.send({"token":resData});

});


router.post('/decodeToken',tokenVerify, (req,res) => {
    // console.log("Token", req.body.token);
    // const resData = token_creation.decodeToken(req.body.token);
    // res.send(resData);

    jwt.verify(req.token, secret, (error, authData) =>{
        if(error){
          res.send({result: "invalid token"})
        }else {
          res.json({
            message: "success",
            authData
          })
        }
    })

});

module.exports= router;