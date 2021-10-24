module.exports = {
  indentify: (req, res) => {
    const userInfo = {
      id: 20211011,
      name: "github-actions 테스트 완료됐습니다.",
    };
    res.json({
      code: 200,
      success: true,
      data: userInfo,
    });
  },
};
