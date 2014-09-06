/*
 * @method Toggle
 *
 * */
;(function(root) {
  'use strict';

  function Toggle () {
    var flag = true;
    return function () {
      return flag = !flag;
    };
  }

  root.Toggle = Toggle;

} (window.Checkers.methods));
