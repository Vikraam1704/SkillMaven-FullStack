const Todo = require('../model/todo');

const getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(201).json(todos);
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}
const createTodo = async(req,res)=>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.json(todo)
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

const updateTodo = async(req,res)=>{
    try{
        const updated = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updated) return res.status(404).json({message:'Todo not found'})
        res.json(updated)
    } catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}
const deleteTodo = async(req,res)=>{
    try{
        const deleted = await Todo.findByIdAndDelete(req.params.id)
        if(!deleted) return res.status(404).json({message:'Todo not found'})
        res.json({message:"Todo Deleted"})
    } catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports={
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}