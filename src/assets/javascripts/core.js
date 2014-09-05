/*
 * @class Checkers
 *
 * Initial start for Checkers class,
 * */
(function (root) {
  'use strict';
  var defaults = {
  
  };

  function Checkers (options) {
    this.options = _.extend(defaults, options);
    this.field = new Checkers.components.Field().getInstance();
    debugger
  }

  Checkers.methods = {};
  Checkers.components = {};

  root.Checkers = Checkers;

}(window));


// function xadrez() {
//   var flag = true;
//   return function () {
//     flag = !flag;
//     return flag === true ? 'preto' : 'branco';
//   }
// }
