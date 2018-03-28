websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo", developerId: "123", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" },
];

module.exports = function (app) {
    // for createWebsite
    app.post('/api/user/:userId/website', function (req, res) {
        var userId = req.params.userId;
        var website = req.body;

        website._id = Math.floor(Math.random() * 1000);
        var flag = true;
        while (flag) {
            for (let aweb in websites) {
                if (aweb._id == website._id) {
                    flag = true;
                    break;
                }
            }
            flag = false;
        }
        website.developerId = userId;
        this.websites.push(website);
        console.log("websites")
        console.log(websites)
        return res.send(website);
    });

    // for findWebsitesByUser
    app.get('/api/user/:userId/website', function (req, res) {
        var userId = req.params.userId;

        var userWebsites = [{}];
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId == userId) {
                userWebsites.push(this.websites[x]);
            }
        }
        userWebsites.splice(0, 1);
        return res.send(userWebsites);
    });

    // for findWebsiteById
    app.get('/api/website/:websiteId', function (req, res) {
        var websiteId = req.params.websiteId;
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                return res.send(this.websites[x]);
            }
        }
    });

    // for updateWebsite
    app.put('/api/website/:websiteId', function (req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        console.log(website)
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                for (let key of Object.keys(this.websites[x])) {
                    if ((key in website)) {
                        this.websites[x][key] = website[key];
                    }
                }
                console.log(websites)
                return res.send(this.websites[x]);
            }
        }
    });

    // deleteWebsite
    app.delete('/api/website/:websiteId', function (req, res) {
        console.log("Get delete website req");
        var websiteId = req.params.websiteId;
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                this.websites.splice(x, 1);
                return;
            }
        }
    });

}