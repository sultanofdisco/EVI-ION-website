const getRecruitingPage = async (req, res) => {
    res.status(200).json({ message: "모집 페이지 데이터 제공" });
}

module.exports = {getRecruitingPage};