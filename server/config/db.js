const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/ToDo').on('open', ()=>{
    console.log("mongooDB connected");
}).on('error',()=>{
    console.log("mongooDB connected error");
});

module.exports = connection;