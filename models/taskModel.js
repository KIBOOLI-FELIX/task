const conn=require('../db/connect')

const create=(values,res)=>{
//inserting into the database
const sql='INSERT INTO task(`name`) VALUES(?)';
  conn.query(sql,[values],(err )=>{
    if(err)return res.status(500).json({Error:err});
    return res.status(201).json({success:'success'})
  })
}
//getting information from the database
const getData=(res)=>{
  const sql='SELECT *  FROM task';
  conn.query(sql,(err,result)=>{
    if(err)return res.status(500).json({Error:err});
    return res.status(201).json(result);
  })
}

//updating information
const updateData=(values,id,res)=>{
  const sql=`UPDATE task SET name='${values[0]}',completed='${values[1]}' WHERE id=${id}`;
  conn.query(sql,(err )=>{
    if(err)return res.status(500).json({Error:err});
    return res.status(201).json({success:'task updated'})
  })
}
//deleting info
const deleteData=(id,res)=>{
  const sql='DELETE FROM task WHERE id=?';
  conn.query(sql,Number([id]),(err)=>{
    if(err)return res.status(500).json({Error:err});
    return res.status(201).json({success:'task deleted'})
  })
}
exports.create=create;
exports.getData=getData;
exports.updateData=updateData;
exports.deleteData=deleteData;
