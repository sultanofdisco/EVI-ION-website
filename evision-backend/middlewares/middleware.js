import express from 'express';
import cors from 'cors';

const middleware = (app) => {
    // JSON 요청을 파싱하도록 설정
    app.use(express.json());
    
    // CORS 허용 (프론트엔드와 연결할 때 필요)
    app.use(cors());
    
    // 에러 처리 미들웨어 (전역 오류 핸들링)
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ message: '서버 내부 오류 발생' });
    });
};

export default middleware;