module.exports = {
  register: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.register([req.body.username, req.body.password])
      .then(response => { req.session.user = response;
      res.status(200).send(response)})
      .catch((error) => {console.log(error);
      res.status(500).send(error)})
  },

  login: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.login([req.body.username, req.body.password])
    .then(response => { req.session.user = response;
    res.status(200).send(response)})
    .catch((error) => {console.log(error);
    res.status(500).send(error)})

  },

  logout: (req, res, next) => {
    req.session.destroy(function(err) {
      console.log(err);
      res.status(200).send("It is done.");
    })
  }
}
