const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel.js');


module.exports = (passport)=>{
  passport.serializeUser((user, done)=>{
    done(null, user._id);
  });


  passport.deserializeUser((_id, done)=>{
    User.findById(_id, (err, user)=>{
      done(err, user);
    });
  });


  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done)=>{
    process.nextTick(()=>{
      User.findOne({email: email}, (err, user)=>{
        if(err) return done(err);
        if(user) {
          if(user.validPassword(password)){

            return done(null, user);
          }else {

            return done(null, false);
          }
        } else {
          var newUser = new User(req.body);
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save((err)=>{
            if(err) {

              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));

}; //end of module exports
