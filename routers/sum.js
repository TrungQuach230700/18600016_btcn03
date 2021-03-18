const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('form');
  })
  router.post('/',function(req,res){
      const number1=Number(req.body.number1);
      const number2=Number(req.body.number2);
      const result=number1+number2;
      //res.send(`Tổng hai số ${number1} và ${number2} là ${result}`);
      res.render('result',{number1,number2,result});
  });

module.exports=router;