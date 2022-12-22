const Schema = require("mongoose").Schema
const mongoose = require("mongoose")
const { isEmail } = require("validator")


const waitlistSchema = new Schema ({
    email: {
        type: String,
        required: [true, 'Enter an Email'],
        unique: [true, 'This email has already been registered'],
        trim: true,
        validate: [ isEmail, 'Please enter a valid email']
    }
},
    {timestamps: true}
)

module.exports = mongoose.model("Waitlist", waitlistSchema)