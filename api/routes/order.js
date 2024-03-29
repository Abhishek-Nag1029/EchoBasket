const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenandAuthorization,
  verifyTokenandAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE ORDER

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ORDER

router.put("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: req.params.id }, // Use _id for matching based on MongoDB ObjectId
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE ORDER

router.delete("/:id", verifyTokenandAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER ORDERS

router.get("/find/:id", verifyTokenandAuthorization, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.id });
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", verifyTokenandAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET MONTHLY INCOME

router.get("/income",verifyTokenandAdmin,async (req,res)=>{
    const date = new Date();
    const previousMonth = new Date(date.setMonth(date.getMonth() - 2));
    // console.log(lastMonth);
    console.log("Previous Month:", previousMonth);

    try{
      const income=await Order.aggregate([
        {$match:{createdAt:{$gte: previousMonth}}},
        {
            $project:{
                month:{ $month:"$createdAt"},
                sales:"$amount",
            },
        },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"},
                }
            },
        
      ]);
      res.status(200).json(income);
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;
