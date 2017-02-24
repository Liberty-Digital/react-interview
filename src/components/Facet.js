import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (
  <div>Facet</div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;