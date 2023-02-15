const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const PORT=process.env.PORT ||8080
const cookieParser=require('cookie-parser');

dotenv.config();
require("./db/config");

const tourRouter=require('./routes/tours');
const userRouter=require('./routes/users');
const authRouter=require('./routes/auth');

const corsOptions = {
    origin:true,
    Credentials:true
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/tours',tourRouter);
app.use('/users',userRouter);
app.use('/auth',authRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});


