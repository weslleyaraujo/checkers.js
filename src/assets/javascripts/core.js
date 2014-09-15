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
    this.board = new Checkers.components.Board({
      userType: this.options.userType,
    });

    this.player = new Checkers.components.Player({
      userType: this.options.userType,
      board: this.board
    });

    // versus
    this.versus = new Checkers.components.Player({
      userType: 'B',
      board: this.board
    });

  };

  Checkers.prototype.start = function () {
    var className = this.options.activeClass +
        this.options.userType.toLowerCase();

    this.board.$el.addClass(className);
    this.board.bind();
  };

  Checkers.methods = {};
  Checkers.components = {};

  root.Checkers = Checkers;

}(window));
