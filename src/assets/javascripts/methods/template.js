/*
 * @method template
 *
 * */
;(function(root) {
  'use strict';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  function template (selector) {
    var content = $(selector).html();
    return _.template(content ? content : "");
  }

  root.template = template;

} (window.Checkers.methods));
