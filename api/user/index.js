const db = require('../../database');
const bcrypt = require('bcrypt');
const winston = require('../../config/logger').winston;

module.exports = {
  createUser: (req, res) => {
    console.log('CREATE USER');
    let hashedPassword;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        winston.error('Error while attempting to hash password', err);
        res.json(err);
        return
      }
      hashedPassword = hash;
      db.User.create(
        {
          id: req.body.id,
          username: req.body.username,
          password: hashedPassword,
          name: req.body.name,
          email: req.body.email,
          type: req.body.type,
          createdAt: new Date(),
          updatedAt: new Date(),
        }).then(user => {
          res.json(user)
        })
    });
  },
  getUsers: (req, res) => {
    console.log('GET ALL USERS');
    db.User.findAll({
      attributes: ['id', 'username', 'email', 'name', 'type', 'createdAt', 'updatedAt']
    }).then(users => {
      res.json(users)
    })
  },
  getUser: (req, res) => {
    console.log('GET ONE USER BY ID');
    const id = parseInt(req.params.id, 10);

    if (!id) {
      res.json({ err: `Invalid parameter '${req.params.id}'`});
    }

    db.User.findOne({
      where: {
        id
      },
      attributes: ['id', 'username', 'email', 'name', 'type', 'createdAt', 'updatedAt']
    }).then(response => {
      if (!response) {
        winston.log(`No user with id '${req.params.id}' exists`)
        res.json({ err: `No user with id '${req.params.id}' exists`});
      }
      res.json(response)
    })
  }
}