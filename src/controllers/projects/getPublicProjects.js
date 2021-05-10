const { Project } = require("../../models");

const getPublicProjects = async (req, res) => {
  try {
    const projects = await Project.find({},{
      _id: 1,
      title: 1,
      description: 1,
      repositoryURL: 1,
      pageURL: 1,
      imageURL: 1,
    }).lean();
    res.json({
      status: "Ok",
      message: "List of all projects",
      data: {
        projects,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = getPublicProjects;
