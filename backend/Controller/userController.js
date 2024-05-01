const UserModel = require("../Model/userModel");

const getOrderStatus = (req, res) => {
  try {
    const status = UserModel.find();
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json(error);
  }
};

//here create a post method where we change the order Status

module.exports = { getOrderStatus };
