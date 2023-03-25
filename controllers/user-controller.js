const { User, Thought } = require('../models');

const userController = {
    // Get api/users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Get api/users/:id
    async getUserById(req, res) {
        try{
            const user = await User.findOne({_id: req.params.id});
            res.status(200).json(user);
        }   catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Post api/users
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Put api/users/:id
    async updateUser(req, res) {
        try{
            const user = await User.findOneAndUpdate({_id: req.params.id},{$set: req.body}, {new: true});
            if (!user) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Delete api/users/:id
    async deleteUser(req, res) {
        try{
            const user = await User.findOneAndDelete({_id: req.params.id});
            if (!user) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }
            res.status(200).json(user);

        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },


    // Post api/users/:userId/friends/:friendId
    async addFriend(req, res) {
        try{ 
            const user = await User.findByIdAndUpdate({_id: req.params.userId}, {$push: {friends: req.params.friendId}}, {new: true});
            if (!user) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.friendId}, {$push: {friends: req.params.friendId}}, {new: true});
            if (!friend) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Delete api/users/:userId/friends/:friendId
    async deleteFriend(req, res) {
        try{
            const user = await User.findByIdAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {new: true});
            if (!user) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.friendId}, {$pull: {friends: req.params.friendId}}, {new: true});  
            if (!friend) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }
            res.status(200).json({message: "Bye, Felicia"});
        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }

    }
};


module.exports = userController;
