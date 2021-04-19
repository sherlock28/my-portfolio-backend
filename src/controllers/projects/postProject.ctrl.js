const { cloudinary } = require("../../config");
const { Project } = require("../../models");
const fs = require("fs-extra");

const postProjects = async (req, res) => {
  const { title, description, repositoryURL, pageURL } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const newProject = Project({
      title,
      description,
      repositoryURL,
      pageURL,
      imageURL: result.secure_url,
      public_id: result.public_id,
    });

    await newProject.save();

    await fs.unlink(req.file.path);

    res
      .status(201)
      .json({ status: "Ok", message: "Project successfully added" });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = postProjects;
