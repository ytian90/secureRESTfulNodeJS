var users = {

  getAll: function(req, res) {
    var allusers = data; // Spoof a DB call
    res.json(allusers);
  },

  getOne: function(req, res) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },

  create: function(req, res) {
    var newuser = req.body;
    data.push(newuser); // Spoof a DB call
    res.json(newuser);
  },

  update: function(req, res) {
    var updateuser = req.body;
    var id = req.params.id;
    data[id] = updateuser // Spoof a DB call
    res.json(updateuser);
  },

  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'louis',
  id: '1'
}, {
  name: 'andy',
  id: '2'
}, {
  name: 'kevin',
  id: '3'
}];

module.exports = users;
