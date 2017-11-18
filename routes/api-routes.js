const path = require('path');
let db = require(path.join(__dirname, '../models'));




module.exports = function (app) {
    app.get("/api/saved", (req, res) => {
        db.Article.find({})
            .then((result) => res.send(result))
            .catch((error) => res.send(error))
    });

    app.post("/api/saved", (req, res) =>{
        console.log(req.body)
        
       

        const articleData = [{
            headline: req.body.headline.main,
            snippet: req.body.snippet,
            url: req.body.web_url,
            pub_date: req.body.pub_date,
            saved: true
        }]
        // console.log('db article data ----',articleData);
        
        // db.Article.create({
        //     headline: req.body.headline.main,
        //     snippet: req.body.snippet,
        //     url: req.body.web_url,
        //     pub_date: req.body.pub_date,
        //     saved: true
        // })
        //     .then(result => console.log(result))
        //     .catch(error => consol.log(error))
        
        db.Article.create(articleData)
            .then(response =>{
                console.log(response)
            })
            .catch(error => console.log(error))


    })

    
}