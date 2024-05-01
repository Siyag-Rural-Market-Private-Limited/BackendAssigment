const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  orderStatus: String,
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
