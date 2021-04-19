const { cloudinary } = require("../../config");
const { Project } = require("../../models");

const deleteProjects = async (req, res) => {
  try {
    const { public_id } = req.params;

    const project = await Project.findOneAndRemove(public_id);

    const result = await cloudinary.uploader.destroy(project.public_id);
  
    res.json({ status: "Ok", message: "Project successfully deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = deleteProjects;
