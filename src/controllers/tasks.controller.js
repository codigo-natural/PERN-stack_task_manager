import { pool } from "../db/index.js";

export const getAllTasks = async (req, res) => {
  res.send("retrieving all tasks");
};

export const getTask = async (req, res) => {
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
  res.send("updating a task");
};

export const deleteTask = async (req, res) => {
  res.send("deleting a task");
};
