var express = require('express')
var router = express.Router()
const Database = require('./movies')



//get all movies route
router.get('/movies', (req, res)=>{

    res.status(200).send(Database)
})


// get a specific movie
router.get('/movies/:id', (req, res)=>{
    const {id} =  req.params
    try{
        const exactMovie = Database.find((item)=>{return  item.id == id})

            res.status(200).json(exactMovie)

    }catch(err){
        res.status(400).json(error)
        console.log(err)
    }
})


// route to post movies to database
router.post('/newmovie', (req, res)=>{

const movie = {
    id: req.body.id,
    title: req.body.title,
    rating: req.body.rating,
    desc: req.body.desc

}
    try{
         Database.push(movie)
         res.status(200).json(movie)

    }

    catch(err){
        res.status(400).send('error in the request')
        console.log(err)
    }

})

// Update a movie in the databse
router.post('/movies/:id', (req, res)=>{
    const {id} =  req.params
    try{
        var exactMovie = Database.find((item)=>{return  item.id == id})

            const newTitle = req.body.title

                exactMovie.title = newTitle
                
                    
                Database.push(exactMovie)
            res.status(200).json(exactMovie)

    }catch(err){
        res.status(400).json(err)
        console.log(err)
    }
})

// delete a movie in the databse
router.delete('/movies/:id', (req, res)=>{
    const {id} =  req.params
    try{
        var theMovie = Database.find((item)=>{return  item.id == id})

        const pos = Database.indexOf(theMovie)
    
                Database.splice(pos, 1)
            res.status(200).json(Database)

    }catch(err){
        res.status(400).json(err)
        console.log(err)
    }
})

module.exports = router;