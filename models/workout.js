// require - ✓
const mongoose = require("mongoose");

// schema - ✓
const Schema = mongoose.Schema;

// exercise - ✓
// edited slightly
const exerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type."
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter an exercise name."
        },
        duration: {
          type: Number,
          required: "Please enter an exercise duration. (in minutes)"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
exerciseSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

// mongoose - ✓
const Workout = mongoose.model("Workout", exerciseSchema);

// export - ✓
module.exports = Workout;
