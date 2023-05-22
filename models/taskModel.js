const conn=require('../db/connect')

const create=(values,res)=>{
//inserting into the database
const sql='INSERT INTO task(`name`,`completed`) VALUES(?)';
  conn.query(sql,[values],(err )=>{
    if(err)return res.json({Error:err});
    return res.json({success:'success'})
  })
}
//getting information from the database
const getData=(res)=>{
  const sql='SELECT *  FROM task';
  conn.query(sql,(err,result)=>{
    if(err)return res.json({Error:err});
    return res.json(result);
  })
}

exports.create=create;
exports.getData=getData;
