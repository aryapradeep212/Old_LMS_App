const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://aryapradeep212:Arya@cluster0.zbd2evl.mongodb.net/?retryWrites=true&w=majority')

let Schema = mongoose.Schema;

//Schema Creation of User Details
const userSchema = new Schema({
 
  username:
  {
    type: String,
    unique:true,
    required:true
  },
  firstName: String,
  place: String,
  age: Number,
  email:  
  {
    type: String,
    unique:true,
    required:true
  },
  education: String,
  contactDetails: String,
  phone: Number,
  password: {
    type:String,
    required:true
  },
  access:{
    type:Boolean,
    default:true
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports =userModel;
  
