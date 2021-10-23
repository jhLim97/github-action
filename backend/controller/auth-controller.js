module.exports = {
  indentify: (req, res) => {
    const userInfo = {
      id: 20211011,
      name: "J18B에서 github-action 테스트 한번더 제발",
    };
    res.json({
      code: 200,
      success: true,
      data: userInfo,
    });
  },
};
