const { Project } = require("../../models");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().lean();
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

module.exports = getProjects;
