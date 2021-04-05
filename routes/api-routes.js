const { Workout } = require("../models");
var db = require("../models");

module.exports = function(app) {
  
    //workout routes
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({}, (err,workout) => {
            if(err){
                console.log(err);          
            } else {
                res.json(workout);
            }
        });  
    });

    //add exercise
    app.put("/api/workouts/:id", ({body,params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            {$push: { Exercises:body }},
            {new:true, runValidators: true}
        )
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //create new workout
    app.post("/api/workouts", (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

    app.get("/api/workouts/range", ({}, req,res) => {
        db.Workout.find({}).then((workout) => {
            res.json(workout);
        }).catch(err => {
            res.status(400).json(err);
        }); 
    });
}