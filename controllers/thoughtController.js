const { Thought } = require("../models");

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
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create new thought
  // async createThought(req, res) {
  //     try {
  //         const newThought = await Thought.create(req.body);
  //         res.json(newThought);
  //     } catch (err) {
  //         res.status(500).json(err);
  //     }
  // },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await User.findByIdAndUpdate(
        { _id: req.body.userId },
        // { $push: { thoughts: thought._id } },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Application created, but found no user with that ID",
        });
      }

      res.json("Thought created");
    } catch (err) {
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

  // testing
};
