const router = require("express").Router();
const { users } = require("../middlewares");
const { projectsCtrl } = require("../controllers");

router.get("/projects", users.tokenValidation, projectsCtrl.getProjects);
router.get("/projects/public", projectsCtrl.getPublicProjects);
router.get(
  "/projects/:id_project",
  users.tokenValidation,
  projectsCtrl.getProjectById
);
router.post("/projects", users.tokenValidation, projectsCtrl.postProject);
router.delete(
  "/projects/:id_project",
  users.tokenValidation,
  projectsCtrl.deleteProject
);
router.put(
  "/projects/:id_project",
  users.tokenValidation,
  projectsCtrl.putProjects
);

module.exports = router;
