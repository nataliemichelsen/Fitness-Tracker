// require - ✓ (match api)
// path not necessary
const express = require('express');
const router = express.Router();

// routers - ✓
// fixed res.sendFile(code) for mongo
router.get("/exercise", (req, res) => {
  res.sendFile(`$({process.cwd()}/../public/exercise.html)`);
});

router.get("/stats", (req, res) => {
  res.sendFile(`$({process.cwd()}/../public/stats.html)`);
});

// export - ✓
module.exports = router;

// needed to construct this page from existing code
  // require at top was slightly off
    // routers were mostly alright with a few changes
      // exports was good
