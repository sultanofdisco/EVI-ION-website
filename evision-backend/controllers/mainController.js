export const getMainPage = async (req, res) => {
  res.status(200).json({
      success: true,
      message: "메인 페이지에 접근할 수 있습니다."
  });
};
