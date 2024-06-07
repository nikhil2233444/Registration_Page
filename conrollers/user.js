const express=require('express')

const User=require('../Models/userRegistration')

exports.registration=async(req,res)=>{
   try {
     const {firstname,lastname,address,password,phone,email}=req.body 
     
 
     if(!firstname||!lastname||!email||!password||!phone){
         res.status(400).json({
             succeess:false,
             message:"all fields are madetory"
         })
     }
 
      const response= await  User.findOne({email})
      if(response){
        return  res.status(400).json({
             succeess:false,
             message:"user already exists"
         })
      }
 
 
   
    const users= await  User.create({firstname,lastname,address,email,password,phone})
    console.log(users);

     res.status(201).json({
       succeess:true,
       message: 'User registered successfully'
       });
       
   } catch (error) {
     console.log(error)
     console.log("error while registration!")
   }
}
