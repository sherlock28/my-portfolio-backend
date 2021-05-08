const { Project } = require("../../models");

const getProjectById = async (req, res) => {
  try {
    const { id_project } = req.params;
    const project = await Project.findById(id_project);
    res.json({
      status: "Ok",
      message: "Project obtained",
      data: {
        project,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getProjectById;