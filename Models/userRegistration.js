const mongoose=require('mongoose')


const registrationSchema=mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        trime:true,

    },
    lastname:{
      type:String,
      require:true,
      trime:true,
    },
    address:{
      type:String,
      require:true,
      trime:true,
    },
    password:{
        type:String,
        require:true,
    },
    email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
})

module.exports=mongoose.model("User",registrationSchema)