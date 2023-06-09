const express=require('express');
const { getAllTasks,
        createTask,
        updateTask,
        deleteTask, 
        getSingleTask} = require('../controllers/tasks');
const router=express.Router();
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports=router