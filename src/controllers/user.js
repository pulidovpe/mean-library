const User = require('../models/User');

async function getUsers(req,res) {
   try {
      const users = await User.find({});
      res.status(200).json(users);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if(err.status == '503' || err.status == '504') return res.status(503).json({ error: err.message });
      return res.status(404).json({ error: err.message });
   }
}
// Get user by the NID
async function getUser(req,res) {
   try {
      const nid = req.params.id;
      const user = await User.findOne({nid});
      res.status(200).json(user);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if(err.status == '503' || err.status == '504') return res.status(503).json({ error: err.message });
      return res.status(404).json({ error: err.message });
   }
}

async function saveUser(req,res) {
   try {
      const { nid,name,email,address } = req.body;
      const newUser = new User({ nid,name,email,address });
      const saved = await newUser.save();
      res.status(201).json(saved);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if(err.name == 'ValidationError') return res.status(400).json({ error: err.message });
      if(err.name == 'MongoError') return res.status(409).send({ error: 'Duplicate key error' });
      return res.status(404).json({ error: err.message });
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
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if(err.name == 'ValidationError') return res.status(400).json({ error: err.message });
      if(err.name == 'MongoError') return res.status(409).send({ error: 'Duplicate key error' });
      return res.status(404).json({ error: err.message });
   }
}

async function deleteUser(req,res) {
   try {
      const id = req.params.id;
      await User.findByIdAndRemove(id);
      res.status(200).send({ status: 'User deleted' });
   } catch (err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      return res.status(404).json({ error: err.message });
   }
}

module.exports = {
   getUsers,
   getUser,
   saveUser,
   updateUser,
   deleteUser
}
