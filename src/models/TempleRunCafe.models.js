const mongoose=require("mongoose");
const{v4}=require("uuid");

const cafeeDaySchema = new mongoose.Schema({
   _id:{
      type:String,
      default:v4
   },
   
    Name:{
        type: String,
        required: true,
        enum: ["corn sandwich", "panner sandwich", "mushroom sandwich", "lays sandwich", "double layer stuff sandwich"]
    },

    email:{
        type: String,
        unique: true,
        trim: true,
    },

    number:{
        type: Number
    },
    password:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        default:v4
 }

    // price:{
    //     type: Number
    // },

    // quantity:{
    //     type: Number,
    //     required: true
    // },

    // order:{
    //     type: String,
    //     required: true
    // }

},
{timestamps:true});
const cafeeDay= mongoose.model("cafeeDay", cafeeDaySchema);
module.exports=cafeeDay;