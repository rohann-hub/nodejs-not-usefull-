// CREATE the server in this File

const express = require('express');


const app = express()
app.use(express.json()) // to  parse the incoming request body as JSON ( middleware )


const notes = []

/* title , description */

/* USE RESTapi method => POST/notes  */
app.post('/notes', (req , res) => {
    notes.push(req.body)

    res.status(201).json({
        message : "Note created successfully"
    })

})

/* GET /notes */
app.get('/notes', (req , res) => {
 
    res.status(200).json({
        message : "Notes retrieved successfully",
        notes : notes
    })

})


/*DELETE/notes/index*/ 
app.delete('/notes/:index', (req , res) => {

    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({
        message : "Note deleted successfully"
    })

})

/* PATCH /notes/index */
app.patch('/notes/:index', (req , res) => {

    const index = req.params.index
    const description = req.body.description

    notes[ index ].description = description

    res.status(200).json({
        message : "Note updated successfully"
    })
})

module.exports = app