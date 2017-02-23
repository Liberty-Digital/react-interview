import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from './App';
import ShoeList from './components/ShoeList/ShoeList';
import CartSummary from './components/CartSummary/CartSummary';
import NavBar from './components/NavBar/NavBar';
import Api from './api';

describe('App', () => {

  describe('Level 1', () => {

    it('should render the <NavBar> component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(NavBar).length).toEqual(1);
    });

    it('should render a <ShoeList />', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(ShoeList).length).toEqual(1);
    });

    it('should pass `state.shoes` as a prop to <ShoeList />', () => {
      const wrapper = shallow(<App/>);
      const shoeListProps = wrapper.find(ShoeList).props();
      expect(Object.keys(shoeListProps)).toContain('shoes');
      expect(shoeListProps.shoes).toEqual(wrapper.state().shoes);
    });

    it('state is initialised with an empty array for `shoes`', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.state()).not.toBeNull();
      expect(wrapper.state().shoes).toBeInstanceOf(Array);
      expect(wrapper.state().shoes.length).toEqual(0);
    });

    it('calls the Api method `getShoes()` async and updates `state.shoes`', (done) => {
      const wrapper = shallow(<App/>);
      expect(wrapper.state().shoes.length).toEqual(0);
      Api.getShoes().then(shoes => {
        expect(wrapper.state().shoes.length).toBeGreaterThan(0);
        expect(wrapper.state().shoes.length).toEqual(shoes.length);
        done();
      }).catch(done);
    });

  });

  describe('Level 2', () => {

    it('should render a <CartSummary />', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(CartSummary).length).toEqual(1);
    });

    it('state is initialised with an empty array for `cart`', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.state()).not.toBeNull();
      expect(wrapper.state().cart).toBeInstanceOf(Array);
      expect(wrapper.state().cart.length).toEqual(0);
    });

    it('should pass `state.cart` as a prop to <CartSummary />', () => {
      const wrapper = shallow(<App/>);
      const cartSummaryProps = wrapper.find(CartSummary).props();
      expect(Object.keys(cartSummaryProps)).toContain('cart');
      expect(cartSummaryProps.cart).toEqual(wrapper.state().cart);
    });

    it('should pass a function called `onShoeSelect` as a prop to <ShoeList />', () => {
      const wrapper = shallow(<App/>);
      const shoeListProps = wrapper.find(ShoeList).props();
      expect(Object.keys(shoeListProps)).toContain('onShoeSelect');
      expect(shoeListProps.onShoeSelect).toBeInstanceOf(Function);
    });

    it('should have an instance method called `handleShoeSelect`', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.instance().handleShoeSelect).toBeInstanceOf(Function);
    });

    it('`handleShoeSelect()` should add the item to `state.cart`', () => {
      const wrapper = shallow(<App/>);
      const mockShoe = {name: 'Air Max 1000'};
      expect(wrapper.state().cart.length).toEqual(0);

      wrapper.instance().handleShoeSelect(mockShoe);
      expect(wrapper.state().cart).toContain(mockShoe);
    });

  });

});
