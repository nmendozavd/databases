var models = require('../models');
// need to research this
var bluebird = require ('bluebird');

// Solution had these arrays:
var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          callback(err);
        }
        // send back as JSON data through express
        res.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      // defining params here
      var params = [req.body[text], req.body[username], req.body[roomname] ];
      models.messages.post(params, function(err, results) {
        if (err) {
          callback(err);
        }
        res.json(results);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function (err, results) {
        if (err) {
          callback(err);
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      // defining params here
      var params = [ req.body[username] ];
      models.users.post(params, function(err, results) {
        if (err) {
          callback(err);
        }
        res.json(results);
      });
    }
  }
};

