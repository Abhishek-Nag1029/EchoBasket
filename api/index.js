const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

const cors = require('cors');
app.use(cors("*"));

const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const orderRoute=require("./routes/order");
const cartRoute=require("./routes/cart");
const stripeRoute=require("./routes/stripe");

dotenv.config();
mongoose.connect(process.env.MONGO_URL,
{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
console.log(err);
})
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute)

app.listen(8000,()=>{
    console.log("Backend is Running at 8000");
})