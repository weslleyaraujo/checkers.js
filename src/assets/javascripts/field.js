/*
 * @method field
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    element: 'td',
    accessible: true,
    accessibleClass: 'is-accessible',
    template: '#field-template'
  };

  function Field (options) {
    this.options = _.extend(defaults, options);
    this.prepare();
    return this;
  }

  Field.prototype.prepare = function () {
    var template = Checkers.methods.template('#field-template');
    this.$el = $('<'+ this.options.element +'/>', {
      class: this.options.accessible ? this.options.accessibleClass : '',
      data: {
        accessible: this.options.accessible
      }
    }).html(template({
      accessible: this.options.accessible
    }));

    this.el = this.$el[0];
  };

  Checkers.components.Field = Field;

} (window, window.Checkers));
