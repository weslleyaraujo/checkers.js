/*
 * @method player
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    pieces: 12
  };

  function Player (options) {
    this.options = _.extend(defaults, options);
    this.prepare();
    return this;
  }

  Player.prototype.prepare = function () {
    _(this.options.pieces).times(this.createPiece.bind(this));
  };

  Player.prototype.createPiece = function (index) {
    // console.log('create piece for', index + 1);
  };

  Checkers.components.Player = Player;

} (window, window.Checkers));
