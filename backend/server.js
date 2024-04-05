const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
app.use(cors())
app.use(express.json())



const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true}
const mongoURI = "mongodb+srv://jeremysoh222:kk6dGaMao5h7CoLW@cluster0.ke2biwp.mongodb.net/SmartParking"

mongoose.connect(mongoURI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))


const Table2Model = require('./Table2Schemas')
const Table3Model = require('./Table3Schemas')

app.get('/getCameraImages2', (req, res)=> {
    Table2Model.find()
    .then(camera_Image2=> res.json(camera_Image2))
    .catch(err => res.json(err))
})

app.get('/getParkingSpace', (req, res)=> {
    Table3Model.find()
    .then(parking_space=> res.json(parking_space))
    .catch(err => res.json(err))
})

const port = 3001
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})