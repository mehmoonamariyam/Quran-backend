const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const { courseRouter } = require('./routes/courseRouter');
const { tutorRouter } = require('./routes/tutorsRouter');
const { authRouter } = require('./routes/authRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/courses', courseRouter)
app.use('/api/tutors', tutorRouter)
app.use('/signup', authRouter)


mongoose.connect('mongodb+srv://mehmoonamaryam086:Moona422@cluster0.xdimqfm.mongodb.net/Quran')
.then(()=> console.log('connected')).catch((error)=>{console.log(error)})


app.get('/', (req, res) => {
    res.send("Homepage")
})

app.listen(8080, ()=>{
    console.log("srever is working")
})