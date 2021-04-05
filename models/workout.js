//db to store all workout information 

//require mongoose
const mongooose = require('mongoose');

const Schema = mongooose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    Exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter completed exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        length: {
            type: String,
            trim: true,
            required: "Enter workout length"
        },
        weight: {
            type: Number,
            required: "Enter weight used"
        },
        reps: {
            type: Number,
            required: "Enter reps completed"
        },
        sets: {
            type: Number,
            required: "Enter sets completed"
        },
        distance: {
            type: Number,
            required: "Enter distance completed"
        }
    }]
});

const Workout = mongoose.mode;("Workout", workoutSchema);

modeule.exports = Workout;
