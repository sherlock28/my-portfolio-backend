const router = require("express").Router();
const { usersCtrl } = require("../controllers");

router.post("/signin", usersCtrl.signIn);
router.post("/signout", usersCtrl.signOut);

module.exports = router;