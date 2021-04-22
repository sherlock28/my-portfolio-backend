const { cloudinary } = require("../../config");
const { Project } = require("../../models");

const deleteProjects = async (req, res) => {
  try {
    const { id_project } = req.params;

    const project = await Project.findByIdAndRemove(id_project);

    const result = await cloudinary.uploader.destroy(project.public_id);
  
    res.json({ status: "Ok", message: "Project successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = deleteProjects;
