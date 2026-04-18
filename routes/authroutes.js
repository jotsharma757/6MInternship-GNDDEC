require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
console.log("JWT SECRET:", process.env.JWT_SECRET);

const {
  createUser,
  findUserByEmail,
  updateLogin,
  increaseAttempts
} = require("../model/user");

const router = express.Router(); //....d


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const role = "user";
    const ip = req.ip || "0.0.0.0";

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (password.length < 6) {
      return res.json({ message: "Password must be at least 6 chars" });
    }

    // check user exists
    const existing = await findUserByEmail(email);
    if (existing) {
      return res.json({ message: "User already exists" });
    }

    // hash password ✅
    const hashedPassword = await bcrypt.hash(password, 6);

    // create user
    await createUser(name, email, hashedPassword, role, ip);

    res.json({ message: "User registered successfully" });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.json({ message: "Invalid email" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      await increaseAttempts(user.id);
      return res.json({ message: "Wrong password" });
    }

    // success login
    await updateLogin(user.id);

    // create token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      // message: "Login successful",
      token,
     user:{
      name: user.name,
      email: user.email,
     },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// ================= RESET PASSWORD =================
// router.post("/reset-password", async (req, res) => {
//   try {
//     const { email, newPassword } = req.body;

//     if (!email || !newPassword) {
//       return res.json({ message: "Email and new password required" });
//     }

//     // hash new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     const user = await resetPassword(email, hashedPassword);

//     if (!user) {
//       return res.json({ message: "User not found" });
//     }

//     res.json({ message: "Password updated successfully" });

//   } catch (error) {
//     console.error("RESET ERROR:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

module.exports = router;