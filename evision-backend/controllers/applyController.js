const getApplyPage = async (req, res) => {
  res.status(200).json({ message: "지원 페이지 데이터 제공" });
}

module.exports = {getApplyPage};