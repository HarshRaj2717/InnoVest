import express from "express"
import cors from 'cors'
import connectDB from "./connection.js";
import userrouter from "./router/userrouter.js";
const app=express();
connectDB();
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,//to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
})
)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(userrouter)
app.listen(8000,()=>{
    console.log("Server started on port 8000");
});