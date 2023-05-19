const createModel=require('../models/createtask');
// const conn=require('../db/connect')
const getAllTasks=(req,res)=>{

  res.send('God is always good');
}
const createTask=(req,res)=>{
  const sql='INSERT INTO task(`name`,`completed`) VALUES(?)';
  // res.json(req.body.name)
    const values=[
    req.body.name,
    req.body.completed,
  ]
  createModel(values,res);

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