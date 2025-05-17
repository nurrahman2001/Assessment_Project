const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },

        birth: {
            type: String,
            required: true
        },

        password: {
            type: String,
            minlenght: 8,
            required: true
        },

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("users", userSchema)