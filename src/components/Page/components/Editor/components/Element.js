import PropTypes from 'prop-types';
import React from 'react';

function Element(props) {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'blockquote':
      return <blockquote {...attributes}>{children}</blockquote>;
    default:
      return <p {...attributes}>{children}</p>;
  }
}

Element.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  attributes: PropTypes.shape({
    'data-slate-node': PropTypes.string.isRequired,
    ref: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Element;
