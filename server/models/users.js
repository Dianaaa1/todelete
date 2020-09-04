const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.set("useCreateIndex", true);

mongoose
  .connect("mongodb://localhost/MyDatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    index: {
      unique: true,
    },
  },
  password: String,
});
userSchema.plugin(passportLocalMongoose);

// User Schema model
const User = new mongoose.model('User', userSchema, 'User');

//const user = new User({ username: "nick", password: "nick18"});
User.register({username:'zzzz', active: false},'zzzz111111111111111');

module.exports = User;
