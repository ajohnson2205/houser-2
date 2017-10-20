module.exports = {
  sayHello: (req, res) => {
    req.session.user = "alex";
    console.log(req.session)
    // console.log(req);
    res.status(200).send("Hello!")
  },

  home: (req, res) => {
    res.status(200).send("Home is where this code is.")
  },

  getCats: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    console.log(req.session)
    dbInstance.get_all_cats()
      .then(cats => { res.status(200).send(cats) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
}
