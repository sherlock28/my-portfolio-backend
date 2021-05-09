module.exports = {
  projectsCtrl: {
    deleteProject: require("./projects/deleteProject.ctrl"),
    postProject: require("./projects/postProject.ctrl"),
    getProjects: require("./projects/getProjects.ctrl"),
    putProjects: require("./projects/editProject.ctrl"),
    getProjectById: require("./projects/getProjectById.ctrl"),
    getPublicProjects: require("./projects/getPublicProjects")
  },
  usersCtrl: {
    signUp: require("./users/signUp.ctrl"),
    signIn: require("./users/signIn.ctrl"),
    signOut: require("./users/signOut.ctrl"),
  },
};
