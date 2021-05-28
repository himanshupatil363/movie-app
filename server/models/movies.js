const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    language:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    image:{
        type:String,
        require:true
    },
    // video:{
    //     type:String,
    //     require:true
    // }

})

const Movies = mongoose.model("Movie",movieSchema)
module.exports = Movies;