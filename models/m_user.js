const mongoose = require("mongoose")
// const { mongodb_connection } = require('../mongo_db_connection')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  well: {
    type: Boolean,
    default: false
  }
  ,
  // unstructured: {
  //   type: Object
  // }
})

const m_User = mongoose.model("user_data", UserSchema, 'custom_user_data')

module.exports = {m_User}