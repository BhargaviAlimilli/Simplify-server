const app= require('./app')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
dotenv.config({path:'./config.env'})

const DB= process.env.DATA_BASE
// console.log(DB)

mongoose.connect(DB).then(()=>{
    console.log("Database connection successful")
}).catch((err)=>{
    console.log("Database ERROR: ", err)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})

