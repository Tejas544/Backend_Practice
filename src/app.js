import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser' //server se user browser ki cookies access and set kar paau
const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,  //allowing all as of now
    credentials: true
}));
app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded({
    extended: true,
    limit:"16kb"
})) //this is for different config in url like %20 for space
app.use(express.static("public")); // for uploading image and icon at our server first

app.use(cookieParser()); 
export {app};
//THIS IS ALL ABOUT CONFIGURATIONS  


//routes
import userRouter from './routes/user.routes.js' 

//WE CAN"T USE app.get as we have seperated routes and controller from here

//routes declaration
app.use("/api/v1/users" , userRouter)   //we will go to http://localhost:8000/api/v1/users/register 


