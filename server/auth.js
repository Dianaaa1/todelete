const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fetchUser = (() => {
  const user = { id: 1, username: 'Tom', password: 'restart' };
  return async () => {
    return user;
  }
})();

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await fetchUser();
    done(null, user);
  } catch(err) {
    done(err);
  }
});

passport.use(new LocalStrategy((username, password, done) => {
  fetchUser()
    .then(user => {
      if (username === user.username && password === user.password) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => { done(err) });
}));
