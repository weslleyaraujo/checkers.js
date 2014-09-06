/*
 * @method CreateArray
 *
 * */
;(function(root) {
  'use strict';

  function CreateArray (start, end) {
    if (_.isUndefined(start) || _.isUndefined(end))  {
      throw new Error('CreateArray: you need to pass two parameters.');
    }

    if (start > end) {
      throw new Error('CreateArray: start cant be greater than end.');
    }

    return [start].concat(start < end ? new CreateArray((start + 1), end) : []);
  }

  root.CreateArray = CreateArray;

} (window.Checkers.methods));
