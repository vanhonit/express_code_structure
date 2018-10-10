const router = require('express').Router();

function signIn(req, res) {
  /* eslint no-unused-vars:0 */
  // ...
}

function profile(req, res) {
  res.render('users/profile');
}

router.post('/users/sign-in', signIn);

module.exports = router;
