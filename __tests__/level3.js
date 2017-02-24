import React from 'react';
import {shallow} from 'enzyme';
import Facet from '../src/components/Facet';
import App from '../src/App';
import {countByKey} from '../src/utils';

const mockShoes = [
  { id: 'a', brand: 'Nike', name: 'Air Max 90', price: 2999.99 },
  { id: 'b', brand: 'Nike', name: 'Cortez', price: 2129.99 },
  { id: 'c', brand: 'Nike', name: 'Roshe', price: 333.99 },
  { id: 'd', brand: 'Reebok', name: 'Classic Brown', price: 1999.99 },
  { id: 'e', brand: 'Reebok', name: 'Classic White', price: 1999.99 },
  { id: 'f', brand: 'Adidas', name: 'Ultra Boost', price: 1500.00 }
];

describe('countByKey', () => {

  it('should return an array', () => {
    const result = countByKey(mockShoes, 'brand');
    expect(result).toBeInstanceOf(Array);
  });

  it('should return an array with a length matching the unique number of keys', () => {
    const result = countByKey(mockShoes, 'brand');
    expect(result.length).toEqual(3);
  });

  it('should return an array of objects containing the key and count value', () => {
    const result = countByKey(mockShoes, 'brand');
    result.forEach(r => {
      expect(r).toEqual(expect.objectContaining({
        brand: expect.any(String),
        count: expect.any(Number)
      }));
    })
  });

  it('should return an array of objects sorted by the count', () => {
    const result = countByKey(mockShoes, 'brand');
    expect(result[0].count).toBeGreaterThanOrEqual(result[1].count);
    expect(result[1].count).toBeGreaterThanOrEqual(result[2].count);
  });
});

describe('Facet', () => {
  it('should render an <li> for each unique brand', () => {
    const wrapper = shallow(<Facet items={mockShoes}/>);
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('the <li> for each brand should contain the brand name and count of items', () => {
    const wrapper = shallow(<Facet items={mockShoes}/>);
    expect(wrapper.find('li').first().text()).toEqual('Nike (3)');
    expect(wrapper.find('li').last().text()).toEqual('Adidas (1)');
  });

  it('should call `props.onFacetSelect` when clicking on an <li>', () => {
    const clickSpy = jest.fn();
    const wrapper = shallow(<Facet items={mockShoes} onFacetSelect={clickSpy}/>);
    const element = wrapper.find('li').first();
    expect(clickSpy).not.toHaveBeenCalled();
    element.simulate('click');
    expect(clickSpy).toHaveBeenCalledWith(expect.objectContaining({
      brand: expect.any(String),
      count: expect.any(Number)
    }));
  })
});

describe('App', () => {
  it('should contain a <Facet /> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(<Facet items={mockShoes}/>).length).toEqual(1);
  });

  it('should have `state.facetSelected` that equals null', () => {
    // WRITE THIS TEST!
    return false;
  });

  it('should have an instance method called `handleFacetSelect`', () => {
    // WRITE THIS TEST!
    return false;
  });

  it('the instance method should update `state.facetSelected`', () => {
    // WRITE THIS TEST!
    return false;
  });

  it('the instance method should update `state.facetSelected` to null if a shoe is selected already (toggle off)', () => {
    // WRITE THIS TEST!
    return false;
  });

  it('the <Facet /> component should be passed `handleSelect` as a prop', () => {
    // WRITE THIS TEST!
    return false;
  });

  it('the list of shoes display should be filter based on the facet selected', () => {
    // WRITE THIS TEST! THIS IS THE MAIN ONE
    return false;
  });

  it('the list of shoes display should be filter based on the facet selected', () => {
    // WRITE THIS TEST! THIS IS THE MAIN ONE
    return false;
  });
});