const express = require('express')
const router = express.Router()

const MenuItem = require('../models/menu')



router.post('/',async(req,res)=>{
    try {
        const data = req.body
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save()
        console.log('data saved newMenuItem', response);
        res.status(200).json(response)
    } catch (error) {
        console.log("Error saving menu",error);
        res.status(500).json({error:"Internal server error"})
    }
  
  })
  
  
  router.get('/',async(req,res)=>{
    try {
        const data = await MenuItem.find()
        console.log('data saved', data);
        res.status(200).json(data)
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({error:"Internal server error"})
    }
  })


  router.get('/:tasteType',async(req,res)=>{
    try {
        const tasteType = req.params.tasteType // extract the work type from the URL parameters
        if(tasteType == 'Sweet' || tasteType == "Spicy" || tasteType == "Sour"){
            const response =  await MenuItem.find({taste:tasteType});
            console.log('response fetched',response);
            res.status(200).json(response)
        }else {
            res.status(404).json({error:"invalid work type"})
        }
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({error:"Internal server error"}) 
    }
})


module.exports = router