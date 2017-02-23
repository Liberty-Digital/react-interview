import React from 'react';
import {shallow} from 'enzyme';
import CartSummary from './CartSummary';

describe('CartSummary', () => {

  describe('Level 1', () => {

    it('nothing required for level 1', () => {
      expect(true).toEqual(true);
    });

  });

  describe('Level 2', () => {

    it('should render the number of items in the cart in `span#ItemCount`', () => {
      const mockCart = [{name: 'A'}, {name: 'B'}];
      const wrapper = shallow(<CartSummary cart={mockCart}/>);
      expect(wrapper.find('#ItemCount').text()).toEqual("2");
    });

    it('should render the total cost of all items in the cart in `span#TotalCost`', () => {
      const mockCart = [{name: 'A', price: 50.10}, {name: 'B', price: 60.20}];
      const wrapper = shallow(<CartSummary cart={mockCart}/>);
      expect(wrapper.find('#TotalCost').text()).toEqual("110.30");
    });

  });
});
