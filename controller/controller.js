
const async=require("async")
const sequelize = require('sequelize');
const Sequelize = require('../config/config');
const mongoService=require("../service/service")
const middleware=require("../middleware/auth")

async function createMysql(req,res)
{
    var data=req.body;
    const result1=await Sequelize.query('INSERT INTO user4 (name, email,age) VALUES (?,?,?)', {
        replacements: [data.name,data.email,data.age],
        type: Sequelize.QueryTypes.INSERT
});
    console.log("===================777777777777777",result1);
    
}
async function readMysql(req,res)
{
    var data=req.body;
    const result=await Sequelize.query('SELECT * FROM user4 WHERE email = ?',
    {
      replacements: [data.email],
      type: Sequelize.QueryTypes.SELECT
    }
  )
  console.log("================",result);
  
}
 async function updateMysql(req,res)
{
    var data=req.body;
    var updateData={}
    if(data.name)
    {
        updateData.name=data.name;

    }
    if(data.age)
    {
        updateData.age=data.age;
    }
    const result1=await Sequelize.query('update user4 set name=?,age=? where email=?', {
        replacements: [data.name,data.age,data.email],
        type: Sequelize.QueryTypes.INSERT
});
console.log("==========================",result1);

}
async function deleteMysql(req,res)
{
    var data=req.body;

}
async function createMongodb(req,res)
{
    var data=req.body;
    var result=await mongoService.SaveUserDetails(data)
    console.log("=======================",result);
    
}
async function readMongodb(req,res)
{
    var data=req.body;
    var result=await mongoService.findData(data)
    console.log("============88888888888888888888===========",result);
}
async function updateMongodb(req,res)
{
    var data=req.body;
    var updateData={}
    updateData.email=data.email
    if(data.name)
    {
        updateData.name=data.name;

    }
    if(data.age)
    {
        updateData.age=data.age;
    }
    var result=await mongoService.updateData(updateData)
    console.log("===================================",result);
    
}
async function deleteMongodb(req,res)
{
    var data=req.body;
    var delete_data={}
    if(!data.email)
    {
        return res.send("email not found")
    }
    if(data.name)
    {
        delete_data.name=data.name;

    }
    if(data.age)
    {
        delete_data.age=data.age;
    }
    var delete_data=await mongoService.deleteData(data)
    console.log("data Successfully deleted");
    
}
async function genrateTokenApi(req,res)
{
    var data=req.body;
    var access_token=await middleware.generateToken(data)
    console.log("Token generated successfully",access_token);
    res.send("Token genrated successfully")
    
    
}
async function verifyAuthAPi(req,res)
{
  console.log("Token verified ");
  res.send("Token successful verified")
    
}

module.exports={
    createMysql:createMysql,
    readMysql:readMysql,
    updateMysql:updateMysql,
    deleteMysql:deleteMysql,
    createMongodb:createMongodb,
    readMongodb:readMongodb,
    updateMongodb:updateMongodb,
    deleteMongodb:deleteMongodb,
    genrateTokenApi:genrateTokenApi,
    verifyAuthAPi:verifyAuthAPi
}