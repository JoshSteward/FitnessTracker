const { Workout } = require("../models");
var db = require("../models");

module.exports = function(app) {
  
    //workout routes
    //app.get("/api/workouts", (req,res) => {
        //db.Workout.find({}, (err,workout) => {
            //if(err){
                //console.log(err);          
            //} else {
                //res.json(workout);
            //}
        //});  
    //});

    app.get("/api/workouts", (req,res) => {
        db.Workout.aggregate([
            {$addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }], (err,workout) => {
            if(err){
                console.log(err);          
            } else {
                res.json(workout);
            }
        });  
    });


    //add exercise
    app.put("/api/workouts/:id", (req,res) => {
        //console.log("Exercise: "+ JSON.stringify(req.body));
        console.log(req.body);
        db.Workout.findByIdAndUpdate(req.params.id,
            {$push: { exercises: req.body }},
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
        db.Workout.create({}).then(workout => {
            res.json(workout);
        });
    });
    //app.get("/api/workouts/range", (req,res) => {
        //db.Workout.find({}, (err,workout) => {
            //console.log(workout);
            //if(err){
                //console.log(err);          
            //} else {
                //res.json(workout);
            //}
        //});  
    //});

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.aggregate([
            { $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }])
        .sort({
                day: -1 
            })
        .limit(7)
    .then((err,workout) => {
            console.log(workout);
            if(err){
                console.log(err);          
            } else {
                res.json(workout);
            }
        });  
    });
}