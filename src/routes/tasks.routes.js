import { Router } from "express";

const router = Router();

router.get("/tasks", async (req, res) => {
  res.send("retrieving all tasks");
});

router.get("/tasks/:id", (req, res) => {
  res.send("retrieving a single task");
});

router.post("/tasks", (req, res) => {
  res.send("creating a tasks");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("deleting a task");
});

router.put("/tasks/:id", (req, res) => {
  res.send("updating a task");
});

export default router;