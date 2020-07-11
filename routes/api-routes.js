// require - ✓ (matched to  html)
// 'workout' not necessary
const express = require('express');
const router = express.Router();

// require db added - ✓
const db = require('../models')

// get - ✓
// moved to top
// needed some code additions / adjustments for proper connection / functionality
router.get("/api/workouts", (req, res) => {
  db.Workout.find().then(dbExercise => {
    res.json(dbExercise);
  })
    .catch(err => {
      res.json(err);
    });
});

// post - ✓
// needed some code additions / adjustments for proper connection / functionality
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then(dbExercise => {
    res.json(dbExercise);
  })
    .catch(err => {
      res.json(err);
    });
});

// put - ✓
// needed some code additions / adjustments for proper connection / functionality
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  ).then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// get - ✓
// needed some code additions / adjustments for proper connection / functionality
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find().sort({'day': 1}).limit(7).then(dbExercise => {
      console.log(dbExercise)
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// delete unnecessary -removed-

// export - ✓
module.exports = router;

// needed to construct this page from existing code
  // require at top was slightly off - matched it to html-routes
    // routers were mostly alright with a few changes and additions
      // exports was good