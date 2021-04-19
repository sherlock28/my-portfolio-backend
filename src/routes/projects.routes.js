const router = require("express").Router();
const { projectsCtrl } = require("../controllers");

router.get("/projects", projectsCtrl.getProjects);
router.post("/projects", projectsCtrl.postProject);
router.delete("/projects/:public_id", projectsCtrl.deleteProject);

module.exports = router;