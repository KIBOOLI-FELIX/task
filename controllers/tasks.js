const {create, getData, updateData, deleteData}=require('../models/taskModel');
// const conn=require('../db/connect')
const getAllTasks=async(req,res,next)=>{
  try {
    await  getData(res);
  } catch (error) {
    return next(error);
  }
 
}
const createTask=(req,res)=>{
    const values=[
    req.body.name,
    req.body.completed,
  ]
  create(values,res);

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
    await updateData(values,id,res);
  } catch (error) {
    return next(error);
  }
}
const deleteTask=async(req,res,next)=>{
  const id=req.params.id;
  try {
    await deleteData(id,res);
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