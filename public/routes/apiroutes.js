const router = require("express").Router();
const noteDB = requiere('../db/noteDB');

router.get("/notes",function(req,res){
    noteDB,getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
});

router.post("/notes", function(req,res){
    store.addNote(req.body).then(note => res.json(note)).catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req,res){
    noteDB.removeNote(req.params.id).then(() => res.json({ok: true})).catch(err => res.status(500).json(err));
});

module.exports = router