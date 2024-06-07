const express=require('express')
const router=express.Router()
const {registration}=require('../conrollers/user')

router.post('/registration',registration)

module.exports=router