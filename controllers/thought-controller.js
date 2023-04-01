const { User, Thought } = require("../models");

const thoughtController = {
  // Get api/thoughts

  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (err) {
      res
        .status(400)
        .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
    }
  },

  // Get api/thoughts/:id

  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });
      if (!thought) {
        res
          .status(404)
          .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
        return;
      }
      res.status(200).json(thought);
    } catch (err) {
      res
        .status(400)
        .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
    }
  },

  // Post api/thoughts

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
     
    
      res.status(200).json(thought);

      await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { thoughts: thought._id } }
      );
    } catch (err) {
      res
        .status(400)
        .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
    }
  },

  // Put api/thoughts/:id

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!thought) {
        res
          .status(404)
          .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
        return;
      }
      res.status(200).json(thought);
    } catch (err) {
      res
        .status(400)
        .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
    }
  },

  // Delete api/thoughts/:id

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });
      if (!thought) {
        res
          .status(404)
          .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
        return;
      }
      res.status(200).json(thought);
    } catch (err) {
      res
        .status(400)
        .json({ message: "I'm sorry Dave, I'm afraid I can't do that !" });
    }
  },

    // Post api/thoughts/:id/reactions

    async addReaction(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$push: {reactions: req.body}},
                {new: true}
            );
            if (!thought) {
                res.status(404).json({message: "I'm sorry Dave, this thought doesn't exist"});
                return;
            }
            res.status(200).json(thought);

        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    },

    // Delete api/thoughts/:id/reactions

    async deleteReaction(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            );
            if (!thought) {
                res.status(404).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
                return;
            }
            res.status(200).json(thought);

        } catch (err) {
            res.status(400).json({message: "I'm sorry Dave, I'm afraid I can't do that !"});
        }
    }
};

module.exports = thoughtController;
