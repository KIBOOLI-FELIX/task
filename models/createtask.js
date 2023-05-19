const conn=require('../db/connect')
//creating a query
const sql='INSERT INTO task(`name`,`completed`) VALUES(?)';
const create=(values,res)=>{
  conn.query(sql,[values],(err)=>{
    if(err)return res.json({Error:err});
    return res.json({success:'success'})
  })
}

module.exports=create;
