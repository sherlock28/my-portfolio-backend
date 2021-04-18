const cloudinary = require("cloudinary").v2;
const { Project } = require("../../models");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    res.status(201).json({ status: "Ok", msg: "Project successfully added" });
  } catch (err) {
    res.status(500).json({ status: "Ok", msg: "Internal server error" });
  }
};

module.exports = postProjects;
