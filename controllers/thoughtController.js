const { User, Thought } = require("../models");
const { findByIdAndUpdate } = require("../models/Thought");

module.exports = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      if(!thought) {
        return res.status(404).json({ message: 'No thought with that ID' })
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
  
      const user = await User.findByIdAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
  
      if (!user) {
        return res
          .status(404)
          .json({ message: 'Thought created but no user with this id!' });
      }
  
      res.json({ message: 'Thought successfully created' });
    } catch (err) {
      res.json(err);
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId  },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought found with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.json(err);
    }
  },

  // create reaction
  async createReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if(!reaction) {
        return res.status(404).json({ message: 'Something went wrong' });
      }

      return res.status(200).json(reaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete one reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if(!thought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }

      return res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete one thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: "No thought found with that ID" });
      }
      res.json({ message: "Thought deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },


};
