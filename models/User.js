const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   image:{
        type:String,
      
     }
});
module.exports = User = mongoose.model('users',UserSchema);