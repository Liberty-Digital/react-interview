import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../src/App';
import ShoeList from '../src/components/ShoeList/ShoeList';
import CartSummary from '../src/components/CartSummary/CartSummary';

describe('App', () => {

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

describe('CartSummary', () => {

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

describe('ShoeList', () => {

  const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Reebok', name: 'Classic', price: 1999.99 },
    { id: 'd', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
  ];

  it('should pass `props.onShoeSelect` to each <Shoe />', () => {
    const wrapper = shallow(<ShoeList shoes={mockShoes} onShoeSelect={() => jest.fn()}/>);
    expect(wrapper.find(Shoe).first().props().onShoeSelect).not.toBeUndefined();
    expect(wrapper.find(Shoe).first().props().onShoeSelect).toBeInstanceOf(Function);
  });

});


describe('Shoe', () => {

  const mockShoe = { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999 };

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
