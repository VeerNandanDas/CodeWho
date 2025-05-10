import express from 'express';
import aiRoutes from './routes/ai.routes.js';

const app = express(); 


app.use("/ai", aiRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000,()=>{
    console.log("server is running in 3000");
    
})

export default app; 
