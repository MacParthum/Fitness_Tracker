const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercise: [
    {
      type: {
        type: String,
        trim: true,
      },



      name String

      
      duration number
      weight number default 0
      reps number
      sets number
      distance number





    },
  ],
});

const User = mongoose.model("workout", workoutSchema);

module.exports = workout;
