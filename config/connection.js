const { connect, connection } = require('mongoose');

// i had errors with my mongo db account so i used andrews
connect('');

module.exports = connection;