const mongoose  = require('mongoose');
mongoose.connect("mongodb+srv://anuj:7Kd4s2G3RoVCmcWO@cluster0.x0sclaz.mongodb.net/Library", { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
//*U