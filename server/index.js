const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const PORT=process.env.PORT ||9000
const cookieParser=require('cookie-parser');
const jwt = require('jsonwebtoken');

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
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use((req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use('/tours',tourRouter);
app.use('/auth',authRouter);
app.use('/reviews',reviewsRouter);
app.use('/booking',bookingRouter);

app.post('/verifyToken', (req, res) => {
  const token = req.body.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      } else {
      //console.log(decoded);
      return res.status(200).json({ message: 'Token is valid' });
      }
    });
  } else {
    return res.status(401).json({ message: 'Missing token' });
  }
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});