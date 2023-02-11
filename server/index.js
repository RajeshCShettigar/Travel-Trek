const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const PORT=process.env.PORT ||8080
const cookieParser=require('cookie-parser');
const tourRouter=require('./routes/tours');

dotenv.config();


const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/tours',tourRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});


