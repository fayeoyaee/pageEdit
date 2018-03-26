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

        page.websiteId = websiteId;
        this.pages.push(page);
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
                this.pages[x] = page;
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
                return;
            }
        }
   });

}