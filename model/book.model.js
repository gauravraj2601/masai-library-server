const mongoose = require("mongoose");

const bookSchema=mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    isbn:{type:Number, required:true},
    description:{type:String, required:true},
    publishedDate:{type:Date,required:true}

},
{
    versionKey:false
})

const Book_Module= mongoose.model("books",bookSchema)

module.exports={Book_Module}