module.exports = {
  indentify: (req, res) => {
    const userInfo = {
      id: 20211011,
      name: "J18B",
    };
    res.json({
      code: 200,
      success: true,
      data: userInfo,
    });
  },
};
