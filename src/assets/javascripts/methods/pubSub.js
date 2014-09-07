/*
 * @method pubSub
 *
 * */
;(function(global) {
  'use strict';

  var topics = {};
  global.subscribe = function(name, fn) {
    topics[name] = topics[name] || [];
    topics[name].push(fn);
  }
  global.publish = function(name, args) {
    topics[name] = topics[name] || [];
    topics[name].forEach(function(fn) {
      fn.apply(this, args);
    });
  }
})(window.Checkers.methods);
