/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('react/lib/invariant');
var isString  = require('./isString');
var types     = require('./types');
var schema    = require('./schema');

/**
 * Return a type which corresponds to a given schema node.
 *
 * @param {Schema} node
 * @return {Type}
 */
function getTypeFromSchema(node) {
  if (node && node.props.type) {

    invariant(
      schema.isProperty(node),
      'only Property schema nodes can have types'
    );

    if (isString(node.props.type)) {
      var type = types[node.props.type];
      invariant(type, 'unknown type %s', node.props.type);
      return type;
    }

    return node.props.type;
  }

  return types.any;
}

module.exports = getTypeFromSchema;
