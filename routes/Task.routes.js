const {Router}=require("express");
const { TaskModel } = require("../models/Task.model");

const taskRoutes=Router();

// adding tasks
taskRoutes.post("/add",async(req,res)=>{
    try {
        const task=new TaskModel(req.body);
        await task.save();
    } catch (error) {
        res.send({"msg":error.message})
    }
})

// getting tasks
taskRoutes.get("/",async(req,res)=>{
    const tasks=await TaskModel.find({authorID:req.body.authorID})

    if(tasks){
        res.send(tasks)
    }else{
        res.send({"msg":"No Tasks Found!!"})
    }
})

module.exports={taskRoutes}