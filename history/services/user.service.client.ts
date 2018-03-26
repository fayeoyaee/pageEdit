import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class UserService {
    constructor() { }

    users = [
        { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
        { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
        { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" }
    ];

    api = {
        'createUser': this.createUser,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'findUserByCredentials': this.findUserByCredentials,
    };

    createUser(user: any) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    }

    updateUser(userId, user) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users[x] = user;
                return this.users[x];
            }
        }
    }

    deleteUser(userId) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                this.users.splice(x, 1);
                return;
            }
        }
    }

    findUserById(userId: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id == userId) {
                return this.users[x];
            }
        }
    }

    findUserByUsername(userName: String) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username == userName) {
                return this.users[x];
            }
        }
    }

    findUserByCredentials(userName, password) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x].username == userName && this.users[x].password == password) {
                return this.users[x];
            }
        }
    }

}
