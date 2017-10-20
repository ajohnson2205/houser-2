module.exports = {

//think this is done
  getAllProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getAllProperties([req.session.user.id])
      .then(properties => { res.status(200).send(properties) })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

//think this is done
  getFilteredProperties: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.getFilteredProperties([req.session.user.id, req.query.desired_rent])
      .then(properties => { res.status(200).send(properties) })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

//completely done
  createNewProperty: (req, res, next) => {
    console.log("Creating new property", req.body);
    const dbInstance = req.app.get('db');
    let {property_name, description, address, city, state, zip, url, mortgage_total, mortgage_monthly, desired_rent, user_id} = req.body;

    dbInstance.createNewProperty(req.body)
      .then((res) => res.status(200).send(res))
      .catch((err) => res.status(500).send(err))
  },

//completely done
  deleteProperty: ( req, res, next ) => {
    console.log("Deleting property", req.body);
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.deleteProperty([ params.id ])
      .then( () => res.status(200).send("property deleted") )
      .catch( () => res.status(500).send() );
  }


}
