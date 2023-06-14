const mongoose = require("mongoose");
const Todo = require("../model/todo");

exports.addTodo = async (req, res) => {
  if (!req.body.todo) return res.redirect("/");

  // Todo.create({ text: req.body.todo })
  //   .then((result) => {
  //     console.log(result);
  //     res.redirect("/");
  //   })
  //   .catch((err) => console.log(err));
  try {
    await Todo.create({ text: req.body.todo });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id.replace(/\s/g, ""));
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
  // Todo.destroy({ where: { id: req.params.id } })
  //   .then(() => res.redirect("/"))
  //   .catch((err) => console.log(err));
};

exports.completeTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id.replace(/\s/g, ""));
    console.log(todo);
    todo.completed = true;
    await todo.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
  // Todo.findByPk(req.params.id)
  //   .then((todo) => {
  //     todo.completed = true;
  //     return todo.save();
  //   })
  //   .then(() => res.redirect("/"))
  //   .catch((err) => console.log(err));
};
