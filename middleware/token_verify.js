const jwt = require('jsonwebtoken');
const tokenController = require('../Controller/token_creation');

// const verifyToken = (req, res, next) => {

//     const token = req.body.token || req.query.token || req.headers["x-access-token"];;
//     const secret = process.env.JWT_SECRET;

//     if (!token) {
//         return res.status(403).send("A token is required for authentication");
//       }
    
//       try {
//         const decodeToken = jwt.verify(token, secret);
//         req.user = decoded;  
//         return decoded;
//         next ();
// } catch(error) {
//     return res.status(401).send("Invalid Token")
// }

// };

const verifyToken = (req,res, next) => {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader != 'undefined') {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  }else {
    res.send({
      result: 'Invalid Token'
    })
  }
}

// function verifyToken(req, res, next) {
  
// }


module.exports = verifyToken;