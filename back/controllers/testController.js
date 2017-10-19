module.exports = {
  sayHello: (req, res) => {
    res.status(200).send("Hello!")
  },

  home: (req, res) => {
    res.status(200).send("Home is where this code is.")
  },

  getCats: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_all_cats()
      .then(cats => { res.status(200).send(cats) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
}
