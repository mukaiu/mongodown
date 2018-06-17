'use strict';

var afterAll = require('after-all');
var path = require('path');

var dbidx = 0,
  location = function() {
    return (
      'tingodb://' + path.join(__dirname, 'db', 'mongodown_test_' + dbidx++)
    );
  },
  lastLocation = function() {
    return 'tingodb://' + path.join(__dirname, 'db', 'mongodown_test_' + dbidx);
  },
  cleanup = function(callback) {
    callback();

    //TODO:cleanup
  },
  setUp = function(t) {
    cleanup(function(err) {
      t.notOk(err, 'cleanup returned an error');
      t.end();
    });
  },
  tearDown = function(t) {
    setUp(t); // same cleanup!
  },
  collectEntries = function(iterator, callback) {
    var data = [],
      next = function() {
        iterator.next(function(err, key, value) {
          if (err) return callback(err);
          if (!arguments.length) {
            return iterator.end(function(err) {
              callback(err, data);
            });
          }
          data.push({ key: key, value: value });
          process.nextTick(next);
        });
      };
    next();
  };

module.exports = {
  location: location,
  cleanup: cleanup,
  lastLocation: lastLocation,
  setUp: setUp,
  tearDown: tearDown,
  collectEntries: collectEntries,
};
