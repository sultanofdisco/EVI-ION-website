const getMainPage = async (req, res) => {
    res.status(200).json({ message: "메인 페이지 데이터 제공" });
}

module.exports = {getMainPage};