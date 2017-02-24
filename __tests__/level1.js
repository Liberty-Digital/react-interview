import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import ShoeList from '../src/components/ShoeList';
import NavBar from '../src/components/NavBar';
import Api from '../src/api';

describe('App', () => {

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

describe('ShoeList', () => {

  const mockShoes = [
    { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
    { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
    { id: 'c', brand: 'Reebok', name: 'Classic', price: 1999.99 },
    { id: 'd', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
  ];

  it('should render a <Shoe /> for every item in `props.shoes`', () => {
    const wrapper = shallow(<ShoeList shoes={mockShoes}/>);
    expect(wrapper.find(Shoe).length).toEqual(mockShoes.length);
  });

});

describe('Shoe', () => {

  const mockShoe = { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999 };

  it('should render the brand', () => {
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