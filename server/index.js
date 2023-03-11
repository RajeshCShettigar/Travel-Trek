const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const PORT=process.env.PORT ||9000
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');

dotenv.config();
require("./db/config");

const tourRouter=require('./routes/tours');
const authRouter=require('./routes/auth');
const reviewsRouter=require('./routes/reviews');
const bookingRouter=require('./routes/bookings');

const corsOptions = {
    origin:true,
    Credentials:true
}

const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
   }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
//app.use(cors(corsOptions));
app.use('/tours',tourRouter);
app.use('/auth',authRouter);
app.use('/review',reviewsRouter);
app.use('/booking',bookingRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});


