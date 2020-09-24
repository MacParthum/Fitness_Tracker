const router = require("express").router()
const Workout = require("../models/workout")

router.get("/api/workouts", (req,res) => {
    Workout.find()
    .then(workouts=> res.json(workouts))
    .catch(err => res.json(err))
})

router.post("/api/workouts", (req,res) => {
    Workout.create()
    .then(workout => res.json(workout))
    .catch(err=> res.json(err))
})

router.put("/api/workouts/:id", (req,res)=> {
    
})