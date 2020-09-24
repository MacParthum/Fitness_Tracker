const worKout = require("../models/workout");

module.exports = function(app){ 
    app.get("/api/workouts",function(req,res){  
        worKout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

}