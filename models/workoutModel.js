const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { 
    timestamps: true,
})

// Set `strictQuery` to `true` to suppress the deprecation warning message
mongoose.set('strictQuery', true);

module.exports = mongoose.model('Workout', workoutSchema)

