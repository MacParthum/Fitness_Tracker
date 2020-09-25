const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },

    exercises: [{
        name: {
          type: String,
          trim: true,
          required: "Name is Required",
        },

        type: {
          type: String,
          trim: true,
          required: "Type of workout is required!",
        },

        weight: {
          type: Number,
        },

        sets: {
          type: Number,
        },

        reps: {
          type: Number,
        },

        duration: {
          type: Number,
          required: "Duration of workout required!"
        },

        distance: {
          type: Number,
        },
      },
    ],
  },{
    toJSON: {
      virtuals: true,
    }
  })

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercise.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
