users = [
    { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" }
];

module.exports = function (app) {
    app.post('/api/user', function (req, res) {
        var user = req.body;
        user._id = Math.random();
        this.users.push(user);
        return res.send(user);
    });

    app.get('/api/user', function (req, res) {
        var userName = req.query.username;
        if (userName == null) {
            return res.status(400);
        }
        var password = req.query.password;
        if (password == null) {
            // provide findUserByUserName service
            for (let x = 0; x < this.users.length; x++) {
                if (this.users[x].username == userName) {
                    return res.send(this.users[x]);
                }
            }
        } else {
            // provide findUserByCredentials
            for (let x = 0; x < this.users.length; x++) {
                if (this.users[x].username == userName && this.users[x].password == password) {
                    return res.send(this.users[x]);
                }
            }
        }
    });

    app.get('/api/user/:userId', function (req, res) {
        var userId = req.params.userId;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                // send user data if found
                return res.send(this.users[x]);
            }
        }
    });

    app.put('/api/user/:userId', function (req, res) {
        var userId = req.params.userId;
        var user = req.body.user;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users[x] = user;
                return res.send(this.users[x]);
            }
        }
    });

    app.delete('/api/user/:userId', function (req, res) {
        var userId = req.params.userId;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users.splice(x, 1);
                return;
            }
        }
    });
}