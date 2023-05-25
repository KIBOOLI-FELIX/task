const conDB=require('./db/connect');
const express=require('express');
const tasks=require('./routes/tasks');
const app=express();

//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use('/api/v1/tasks',tasks)
const port=8000;
const runServer=async(next)=>{
  try {
    await conDB.connect((err)=>{
      if(err) throw err
      app.listen(port,console.log(`Server is listening on port ${port} ...`));
    })
  } catch (error) {
    console.log(error);
  }
}
runServer();


