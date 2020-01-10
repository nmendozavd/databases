var db = require('../db');

// models

module.exports = {
  messages: {
    // a function which produces all the messages (fetch)
    get: function (callback) {
      // fetch all messages
      // id, text, and username, roomname
      var queryStr = 'SELECT messages.id, messages.text, messages.roomname from messages \
      left outer join user on (messages.user_id = users.id \
      ORDER BY messages.id DESC';
      dp.query(queryStr, (err, results) => {
        callback(results);
      });
    },
    // a function which can be used to insert a message into the database (store)
    post: function (params, callback) {
      // grabbing the user_id, we create a query inside the brackets to select the id
      var queryStr = 'INSERT INTO messages(text, user_id, roomname) VALUES(?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
      db.query(queryStr, params, (err, results) => {
        callback(results);
      });
    }
  },

  users: {
    get: function (callback) {
      // use query in form of a string to grab all users
      var queryStr = 'SELECT * FROM users';
      // function that passes query command, and callback of those results to pass to
      db.query(queryStr, (err, results) => {
        callback(results);
      });
    },
    post: function (params, callback) {
      // INSERT query string we can put a question mark, since the name is being inputted by user, but we must also include a parameter for this in the post and dbquery function
      var queryStr = 'INSERT INTO users(username) VALUES (?)';
      db.query(queryStr, params, (err, results) => {
        callback(results);
      });
    }
  }
};

