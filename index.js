import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";




dotenv.config({});
const app = express();

const _dirname = path.resolve();//index js ka path store kra lia
// app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//image ko access kr ske
app.use(cookieParser()); //cookies access kr paenge
// const corsOptions = {
//     origin: 'https://jobwebsite-youtube-1.onrender.com/onrender.com/',
//     credentials: true
// }
// allow cookies/authorization headers
// app.use(cors({
//     origin: 'http://localhost:5173', 
//     credentials: true               
    
// }));
app.use(cors())


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// app.use(express.static(path.join(_dirname, "/frontend/dist")));
// app.get("*", (_, res) => {
//     res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
// })
app.get('/',(req,res)=>{
    res.send("api is working")
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`server running on port  ${PORT}`);
})

