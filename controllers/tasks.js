const {create, getData, updateData, deleteData}=require('../models/taskModel');
// const conn=require('../db/connect')
const getAllTasks=async(req,res,next)=>{
  try {
      getData(res);
  } catch (error) {
    return next(error);
  }
 
}
const createTask=async(req,res,next)=>{
    const values=[
    req.body.name,
  ]
  try {
    create(values,res);
  } catch (error) {
    return next(error)
  }
 

}
const getTask=(req,res)=>{
  res.json({id:req.params.id});
  
}
const updateTask=async(req,res,next)=>{
  const id=req.params.id
  const values=[
    req.body.name,
    req.body.completed
  ]
  try {
     updateData(values,id,res);
  } catch (error) {
    return next(error);
  }
}
const deleteTask=async(req,res,next)=>{
  const id=req.params.id;
  try {
     deleteData(id,res);
  } catch (error) {
    return next(error);
  }
}
module.exports={
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}