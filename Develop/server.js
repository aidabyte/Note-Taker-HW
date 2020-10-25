var express = require("express");
var path = require("path")

const userNotes = [
    {
        name: "aida",
        notes: "hello"

}]



var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res) {
    // concatanating where my file is
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
    // concatanating where my file is
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes",function(req,res) {
    res.json(userNotes)
})





app.listen(PORT,() => console.log(`listening on PORT: ${PORT}`));