const { model, Schema } = require('mongoose');

const ProjectSchema = new Schema({
    title: String,
    description: String,
    repositoryURL: String,
    pageURL: String,
    imageURL: String,
    public_id: String,
});

module.exports = model('Project', ProjectSchema);