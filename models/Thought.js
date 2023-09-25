const { Schema, model } = require("mongoose");
// const User = require('./User');
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    // author: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // },
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: value => value.toLocaleString(),
    },
    // username: {
    //   type: String,
    //   required: true,
    // },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
});

// thoughtSchema.pre('save', async function() {
//   try {
//     // Find the user document and update its posts array with the new post
//     const user = await User.findOneAndUpdate(
//       this.author,
//       { $push: { thoughts: this._id } },
//       { new: true }
//     );
   
//   } catch (err) {
//     console.error(err);
//   }
// });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
