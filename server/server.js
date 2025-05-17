const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const userRoute = require('./routes/userRoute');
require('dotenv').config();


// Database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database Connected successfully")
    })
    .catch((err) => console.log(err.message))

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

// All the routes from the routes directory are managed here.
app.use('/api/auth', userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
