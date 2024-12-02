import mongoose from "mongoose";
import 'dotenv/config';
const conString =`mongodb+srv://Sumit:Sumit123@cluster0.7z2ptjw.mongodb.net/?retryWrites=true&w=majority`
export async function configureDb(){
    try{
        await mongoose.connect(conString);
        console.log("Db connected");
    } catch{
        console.log(error);
    }
}