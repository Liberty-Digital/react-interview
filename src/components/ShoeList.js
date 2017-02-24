import React from 'react';
import Shoe from './Shoe';

const ShoeList = (props) => (
  <div>ShoeList</div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;