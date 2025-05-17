const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


// User registration controller
module.exports.register = async (req, res, next) => {

    try {
        const { name, email, birth, password } = req.body;

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ msg: "Another user is associated with this email" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            birth,
            password: hashedPassword
        })
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2d' })

        return res.status(201).json({
            status: true,
            user: {
                userId: user._id,
                name: user.name,
                email: user.email,
                birth: user.birth,
            },
            token
        })
    } catch (err) {
        next(err)
    }

}

// User login controller
module.exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '2d' }
        );

        return res.status(200).json({
            status: true,
            user: {
                userId: user._id,
                name: user.name,
                email: user.email,
                birth: user.birth,
            },
            token,
        });
    } catch (err) {
        next(err);
    }
}