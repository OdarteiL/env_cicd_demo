import express from "express";

const router = express.Router();
let todos = [];

router.get("/", (req, res) => {
  res.json(todos);
});

router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });

  const newTodo = { id: Date.now(), title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(200).json({ message: "Deleted" });
});

export default router;
