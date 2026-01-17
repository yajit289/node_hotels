import express from "express";
import Menu from "../models/menu.js";

const router = express.Router();


router.post("/",async(req,res)=>{
  try{
    const menuItems = new Menu(req.body)
    const savedMenu = await menuItems.save()
    console.log("Menu Item Saved")
    res.status(200).json(savedMenu)
  }catch(error){
    console.log("Unable to Save Menu")
    res.status(500).json({error: " Internal Server Error"})
  }
})

router.get("/", async(req,res) =>{
  const menuItems = await Menu.find()
  console.log("Menu Item Data Fetched")
  res.status(201).json(menuItems)
})

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType = req.params.tasteType
        if(tasteType== "sweet"|| tasteType=="spicy"||tasteType== "salty"){
            const response = await Menu.find({taste:tasteType})
            res.status(201).json(response)
        }else{
            res.status(404).json({error:"Invalid Taste Type"})
        }
    }catch(error){
    console.log(error);
    res.status(500).json({message:"Internal Seerver Error"})
  }
})


export default router;