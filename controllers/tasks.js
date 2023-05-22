const {create, getData}=require('../models/taskModel');
// const conn=require('../db/connect')
const getAllTasks=async(req,res,next)=>{
  try {
    await  getData(res);
  } catch (error) {
    next(error);
  }
 
}
const createTask=(req,res)=>{
  // const sql='INSERT INTO task(`name`,`completed`) VALUES(?)';
  // res.json(req.body.name)
    const values=[
    req.body.name,
    req.body.completed,
  ]
  create(values,res);

}
const getTask=(req,res)=>{
  res.json({id:req.params.id});
  
}
const updateTask=(req,res)=>{
  res.send('God is exceedingly good');
}
const deleteTask=(req,res)=>{
  res.send('God is awesome');
}
module.exports={
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}