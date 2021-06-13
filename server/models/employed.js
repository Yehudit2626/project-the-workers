const mongoose=require('mongoose')

const employedSchema=mongoose.Schema({
    firstName:{type:String, require:true},
    lastName:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String},
    status:{type:String, require:true, default:'candidate'}
})

module.exports=mongoose.model('employed',employedSchema)