const mongoose =require('mongoose')


exports.databaseconnect=async()=>{
    try {
        const response= await mongoose.connect(`mongodb://localhost:27017/userregistration`)
        console.log("database connected successfully!")
    } catch (error) {
        console.log(error)
        console.log("error while connecting databse!")
    }
}