const express =require('express')
const cors=require('cors')
const app=express()

// var corsOptions = {
//     origin: 'http://localhost:5173/',
//     methodes:"POST",
//corsOptions 
//   }
   

app.use(cors())
app.use(express.json())

const PORT=3000;

const router=require('./Router/router')
app.use('/v1/api',router)



const {databaseconnect}=require('./config/Database')
databaseconnect();



app.listen(PORT,()=>{
    console.log(`app is listening at page number ${PORT}`)
})