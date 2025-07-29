const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vikraamd1704:viky@todo.vsghj7j.mongodb.net/?retryWrites=true&w=majority&appName=Todo')
        .then(() => console.log("mongoDB connected✨"))
        .catch((err) => console.log(err))
}

module.exports = connectDB