const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('./controllers/passport');
const userRouter = require('./routes/userRoute');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true
}));

mongoose.connect("mongodb://localhost:27017/carDealer", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully.");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));

// Passport.js initialization
app.use(passport.initialize());
app.use(passport.session());

// Use userRouter for handling user-related routes
app.use('/', userRouter);

// Success and Failure routes
app.get('/success', (req, res) => res.send("Authentication successful!"));
app.get('/failure', (req, res) => res.send("Authentication failed!"));

// Log the server port and sensitive information for debugging (avoid this in production)
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
