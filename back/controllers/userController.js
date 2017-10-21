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
    console.log("You have been logged in!")

    dbInstance.login([req.body.username, req.body.password])
    .then(response => {
      req.session.user = response[0];
      console.log('xxxxxx', req.session.user);
    res.status(200).send(response)})
    .catch((error) => {console.log(error);
    res.status(500).send(error)})
    console.log(req.session.user)

  },

  logout: (req, res, next) => {
    console.log("Logged out, yo!")
    req.session.destroy(function(err) {
      console.log(req.session);
      console.log(err);
      res.status(200).send("It is done.");
    })
  }
}
