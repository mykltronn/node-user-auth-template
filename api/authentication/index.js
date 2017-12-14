const db = require('../../database');

module.exports = {
  login: (req, res) => {
    console.log('request to POST to /api/login and req.body is: ', req.body);
    const user = req.body;
    console.log('req.body is: ', req.body);
    db.User.findOne({
      where: {
        'username': user.username
      },
      attributes: ['id', 'username', 'email', 'name', 'type', 'createdAt', 'updatedAt']
    }).then(response => {
      res.json(response)
    })
  },

  logout: (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err)

      req.logout()

      res.sendStatus(200)
    })
  },
}