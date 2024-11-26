import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js'
import foodRouter from "./routers/foodRouter.js"
import chartRouter from './routers/chartRouter.js'

dotenv.config();
const app = express()
app.get('/', (req, res) => {
    res.send(`Here it is : ${process.env.nodeailerEmail} `)
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const conn = process.env.DATABASE_URL

mongoose.connect(conn)


// routers ...

app.use('/api/users', userRouter)
app.use('/api/foods', foodRouter)
app.use('/api/chart', chartRouter)




const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`Serving at localhost:${port}`) })