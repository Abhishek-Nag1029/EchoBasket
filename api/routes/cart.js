const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken");

const router=require("express").Router();

//CREATE CART

router.post("/",verifyToken,async(req,res)=>{
    const newCart=new Cart(req.body);

    try{
        const savedCart=await newCart.save();
        res.status(200).json(savedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
})



//UPDATE CART


router.put("/:id",verifyTokenandAuthorization,async (req,res)=>{
    try{
       const updatedCart=await Cart.findOneAndUpdate(
        { _id: req.params.id }, // Use _id for matching based on MongoDB ObjectId
            { $set: req.body },
            { new: true }
       );
       return res.status(200).json(updatedCart);
    }
    catch(err){
       return res.status(500).json(err);
    }
}

)

//DELETE CART

router.delete("/:id",verifyTokenandAuthorization,async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json("Cart has been deleted...");
    }
    catch(err){
        res.status(500).json(err);
    }
    
})


//GET USER CART

router.get("/find/:id",verifyTokenandAuthorization,async (req,res)=>{
    try{
        const cart= await Cart.findOne({userId:req.params.id});
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err);
    }
    
})


//GET ALL
router.get("/",verifyTokenandAdmin,async(req,res)=>{
    try{
      const carts=await Cart.find();
      res.status(200).json(carts);
    }

    catch(err){
        res.status(500).json(err);
    }
})








module.exports=router;