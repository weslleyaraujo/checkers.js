/*
 * @method player
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    pieces: 12,
    userType: 'A',
    initialPoint: {
      A: {
        line: 7,
        position: 0
      },
      B: {
        line: 0,
        position: 7
      }
    }
  };

  function Player (options) {
    this.options = _.extend(defaults, options);
    this.prepare();
    delete this.base;
    return this;
  }

  Player.prototype.prepare = function () {
    this.base = this.options.initialPoint[this.options.userType];
    _(this.options.pieces).times(this.createPiece.bind(this));
  };

  Player.prototype.createPiece = function (index) {
    console.log('create piece for', index + 1, this.base);
    debugger
  };

  Checkers.components.Player = Player;

} (window, window.Checkers));
