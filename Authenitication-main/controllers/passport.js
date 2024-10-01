const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const UserModel = require('../models/userModel');
const GoogleAuthModel = require('../models/googleAuthModel'); 
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(error => {
            done(error, null);
        });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3030/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let googleAuthData = await GoogleAuthModel.findOne({ googleId: profile.id });
        if (!googleAuthData) {
            googleAuthData = await GoogleAuthModel.create({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
        }
        return done(null, googleAuthData);
    } catch (error) {
        return done(error, null);
    }
}));

module.exports = passport; 
