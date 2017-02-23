import React from 'react';
import {shallow} from 'enzyme';
import Shoe from './Shoe';

describe('Shoe', () => {

  const mockShoe = { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999 };

  describe('Level 1', () => {

    it('should render the title', () => {
      const wrapper = shallow(<Shoe {...mockShoe}/>);
      const text = wrapper.text();
      const pattern = new RegExp(mockShoe.brand);
      expect(pattern.test(text)).toEqual(true);
    });

    it('should render the title', () => {
      const wrapper = shallow(<Shoe {...mockShoe}/>);
      const text = wrapper.text();
      const pattern = new RegExp(mockShoe.title);
      expect(pattern.test(text)).toEqual(true);
    });

    it('should render the price (to two decimal places)', () => {
      const wrapper = shallow(<Shoe {...mockShoe}/>);
      const text = wrapper.text();
      const pattern = new RegExp(mockShoe.price.toFixed(2));
      expect(pattern.test(text)).toEqual(true);
    });

  });

  describe('Level 2', () => {
    it('should render an <a> element for adding to cart', () => {
      const wrapper = shallow(<Shoe {...mockShoe} onShoeSelect={() => true}/>);
      expect(wrapper.find('a').length).toEqual(1);
    });

    describe('when clicking the button', () => {
      it('should call the function passed in to `props.onShoeSelect` with the shoe as the first arg', () => {
        const selectSpy = jest.fn();
        const wrapper = shallow(<Shoe {...mockShoe} onShoeSelect={selectSpy}/>);
        const button = wrapper.find('a').first();
        expect(selectSpy.mock.calls.length).toEqual(0);

        button.simulate('click');
        expect(selectSpy.mock.calls.length).toEqual(1);
        expect(selectSpy.mock.calls[0][0]).toEqual(expect.objectContaining(mockShoe));
      });
    })
  })
});
