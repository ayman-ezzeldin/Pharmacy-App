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
    const hashPassword = await bcrypt.hash(password,12)
    const newUser = new User({
      username,
      email,
      password : hashPassword
    })

    await newUser.save()

    res.status(200).json({
      success : true ,
      message : "User created successfully"
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false ,
      message : "Something went wrong"
    })
    
  }

}

// login

const login = async (req,res) => {


  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false ,
      message : "Something went wrong"
    })
    
  }

}

module.exports = {
  registerUser ,
}