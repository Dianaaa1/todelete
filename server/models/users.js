const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


mongoose.set('useCreateIndex', true)
const userSchema = new mongoose.Schema({
  username: {
      type: String,
      unique: true,
      require: true,
      index: {
          unique: true,
      }
  },
  password: String,
});
mongoose.connect('mongodb://127.0.0.1:27017/users', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});


userSchema.plugin(passportLocalMongoose);

// User Schema model
const User = new mongoose.model("User", userSchema);

const user = new User({ username: "nick", password: "nick18", index: 0 });
user.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  })
module.exports = User;
