const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anuj:7Kd4s2G3RoVCmcWO@cluster0.x0sclaz.mongodb.net/Library",
                 { useNewUrlParser: true, 
                   useUnifiedTopology: true 
                 });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;


