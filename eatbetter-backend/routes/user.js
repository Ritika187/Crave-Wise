const express = require("express");
const router = express.Router();
const db = require("../db");
const nodemailer = require("nodemailer");

// temporary OTP store
let otpStore = {};


// =======================
// SIGNUP
// =======================

router.post("/signup", (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {

      if (err) return res.status(500).json({ error: err });

      if (results.length > 0) {
        return res.status(400).json({ error: "Email already exists" });
      }

      db.query(
        "INSERT INTO users (username,email,password) VALUES (?,?,?)",
        [username,email,password],
        (err,result)=>{

          if(err) return res.status(500).json({error:err});

          res.json({
            message:"Signup successful",
            userId:result.insertId
          });

        }
      );

    }
  );

});


// =======================
// LOGIN
// =======================

router.post("/login",(req,res)=>{

const {email,password} = req.body;

if(!email || !password){
  return res.status(400).json({
    error:"Email and password required"
  });
}

db.query(
  "SELECT * FROM users WHERE email=? AND password=?",
  [email,password],
  (err,results)=>{

    if(err) return res.status(500).json({error:err});

    if(results.length===0){
      return res.status(401).json({
        error:"Invalid credentials"
      });
    }

    res.json({
      message:"Login successful",
      user:results[0]
    });

  }
);

});


// =======================
// FORGOT PASSWORD (SEND OTP)
// =======================

router.post("/forgot-password",(req,res)=>{

const {email} = req.body;

if(!email){
  return res.status(400).json({
    error:"Email required"
  });
}

db.query(
  "SELECT * FROM users WHERE email=?",
  [email],
  async (err,results)=>{

    if(err) return res.status(500).json({error:err});

    if(results.length===0){
      return res.status(400).json({
        error:"Email not registered"
      });
    }

    const otp = Math.floor(100000 + Math.random()*900000);

    otpStore[email] = otp;

    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"yourgmail@gmail.com",
        pass:"your-app-password"
      }
    });

    await transporter.sendMail({
      from:"yourgmail@gmail.com",
      to:email,
      subject:"Password Reset OTP",
      text:`Your OTP is ${otp}`
    });

    res.json({
      message:"OTP sent to email"
    });

  }
);

});




module.exports = router;