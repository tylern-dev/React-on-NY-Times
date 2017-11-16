const path = require('path');
let db = require(path.join(__dirname, '../models/articles'));



module.exports = function (app) {
    app.get("/api/saved", (req, res) => {
        db.Article.find({})
            .then((result) => res.send(result))
            .catch((error) => res.send(error))
    });

    app.post("/api/saved", (req, res) =>{
        console.log(req.body)
    })

    
}