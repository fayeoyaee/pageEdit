users = [
    { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "a@a" },
    { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "b@b" },
    { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "c@c" }
];

module.exports = function (app) {
    app.post('/api/user', function (req, res) {
        // assume user passed in has all the required fields and has verified passwords
        var user = req.body;
        user._id = Math.floor(Math.random() * 1000);
        // check if users has the generated id 
        var flag = true;
        while (flag) {
            for (let auser in users) {
                if (auser._id == user._id) {
                    flag = true;
                    break;
                }
            }
            flag = false;
        }
        this.users.push(user);
        console.log(users)
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
            console.log("no such name exists")
            return res.status(404).send("No such username exists!")
        } else {
            // provide findUserByCredentials
            for (let x = 0; x < this.users.length; x++) {
                if (this.users[x].username == userName && this.users[x].password == password) {
                    return res.send(this.users[x]);
                }
            }
            console.log("no matched usernae and password")
            return res.status(404).send("No matched username and password!")
        }
    });

    app.get('/api/user/:userId', function (req, res) {
        var userId = req.params.userId;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                return res.send(this.users[x]);
            }
        }
        return res.status(404).send("No user found with the id!")
    });

    // for update 
    app.put('/api/user/:userId', function (req, res) {
        var userId = req.params.userId;
        var user = req.body;
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                for (let key of Object.keys(this.users[x])) {
                    if ((key in user)) {
                        this.users[x][key] = user[key];
                    }
                }
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