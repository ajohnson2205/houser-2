module.exports = {
  getAllProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getAllProperties()
      .then(properties => { res.status(200).send(properties) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getFilteredProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getFilteredProperties()
      .then(properties => { res.status(200).send(properties) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },




}
