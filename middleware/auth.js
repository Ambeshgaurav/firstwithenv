const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config();

function generateToken(data) {
    return new Promise((resolve, reject) => {
        jwt.sign(data.email, process.env.JWT_SECRET, (err, token) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token)
            }
        })

    })
}

function authenticateToken(req,res,next) {
     var data=req.headers.access_token
        jwt.verify(data, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.send("error occurred")
            }
            else {
                next()
                
            }
        })


}
module.exports= {
    generateToken: generateToken,
    authenticateToken: authenticateToken
}