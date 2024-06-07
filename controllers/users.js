const users = [];

const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
    User.fetchAll((users) => {
        res.render('users', {pageTitle: 'Users', users: users, path: '/users'});
    })
}

exports.postAddUser = (req, res, next) => {
    const user = new User(req.body.username);
    user.save();
    res.redirect('/users');
}