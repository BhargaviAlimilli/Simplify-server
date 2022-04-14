const { json } = require("express")
const express= require("express")
const userRoutes= require('./routes/userRoutes')
const errorController= require('./controllers/errorController')
const noteRoutes= require('./routes/noteRoutes')
const cors= require('cors')

const app= express()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

app.use(errorController.notFound)
app.use(errorController.errorHandler)

module.exports= app


