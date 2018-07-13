const User = require('../models/User');

async function getUsers(req,res) {
   try {
      const users = await User.find({});
      res.json(users);
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}
// Get user by the NID
async function getUser(req,res) {
   try {
      const nid = req.params.id;
      const user = await User.findOne({nid});
      res.json(user);
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function saveUser(req,res) {
   try {
      const { nid,name,email,address } = req.body;
      const newUser = new User({ nid,name,email,address });
      const saved = await newUser.save();
      res.json(saved);
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function updateUser(req,res) {
   try {
      const _id = req.params.id;
      const { nid,name,email,address } = req.body;
      const updUser = { nid,name,email,address };
      const updated = await User.findByIdAndUpdate(_id, updUser);
      res.status(200).json(updated);
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function deleteUser(req,res) {
   try {
      const id = req.params.id;
      await User.findByIdAndRemove(id);
      res.status(200).send({ status: 'User deleted' });
   } catch (err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

module.exports = {
   getUsers,
   getUser,
   saveUser,
   updateUser,
   deleteUser
}
