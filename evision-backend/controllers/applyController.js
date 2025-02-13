export const getApplyPage = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "지원서 페이지에 접근할 수 있습니다."
  });
};