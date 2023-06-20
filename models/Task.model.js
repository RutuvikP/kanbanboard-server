const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    subtasks:[{title:{type:String,required:true},isCompleted:{type:Boolean,required:true,default:false}}],
    status:{type:String,enum:["Todo","Doing","Done"],default:"Todo"},
    authorID:{type:String,required:true}
})

const TaskModel=mongoose.model("task",taskSchema);

module.exports={TaskModel}