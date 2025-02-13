import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import applyRoutes from './routes/apply.js';
import applyProcRoutes from './routes/applyProc.js'; 
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';

dotenv.config(); 
const app = express();

app.use(cors()); 
app.use(express.json()); 


app.use('/apply', applyRoutes);        
app.use('/applyProc', applyProcRoutes); 
app.use('/admin', adminRoutes);         
app.use('/', mainRoutes);            
app.use('/recruiting', recruitingRoutes);

app.get('/', (req, res) => {
  res.json({ success: true, message: "EVI$ION 백엔드 서버가 정상적으로 실행 중입니다!" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '서버 내부 오류 발생' });
});

const PORT = process.env.PORT|| 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
