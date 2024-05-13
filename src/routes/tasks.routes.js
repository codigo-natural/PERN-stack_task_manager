import { Router} from "express"

const router = Router()

router.get("/tasks", (req, res) => {
  res.send("retrieving a lis of tasks")
})

router.get("/tasks/:id", (req, res) => {
  res.send("retrieving a single task")
})

router.post("/tasks", (req, res) => {
  res.send("creating a tasks")
})

router.delete("/tasks/:id", (req, res) => {
  res.send("deleting a task")
})

router.put("/tasks/:id", (req, res) => {
  res.send("updating a task")
})

export default router;