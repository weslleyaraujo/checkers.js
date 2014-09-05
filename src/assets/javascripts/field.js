/*
 * @method field
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    x: 8,
    y: 8
  };

  function Field (options) {
    this.options = _.extend(defaults, options);
    this.instance = this.mapper(Checkers.methods.CreateArray(0, this.options.x));
    return this;
  }

  Field.prototype.getInstance = function () {
    return this.instance;
  };


  Field.prototype.mapper = function (size) {
    return size.map(function (index) {
      var line = {
        line: this.mapLine(index)
      };

      return line;

    }.bind(this));
  };

  Field.prototype.mapLine = function (line) {
    return Checkers.methods.CreateArray(0, this.options.y - 1).map(function (index) {
      index = {
        position: index,
        line: line
      };

      return index;

    }.bind(this));
  };

  Checkers.components.Field = Field;

} (window, window.Checkers));
