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
      const { nid,name,address,email } = req.body;
      const newUser = new User({ nid,name,address,email });
      await newUser.save();
      console.log(JSON.stringify(newUser));
      res.status(200).send({ status: 'User saved' });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function updateUser(req,res) {
   try {
      const id = req.params.id;
      const { nid,name,address,email,book } = req.body;
      const updUser = { nid,name,address,email,book };
      await User.findByIdAndUpdate(id, updUser);
      console.log(JSON.stringify(updUser));
      res.status(200).send({ status: 'User updated' });
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
