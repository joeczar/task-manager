/*jshint esversion: 8 */
const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();


// Create new user
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    // generate AuthToken for user
    const token = await user.generateAuthToken();
    // Send user data
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// User Login
router.post("/users/login", async (req, res) => {
  
  try {
    // Find user by Credentials
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    // generate AuthToken for user
    const token = await user.generateAuthToken();
    // Send user data
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

// Get single User by id
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// Get all Users
router.get("/users", auth,  async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/profile", auth, async (req, res) => {
  res.send(req.user);
});

// Update User
router.patch("/users/:id", async (req, res) => {
  // Let user know if trying to update invalid item
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await User.findById(req.params.id);

    updates.forEach(update => (user[update] = req.body[update]));
    await user.save();

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Delete User
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
