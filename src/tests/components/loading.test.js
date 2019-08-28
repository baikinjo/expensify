import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../../components/loading'

test('should correctly render Loading', () => {
  const wrapper = shallow(<Loading />)
  expect(wrapper).toMatchSnapshot()
})
