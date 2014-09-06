/*
 * @method field
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    accessible: true,
    isFilled: false,
    achievement: false,
    element: 'td',
    side: '',
    accessibleClass: 'is-accessible',
    template: '#field-template',
    line: 0,
    position: 0
  };

  function Field (options) {
    this.options = _.extend(defaults, options);
    this.prepare();
    this.bind();
    return this;
  }

  Field.prototype.prepare = function () {
    var template = Checkers.methods.template('#field-template');
    this.$el = $('<'+ this.options.element +'/>', {
      class: this.options.accessible ? this.options.accessibleClass : '',
    }).data({
      accessible : this.options.accessible,
      position : this.options.position,
      line : this.options.line,
      side : this.options.side,
    }).html(template(this.options));

    this.el = this.$el[0];
  };

  Field.prototype.bind = function () {
    this.$el.find('a').on('click', this.onClick.bind(this));
  };

  Field.prototype.isAccesible = function () {
    return this.options.accessible;
  };

  Field.prototype.onClick = function (event) {
    var Prevent = event && event.preventDefault(),
        data = this.$el.data();

    // is there a clickable item?
    // TODO: is there any piece here?
    if (!data.accessible) return;

    console.log('click', this.$el.data());
  };

  Checkers.components.Field = Field;

} (window, window.Checkers));
