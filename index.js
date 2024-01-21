const express= require("express");
require("dotenv").config();
const { connection } = require("./db");
const { libraryRoute } = require("./routes/masai_library.route");
const swaaggerJsDocs= require("swagger-jsdoc")
const swaggerUi= require("swagger-ui-express")
const cors= require("cors")
const app= express();
app.use(express.json())
app.use(cors())

// this is the options to configure the swagger
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Masai-Library",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:8080"
            }
        ]
    },
    apis:["./routes/*.js"]
}
// to bulid the UI
const swaggerSpec= swaaggerJsDocs(options)
// ui setUp
app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.get("/",(req,res)=>{
    res.send("Welcome to the Masai Library")
})

app.use("/masaiLibrary" , libraryRoute)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`connected to DB`)
        console.log(`Server is running on PORT ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = app;