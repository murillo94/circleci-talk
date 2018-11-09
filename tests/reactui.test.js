import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Title from '../components/title';

Enzyme.configure({ adapter: new Adapter() });

describe('title', () => {
  test('Rendezirando', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Verificando autor', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('span').text()).toEqual('Murisllo de Miranda Pereira');
  });
});
