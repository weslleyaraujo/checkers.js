/*
 * @class Checkers
 *
 * Initial start for Checkers class,
 * */
(function (root) {
  'use strict';
  var defaults = {
    activeClass: 'is-active'
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
    this.board.$el.addClass(this.options.activeClass);
  };

  Checkers.methods = {};
  Checkers.components = {};

  root.Checkers = Checkers;

}(window));
