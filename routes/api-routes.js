const path = require('path');
let db = require(path.join(__dirname, '../models'));




module.exports = function (app) {
    app.get("/api/saved", (req, res) => {
        db.Article.find({})
            .then((result) => res.send(result))
            .catch((error) => res.send(error))
    });

    app.post("/api/saved", (req, res) =>{
        console.log(req.body.title)
        let articleData;

        // there are 2 ways the nytAPI sends data for the headline. This check which is valid and then saves the article
        if (req.body.title){
            articleData = [{
                headline: req.body.title,
                snippet: req.body.abstract,
                url: req.body.short_url,
                saved: true
            }];
        } else {
            articleData = [{
                headline: req.body.headline.main,
                snippet: req.body.snippet,
                url: req.body.web_url,
                pub_date: req.body.pub_date,
                saved: true
            }];
        }
        
        db.Article.create(articleData)
            .then(response =>{
                console.log(response)
            })
            .catch(error => console.log(error));
    });


    app.delete("/api/saved/:id", (req, res) =>{
        db.Article.findByIdAndRemove({_id: req.params.id})
            .then(response => console.log('removed', response))
            .catch(error => console.log('remove error', error))
    });

    
}