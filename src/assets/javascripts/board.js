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
    el: '#checkboard',
    userType: 'A'
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
      side = index < 3 ? 'B' : 'A', // 4
      line = {
        line: this.mapLine(index, side),
        $el: $el,
        el: $el[0],
        side: side
      };

      line.el.appendChild(this.fragment);
      return line;
    }.bind(this));
  };

  Board.prototype.mapLine = function (line, side) {
    var toggle = Checkers.methods.Toggle(!Boolean(line % 2)),
        board = Checkers.methods.CreateArray(0, this.options.y - 1);

    return board.map(function (index) {
      var accessible = toggle(),
      item = {
        position: index,
        line: line,
        accessible: accessible,
        field: new Checkers.components.Field({
          position: index,
          line: line,
          accessible: accessible,
          side: side,
          userType: this.options.userType
        })
      };


      this.fragment.appendChild(item.field.el);
      return item;
    }.bind(this));
  };

  Board.prototype.bind = function () {
    // bind after players
    this.instance.forEach(function (item) {
      item.line.forEach(function (check) {
        check.field.bind()
      });
    });

    Checkers.methods.subscribe('explore', this.onExplore.bind(this));
  };

  Board.prototype.clearPlayables = function () {
    this.$el.find('td.is-playable').removeClass('is-playable');
  };

  Board.prototype.onExplore = function (data) {
    var userType = data.userType,
      next = (data.position + 1),
      prev = data.position - 1,
      lines = [
        (data.line - 1),
        (data.line + 1),
        data.line
      ];

    this.clearPlayables();

    lines.forEach(function(line) {
    //  console.log(data,line, this.instance[line].line[prev], this.instance[line].line[next])

      try {
        if (this.instance[line].line[next].accessible && !this.instance[line].line[next].field.hasOwnProperty('piece')) {
          this.instance[line].line[next].field.$el.addClass('is-playable');
        }
      } catch (e) {}

      try {
        if (this.instance[line].line[prev].accessible && !this.instance[line].line[prev].field.hasOwnProperty('piece')) {
          this.instance[line].line[prev].field.$el.addClass('is-playable');
        }
      } catch (e) {}

    }.bind(this))
    
  };

  Board.prototype.render = function () {
    this.instance.forEach(function (item) {
      this.$el.append(item.el);
    }.bind(this));
  };

  Board.prototype.get = function (line, position) {
    if (this.instance[line] && this.instance[line].line[position]) {
      return this.instance[line].line[position];
    }

    return false;
  };

  Checkers.components.Board = Board;

} (window, window.Checkers));
