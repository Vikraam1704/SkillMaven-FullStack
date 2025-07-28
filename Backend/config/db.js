const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/user')
        .then(() => console.log("mongoDB connected✨"))
        .catch((err) => console.log(err))
}

module.exports = connectDB