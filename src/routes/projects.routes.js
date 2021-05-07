const router = require("express").Router();
const { projectsCtrl } = require("../controllers");

router.get("/projects", projectsCtrl.getProjects);
router.post("/projects", projectsCtrl.postProject);
router.delete("/projects/:id_project", projectsCtrl.deleteProject);
router.put("/projects/:id_project", projectsCtrl.putProjects);

module.exports = router;
