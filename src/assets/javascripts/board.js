/*
 * @method board
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    x: 8,
    y: 8,
    itemElement: 'tr',
    el: '#checkboard'
  };

  function Board (options) {
    this.options = _.extend(defaults, options);
    this.$el = $(this.options.el);
    this.instance = this.mapper(Checkers.methods.CreateArray(0, (this.options.x - 1)));
    this.render();
    delete this.fragment;
    return this;
  }

  Board.prototype.getInstance = function () {
    return this.instance;
  };

  Board.prototype.mapper = function (size) {
    return size.map(function (index) {
      this.fragment = document.createDocumentFragment();
      var $el = $('<'+ this.options.itemElement +'/>', {
        data: {
          line: index
        }
      }),

      line = {
        line: this.mapLine(index),
        $el: $el,
        el: $el[0]
      };

      line.el.appendChild(this.fragment);

      return line;
    }.bind(this));
  };

  Board.prototype.mapLine = function (line) {
    var toggle = Checkers.methods.Toggle(!Boolean(line % 2));
    return Checkers.methods.CreateArray(0, this.options.y - 1).map(function (index) {
      var accessible = toggle(),
      item = {
        position: index,
        line: line,
        field: new Checkers.components.Field({
          accessible: accessible,
          line: line,
          position: index
        })
      };

      this.fragment.appendChild(item.field.el);
      return item;
    }.bind(this));
  };

  Board.prototype.render = function () {
    this.instance.forEach(function (item) {
      this.$el.append(item.el);
    }.bind(this));
  };

  Checkers.components.Board = Board;

} (window, window.Checkers));
