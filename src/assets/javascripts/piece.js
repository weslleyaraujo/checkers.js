/*
 * @method piece
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    isQueen: false,
    isAlive: true,
    line: 0,
    position: 0,
    player: 'A'
  };

  function Piece (options) {
    this.options = _.extend(defaults, options);
    this.set();
    return this;
  }

  Piece.prototype.set = function () {
    this.line = this.options.line;
    this.position = this.options.position;
  };

  Piece.prototype.setQueen = function () {
    this.options.isQueen = true;
  };

  Piece.prototype.isQueen = function () {
    return this.options.isQueen;
  };

  Checkers.components.Piece = Piece;

} (window, window.Checkers));
