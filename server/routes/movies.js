const express = require('express')
const router = express.Router();
const Movies = require('../models/movies');

//Get all movies
router.get('/',(req,res)=>{
    Movies.find()
    .then(movie => res.json(movie))
    .catch(error => res.status(400).res.json(`Error: ${error}`))
})
module.exports = router;

//Add new movie
router.post('/add',(req,res)=>{
    const newMovie = new Movies({
        name:req.body.name,
        language:req.body.language,
        date:req.body.date
    })
    newMovie.save()
    .then(()=>res.json('new movie added'))
    .catch(error => res.status(400).res.json(`Error: ${error}`))
})

//Find Movie by ID
router.get('/:id',(req,res)=>{
    Movies.findById(req.params.id)
    .then(movie=>res.json(movie))
    .catch(error=>res.status(400).res.json(`Error: ${error}`))
})

router.put('/update/:id',(req,res)=>{
    Movies.findById(req.params.id)
    .then(movie=>{
        movie.name= req.body.name;
        movie.language = req.body.language;
        movie.date = req.body.date;
        movie
        .save()
        .then(()=>res.json("movie is updated"))
        .catch((error)=>res.status(400).res.json(`Error: ${error}`))
    })
})

router.delete('/:id',(req,res)=>{
    Movies.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Movie is DELETED"))
    .catch((error)=>res.status(400).res.json(`Error: ${error}`))
})