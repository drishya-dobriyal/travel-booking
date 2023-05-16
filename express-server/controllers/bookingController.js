module.exports.home = function (req, res) {
  return res.send({
    status: "Success",
    message: "Welcome to the world of travelling",
  });
};
