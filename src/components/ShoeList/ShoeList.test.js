import React from 'react';
import {shallow} from 'enzyme';
import ShoeList from './ShoeList';
import Shoe from '../Shoe/Shoe';

describe('ShoeList', () => {

  const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Reebok', name: 'Classic', price: 1999.99 },
    { id: 'd', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
  ];

  describe('Level 1', () => {

    it('should have a `ShoeList` class', () => {
      const wrapper = shallow(<ShoeList shoes={mockShoes}/>);
      expect(wrapper.hasClass('ShoeList')).toEqual(true);
    });

    it('should render a <Shoe /> for every item in `props.shoes`', () => {
      const wrapper = shallow(<ShoeList shoes={mockShoes}/>);
      expect(wrapper.find(Shoe).length).toEqual(mockShoes.length);
    });

  });

  describe('Level 2', () => {

    it('should pass `props.onShoeSelect` to each <Shoe />', () => {
      const wrapper = shallow(<ShoeList shoes={mockShoes} onShoeSelect={() => jest.fn()}/>);
      expect(wrapper.find(Shoe).first().props().onShoeSelect).not.toBeUndefined();
      expect(wrapper.find(Shoe).first().props().onShoeSelect).toBeInstanceOf(Function);
    });

  });

});
