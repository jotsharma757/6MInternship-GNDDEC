const express = require("express");
const router = express.Router();
const {
  getMylist,
  insertMylist,
} = require("../model/MyList");
const { pool } = require("../config/db");
const authMiddleware = require("../Middleware/authMiddleware"); // ✅ import

// ✅ ADD TO LIST
router.post("/", authMiddleware, async (req, res) => {
  const { title, image } = req.body;
  const userId = req.user.id; // ✅ get user

  try {
    const data = await insertMylist(userId, title, image);
    res.json(data);

    
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET USER LIST
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const data = await getMylist(userId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE (user safe)
router.delete("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await pool.query(
      "DELETE FROM Mylist WHERE id = $1 AND user_id = $2",
      [id, userId]
    );
    res.json({ message: "Removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;