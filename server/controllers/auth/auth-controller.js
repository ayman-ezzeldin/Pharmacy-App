const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

// register 

const registerUser = async (req,res) => {

  const { username , email , password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {

    const checkUser = await User.findOne({email})
    if(checkUser) {
      return res.json({
        success : false ,
        message : "User already exists"
      })
    }

    const hashPassword = await bcrypt.hash(password,12)
    const newUser = new User({
      username,
      email,
      password : hashPassword
    })
    // for save in database
    await newUser.save()

    res.status(200).json({
      success : true ,
      message : "User created successfully"
    })

  } catch (error) {
    res.status(500).json({
      success : false ,
      message : "Something went wrong"
    })
    
  }

}

// login

const loginUser = async (req,res) => {
  const { email , password } = req.body

  if ( !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const checkUser = await User.findOne({email})
    if(!checkUser) {
      return res.json({
        success : false ,
        message : "User is not found"
      })
    }

    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password)
    if(!checkPasswordMatch) {
      return res.json({
        success : false ,
        message : "Password is incorrect"
      })
    }

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.username,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false ,
      message : "Something went wrong"
    })
    
  }

}

module.exports = {
  registerUser,
  loginUser,
}