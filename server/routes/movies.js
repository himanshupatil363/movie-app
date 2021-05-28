const express = require('express')
const router = express.Router();
const Movies = require('../models/movies');
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,"./client/public/uploads")
    },
    filename:(req,file,callback)=>{
    callback(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage:storage,
    fileFilter: (req, file, cb) => {
        if(file.fieldname==="movieImage"){
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          
        }
    }
    else if(
        file.fieldname==="movieVideo"
    ){
        if (file.mimetype == "video/mp4" || file.mimetype == "video/webm" || file.mimetype == " video/ogg") {
            cb(null,true);
          } else {
            cb(null, false);
            
          }
    }
      }
});
var Uploads = upload.fields([{ name: 'movieImage',maxCount:1}, { name: 'movieVideo',maxCount:1}])


//Get all movies
router.get('/',(req,res)=>{
    Movies.find()
    .then(movie => res.json(movie))
    .catch(error => res.status(400).res.json(`Error: ${error}`))
})
module.exports = router;

//Add new movie
router.post('/add',Uploads,(req,res)=>{
    if(!req.files.movieImage){
        res.json({ error: 'Invalid image extension' })
    }
    else if(!req.files.movieVideo){
        res.json({ error: 'Invalid video extension' })
    }
    else{
    const newMovie = new Movies({
        name:req.body.name,
        language:req.body.language,
        date:req.body.date,
        image:req.files.movieImage[0].filename,
        video:req.files.movieVideo[0].filename
    })
    newMovie.save()
    .then(()=>res.json('new movie added'))
    .catch(error => res.status(400).res.json(`Error: ${error}`))
}
})

//Find Movie by ID
router.get('/:id',(req,res)=>{
    Movies.findById(req.params.id)
    .then(movie=>res.json(movie))
    .catch(error=>res.status(400).res.json(`Error: ${error}`))
})

// router.put('/update/:id',uploadVideo.single("movieVideo"),(req,res)=>{
//     Movies.findById(req.params.id)
//     .then(movie=>{
//         movie.name= req.body.name;
//         movie.language = req.body.language;
//         movie.date = req.body.date;
//         // movie.image=req.file.originalname;
//         movie.video=req.file.originalname
//         movie
//         .save()
//         .then(()=>res.json("movie is updated"))
//         .catch((error)=>res.status(400).res.json(`Error: ${error}`))
//     })
// })

router.delete('/:id',(req,res)=>{
    Movies.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Movie is DELETED"))
    .catch((error)=>res.status(400).res.json(`Error: ${error}`))
})