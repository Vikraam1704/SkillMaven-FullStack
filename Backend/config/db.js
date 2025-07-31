const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGOURL)
        .then(() => console.log("mongoDB connected✨"))
        .catch((err) => console.log(err))
}

module.exports = connectDB;