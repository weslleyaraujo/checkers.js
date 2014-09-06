/*
 * @method Toggle
 *
 * */
;(function(root) {
  'use strict';

  function Toggle (flag) {
    var flag = flag;
    return function () {
      return flag = !flag;
    };
  }

  root.Toggle = Toggle;

} (window.Checkers.methods));
