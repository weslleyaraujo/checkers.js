/*
 * @method field
 *
 * */
;(function(root, Checkers) {
  'use strict';
  var defaults = {
    isFilled: false,
    achievement: false,
    element: 'td',
    side: '',
    accessible: true,
    accessibleClass: 'is-accessible',
    template: '#field-template',
    line: 0,
    position: 0
  };

  function Field (options) {
    this.options = _.extend(defaults, options);
    this.userType = this.options.userType;
    this.prepare();
    delete this.options;
    return this;
  }

  Field.prototype.prepare = function () {
    this.template = Checkers.methods.template('#field-template');
    this.$el = $('<'+ this.options.element +'/>', {
      class: this.options.accessible ? this.options.accessibleClass : '',
    }).data({
      accessible : this.options.accessible,
      position : this.options.position,
      line : this.options.line,
      side : this.options.side
    }).html(this.template(this.options));

    this.el = this.$el[0];
  };

  Field.prototype.render = function () {
    this.$el.html(this.template(this.$el.data()));
  };

  Field.prototype.bind = function (event) {
    event && event.preventDefault();
    if (this.$el.hasClass('is-usertype-' + this.userType.toLowerCase())) {
      this.$el.find('a').on('click', this.onClick.bind(this));
    };
  };

  Field.prototype.isAccessible = function () {
    return this.field.$el.data('accessible');
  };

  Field.prototype.onClick = function (event) {
    var Prevent = event && event.preventDefault(),
        data = this.$el.data();

    // is there a clickable item?
    if (!data.accessible) return;
    Checkers.methods.publish('explore', [this.$el.data()]);
  };

  Checkers.components.Field = Field;

} (window, window.Checkers));
