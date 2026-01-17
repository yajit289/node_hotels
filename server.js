
import express from 'express'
import bodyParser from 'body-parser';
import "./db.js"
import personRoutes from './routes/personRoutres.js'
import menuRoutes from './routes/menuRoutes.js'

const app = express();
app.use(bodyParser.json())

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})