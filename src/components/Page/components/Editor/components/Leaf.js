import PropTypes from 'prop-types';
import React from 'react';

function Leaf(props) {
  const { attributes, leaf } = props;
  let { children } = props;

  if (leaf.bold) {
    children = <b>{children}</b>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
}

Leaf.propTypes = {
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired,
  attributes: PropTypes.shape({
    'data-slate-leaf': PropTypes.bool.isRequired,
  }).isRequired,
};

export default Leaf;
