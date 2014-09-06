/*
 * @method player
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    times: 24,
    pieces: 0,
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
    _(this.options.times).times(this.createPiece.bind(this));
  };

  Player.prototype.createPiece = function (index) {
    var actual = this.options.board.get(this.base.line, this.base.position);
    if (actual.field.$el.data('accessible')) {
      actual.field.piece = new Checkers.components.Piece({
        line: actual.field.$el.data('line'),
        position: actual.field.$el.data('position')
      });

      this.options.pieces ++;
    }

    this.update(this.options.userType);
  };

  Player.prototype.update = function (userType) {
    if (userType === 'A') {
      if (this.options.board.get(this.base.line, this.base.position + 1)) {
        this.setBase(this.base.line, this.base.position + 1);
      }
      else if (this.options.board.get(this.base.line -1, 0)) {
        this.setBase(this.base.line - 1, this.base.position);
      }
    }
    else {
      if (this.options.board.get(this.base.line, this.base.position - 1)) {
        this.setBase(this.base.line, this.base.position - 1);
      }
      else if (this.options.board.get(this.base.line + 1, 7)) {
        this.setBase(this.base.line + 1, 7);
      }
    }
  };

  Player.prototype.setBase = function (line, position) {
    this.base.line = line;
    this.base.position = position;
  };

  Checkers.components.Player = Player;

} (window, window.Checkers));
