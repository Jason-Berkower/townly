const db = require("../db");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

db.on("error", console.error.bind(console, "Mongo Connection Error"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "townlytourtimes";

const signUp = async (req, res) => {
  try {
    const { username, email, password, is_tourGuide } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({ username, email, password_digest, is_tourGuide });

    await user.save();
    const payload = {
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, TOKEN_KEY);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (user) {
      if (await bcrypt.compare(password, user.password_digest)) {
        const payload = {
          username: user.username,
          email: user.email,
        };

        const token = jwt.sign(payload, TOKEN_KEY);

        return res.status(200).json({ payload, token });
      } else {
        return res.status(401).send("Invalid Credentials");
      }
    } else {
      return res.status(400).send("User does not exist");
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      return res.json(payload);
    }
  } catch (error) {
    return res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    const { newPassword, oldPassword } = req.body;
    if (await bcrypt.compare(oldPassword, user.password_digest)) {
      const password_digest = await bcrypt.hash(newPassword, SALT_ROUNDS);
      user = await User.findByIdAndUpdate(
        req.params.id,
        { password_digest: password_digest },
        { new: true }
      );
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      return res.status(403).send("wrong password");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signUp, signIn, verify, changePassword };
