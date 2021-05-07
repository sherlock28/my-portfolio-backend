const { Project } = require("../../models");

const putProject = async (req, res) => {
  try {
    const { id_project } = req.params;
    const { title, description, repositoryURL, pageURL } = req.body;

    const project = await Project.findById(id_project);

    const deleteResult = await cloudinary.uploader.destroy(project.public_id);

    const saveResult = await cloudinary.uploader.upload(req.file.path);

    const projectUpdated = await Project.findByIdAndUpdate(
      { _id: id_project },
      {
        $set: { title, description, repositoryURL, pageURL },
      },
      { new: true }
    );

    await fs.unlink(req.file.path);

    res.json({
      status: "Ok",
      message: "Updated project",
      data: {
        projectUpdated,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = putProject;
