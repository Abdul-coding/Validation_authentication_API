const jwt = require('jsonwebtoken');

const createToken = (body) => {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(body, secret);
    return token;
};


module.exports = {createToken};