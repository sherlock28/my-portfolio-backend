module.exports = {
  projectsCtrl: {
    deleteProject: require("./projects/deleteProject.ctrl"),
    postProject: require("./projects/postProject.ctrl"),
    getProjects: require("./projects/getProjects.ctrl"),
  },
  usersCtrl: {
    signIn: require("./users/signIn.ctrl"),
    signOut: require("./users/signOut.ctrl"),
  },
};
