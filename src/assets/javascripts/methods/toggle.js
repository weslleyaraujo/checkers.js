/*
 * @method Toggle
 *
 * */
;(function(root) {
  'use strict';

  function Toggle (flag) {
    flag = flag;
    return function () {
      flag = !flag;
      return flag;
    };
  }

  root.Toggle = Toggle;

} (window.Checkers.methods));
