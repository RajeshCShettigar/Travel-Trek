const mongoose=require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    tourName:{
        type:String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
       type:Date,
       required:true,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model("booking", bookingSchema);