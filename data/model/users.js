const Users = require('../../core/db/models/users');
const crypto=require('crypto');

class UsersService {

    constructor() {
        this.Users = Users;
    }

    createUser(email, password, options) {
        return new Promise((resolve, reject) => {
            if (!email) {
                return reject('no username');
            }
            if (!password) {
                return reject('no password');
            }
            if (!options.fullName) {
                return reject('no email');
            }
            if (options.gender === 'gender') {
                return reject('no cheked gender');
            }

            this.Users.create({
                email: email,
                password: crypto.createHmac('sha256',password ).digest('hex'),
                fullName: options.fullName,
                gender: options.gender,
                date:{
                    year:options.date.year,
                    month:options.date.month,
                    day:options.date.day
                }
            }).then((doc) => {
                return resolve(UsersService.generateUserResponseObject(doc));
            }).catch((err) => {
                return reject(err);
            })
        })
    }

    getValue(id) {
        return new Promise((resolve, reject) => {
            this.Users.findOne({_id: id}).then((users) => {
                return resolve(UsersService.generateUserResponseObject(users));
            }).catch(err => reject('Error getting users'));
        })
    }

    static generateUserResponseObject(user) {
        return {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            gender: user.gender,
            date: {
                year: user.year,
                month: user.month,
                day: user.day
            },
            photo: user.photo
        }
    }
}

module.exports = new UsersService();
