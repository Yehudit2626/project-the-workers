const Employed=require('../models/employed')
const jwt=require('jsonwebtoken')


// const token=jwt.sign({email:req.body['email'],password:req.body['password']},process.env.SECRET)

  
  const checkPermission=async (req, res)=>
  { 
    let details=jwt.verify(req.headers['token'],process.env.SECRET)
    if(details['email']==req.body['email'] && details['password']==req.body['password'])
    {
      try 
      {
        let employed=await Employed.findOne({email:req.body['email']})
        if(employed)
        res.status(200).json({employed:employed, isManager:req.body['email']=='admin@workers.com'})
        else
        res.status(404).json({message:"not found employed"})
      } 
      catch (error) 
      {
        res.json({error})
      }
    }
   else
   res.status(400).json({message:"email or password not valid"})
  
  }
const setNewEmployed=async(req, res)=>{
    let employed=new Employed(req.body)
    try{
        await employed.save()
        res.status(200).json({employed:employed})
    }
    catch(error){
        res.status(500).json({error})
    }
 }
 
 const getAllEmployed=async(req, res)=>{
    try
    {
        let employes=await Employed.find()
        res.status(200).json({employes:employes})
    }
    catch(error){
        res.status(500).json({error})
    }
 }

 const getEmployedById=async (req, res)=>
{
  let {employedId}=req.params
  try 
  {
    let employed=await Employed.findById(employedId)
    if(employed)
    res.status(200).json({employed:employed})
    else
    res.status(404).json({message:"not found employed"})
  } 
  catch (error) 
  {
    res.json({error})
  }
 
}

const updateEmployed= async (req, res)=>{
    let {employedId}=req.params
    let newValues=req.body
    try 
    {
      await Employed.findOneAndUpdate({_id:employedId},newValues)
       res.json({message:"employed updated"})
    } 
    catch (error) 
    {
      res.json({error})
    }
  }
 module.exports={checkPermission,setNewEmployed,getAllEmployed, getEmployedById, updateEmployed}