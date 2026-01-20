import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser';
import "./db.js"
import personRoutes from './routes/personRoutres.js'
import menuRoutes from './routes/menuRoutes.js'
const app = express();
const port = process.env.PORT
app.use(bodyParser.json())

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})