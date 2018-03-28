pages = [
    { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" },
];


module.exports = function (app) {
    // create
    app.post('/api/website/:websiteId/page', function (req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;

        page._id = Math.floor(Math.random() * 1000);
        var flag = true;
        while (flag) {
            for (let a in pages) {
                if (a._id == page._id) {
                    flag = true;
                    break;
                }
            }
            flag = false;
        }
        page.websiteId = websiteId;
        this.pages.push(page);
        return res.send(page);
    });

    // findAll
    app.get('/api/website/:websiteId/page', function (req, res) {
        var websiteId = req.params.websiteId;

        var websitePages = [{}];
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId == websiteId) {
                websitePages.push(this.pages[x]);
            }
        }
        websitePages.splice(0, 1);
        console.log(websitePages)
        return res.send(websitePages);
    });

    // findById
    app.get('/api/page/:pageId', function (req, res) {
        var pageId = req.params.pageId;

        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                return res.send(this.pages[x]);
            }
        }

    });

    // update
    app.put('/api/page/:pageId', function (req, res) {
        var pageId = req.params.pageId;
        var page = req.body;

        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                for (let key of Object.keys(this.pages[x])) {
                    if ((key in page)) {
                        for (let key of Object.keys(this.pages[x])) {
                            if ((key in page)) {
                                this.pages[x][key] = page[key];
                            }
                        }
                        console.log(pages)
                        return res.send(this.pages[x]);
                    }
                }
            }
        }
    });

    // delete
    app.delete('/api/page/:pageId', function (req, res) {
        console.log("Get delete page req");

        var pageId = req.params.pageId;
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                this.pages.splice(x, 1);
                return res.send({message:"delete widget succeed"});
            }
        }
    });

}