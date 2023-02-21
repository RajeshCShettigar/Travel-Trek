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
const reviewsRouter=require('./routes/reviews');
const bookingRouter=require('./routes/bookings');

const corsOptions = {
    origin:true,
    Credentials:true
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/review',reviewsRouter);
app.use('/api/v1/booking',bookingRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});


