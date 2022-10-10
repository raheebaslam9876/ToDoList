const express =require("express")
const router=express.Router();
const ToDoListController=require("../controllers/TodolistController")
router.use(express.json())


router.route("/todolistapps")
.post(ToDoListController.CreateTodoList)
.get(ToDoListController.GetTodolist)

router.route("/todolistapps/:id")
.get(ToDoListController.GetlistById)
.patch(ToDoListController.UpdatelistById)
.delete(ToDoListController.DeleteList)



module.exports = router;