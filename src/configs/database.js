const mongoose = require('mongoose');
const {mongodb} = require('./keys'); //contiene las url de la base de datos

mongoose.connect(mongodb.URI,{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db=>console.log('connection success!'))
.catch(err=>console.log(err));