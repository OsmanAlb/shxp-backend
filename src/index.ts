import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 3001

// app
const app = express();
app.get('/', (req, res) => {
    res.send('Hii !');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})