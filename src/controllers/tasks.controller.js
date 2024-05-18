import { pool } from "../db/index.js";

export const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
  res.send("retrieving a single task");
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  if (result.rows.length === 0)
    return res.status(404).json({
      message: "Task not found",
    });
  res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Task not found",
    });

  return res.sendStatus(204);
};
