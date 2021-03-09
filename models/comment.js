var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    name: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    content: String
});

module.exports = mongoose.model("Comment", commentSchema);
