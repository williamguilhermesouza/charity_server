const googleMapsClient = require('@google/maps').createClient({
    key: ''
  });

module.exports = {
  async show(req, res) {
    const { charity } = req.query;

    const institutions = googleMapsClient.places({ charity }, response.json.results);
    return res.json(institutions);
  }
};