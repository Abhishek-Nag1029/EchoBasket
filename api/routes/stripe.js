const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require('uuid');
const KEY=process.env.STRIPE_KEY;

router.post('/payment',async (req, res) => {
  console.log(req.body.token);
  const {token,amount}=req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers.create({
      email: token.email,
      source: token
  }).then(customer=>{
      stripe.changes.create({
          amount: amount*100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
      },{idempotencyKey})
  }).then(result=>{
    console.log("successssss");
      res.status(200).json(result)
  }).catch(err=>{
      console.log(err)
  })
});

module.exports = router;
