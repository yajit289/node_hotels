import express from "express";
import Person from "../models/person.js";
const router = express.Router()


router.post('/',async(req,res)=>{
 try{
  const newPerson = new Person(req.body)
  const savedPerson = await newPerson.save()
  res.status(200).json(savedPerson)
 }catch(err){
  res.status(500).json({"message ":"internal Server Error"})
 }
})



router.get("/",async(req,res)=>{
try{
  const personData = await Person.find();
  console.log("Data Fetched")
  res.status(200).json(personData)
}catch(error){
  console.log(err)
  res.status(500).json({error:"Internal Server Error"})
}
})



router.get('/:workType', async(req,res)=>{
  try{
      const workType = req.params.workType;
      if(workType == "chef"||workType=="waiter"||workType == "manager"){
        const response = await Person.find({work:workType})
        console.log(`data of person with workType ${workType} is fetched`)
        res.status(200).json(response)
      }else{
        res.status(404).json({error:"Invalid Work type"})
      }
  }catch(error){
    console.log(error);
    res.status(500).json({message:"Internal Seerver Error"})
  }
})

router.put("/:id",async (req,res)=>{
  try{
    const personID = req.params.id;
    const updatedData = req.body;
    const response = await Person.findByIdAndUpdate(personID,updatedData,{
      new:true,
      runValidators:true
    })
    res.status(200).json(response)
  }catch(error){
    console.log(error);
    res.status(500).json({message:"Internal Seerver Error"})
  }
})

router.delete('/:id',async (req,res)=>{
  try{
    const personId = req.params.id;
    await Person.findByIdAndDelete(personId)
    res.status(200).json({"message": "deleted Sucessfully"})
  }
  catch(error){
    console.log(error);
    res.status(500).json({message:"Internal Seerver Error"})
  }
})

export default router;