/*
 * @class Checkers
 *
 * Initial start for Checkers class,
 * */
(function (root) {
  'use strict';
  var defaults = {
    activeClass: 'is-usertype-',
    userType: 'A'
  };

  function Checkers (options) {
    this.options = _.extend(defaults, options);
    this.prepare();
    this.start();
    console.log(this.board);
  }

  Checkers.prototype.prepare = function () {
    this.board = new Checkers.components.Board();
    this.player = new Checkers.components.Player();
  };

  Checkers.prototype.start = function () {
    var className = this.options.activeClass +
        this.options.userType.toLowerCase();
    this.board.$el.addClass(className);
  };

  Checkers.methods = {};
  Checkers.components = {};

  root.Checkers = Checkers;

}(window));
