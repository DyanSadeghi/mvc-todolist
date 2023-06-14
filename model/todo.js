const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      max: 225,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { strict: true }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
