import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path : './env'
})


connectDB()
.then(() => {
    app.on("error" , (error) => {
        console.log(error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`App Listening on PORT ${process.env.PORT}`);
    });

})
.catch((err) => {
    console.log("DB Connection Failed" , err);
});;