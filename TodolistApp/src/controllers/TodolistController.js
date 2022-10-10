
const TodoListApp=require("../models/todolist");
const CreateTodoList=async  (req, res) => {
    try {
        const user = TodoListApp(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e)
    }
   

}

const GetTodolist=async (req, res) => {
    try {
        const findlist = await TodoListApp.find();
        res.send(findlist)
    } catch (e) {
        res.send(e)
    }

}

const GetlistById=async (req, res) => {
    try {
        const _id = req.params.id;
        const todoListById = await TodoListApp.findById({ _id: _id }, req.body, {
            new: true
        })
        res.send(todoListById)

    } catch (e) {
        res.status(400).send(todoListById)
    }

}

const UpdatelistById=async (req, res) => {
    try {
        const _id = req.params.id;
        const todoListById = await TodoListApp.findByIdAndUpdate({ _id: _id }, req.body, {
            new: true
        })
        res.send(todoListById)

    } catch (e) {
        res.status(400).send(todoListById)
    }

}

const DeleteList=async (req, res) => {
    try {
        const _id = req.params.id;
        const deletetodolist = await TodoListApp.findByIdAndDelete({ _id: _id })
        if (!deletetodolist) {
            return res.status(400).send(deletetodolist);
        }
        else {
            res.send(deletetodolist)
        }
    } catch (e) {
        res.send(e)
    }

}

const DeleteByRemove= async (req, res) => {
    try {
        const _id = req.params.id;
        const deletetodolist = await TodoListApp.findByIdAndRemove({ _id: _id })
        if (!deletetodolist) {
            return res.status(400).send(deletetodolist);
        }
        else {
            res.send(deletetodolist)
        }
    } catch (e) {
        res.send(e)
    }

}

const GetByFindOne=async (req, res) => {
    try {
        
        const Findtodolist = await TodoListApp.findOne({ discription:"Learn Javascript"})
        if (!Findtodolist) {
            return res.status(400).send(Findtodolist);
        }
        else {
            res.send(Findtodolist)
        }
    } catch (e) {
        res.send(e)
    }

}

const DeleteByfindOne=async (req, res) => {
    try {
        
        const Findtodolist = await TodoListApp.findOneAndDelete({ discription:"Learn Javascript"})
        if (!Findtodolist) {
            return res.status(400).send(Findtodolist);
        }
        else {
            res.send(Findtodolist)
        }
    } catch (e) {
        res.send(e)
    }

}

const UpdateByFindOne=async (req, res) => {
    try {
        const query={discription:"Learn Javascript"}
        const todoListById = await TodoListApp.findOneAndUpdate(query,{ $set: { discription: ' Learn Python' }} ,req.body, {
            new: true
        })
        res.send(todoListById)

    } catch (e) {
        res.status(400).send(todoListById)
    }

}

module.exports={
    CreateTodoList,
    GetTodolist,
    GetlistById,
    UpdatelistById,
    DeleteList,
    DeleteByRemove,
    GetByFindOne,
    DeleteByfindOne,
    UpdateByFindOne
}