const router = require("express").Router();
const { users } = require("../middlewares");
const { projectsCtrl } = require("../controllers");

router.get("/projects", users.fieldUserValidation, projectsCtrl.getProjects);
router.get("/projects/public", projectsCtrl.getPublicProjects);
router.get(
  "/projects/:id_project",
  users.fieldUserValidation,
  projectsCtrl.getProjectById
);
router.post("/projects", users.fieldUserValidation, projectsCtrl.postProject);
router.delete(
  "/projects/:id_project",
  users.fieldUserValidation,
  projectsCtrl.deleteProject
);
router.put(
  "/projects/:id_project",
  users.fieldUserValidation,
  projectsCtrl.putProjects
);

module.exports = router;
