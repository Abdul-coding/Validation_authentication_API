const express = require('express');
const router = express.Router();
const schema = require('../middleware/User_validation');
const userCreation = require('../Controller/user_creation')




router.post("/register", (req, res) => {
    const {error, value} = schema.validate(req.body);
    if(error) {
        res.status(406).send(error.details[0].message);
    } else {
        userCreation.createUser(req,res);
    }
});

router.get('/', userCreation.getUsers, (req,res) => {
    res.json({
        messagr: "API created successfully"
    })
});

router.patch('/:name', (req,res) => {
    const { error, value } = schema.validate(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
    } else {
        userCreation.updateUser(req,res);
    }
});

module.exports = router;