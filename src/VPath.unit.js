import { shallowMount } from '@vue/test-utils'
import VPath from './VPath'

describe('VPath.vue', () => {
  it('has a name', () => {
    const wrapper = shallowMount(VPath, {
      propsData: {
        draw: []
      }
    })
    expect(wrapper.name()).toBe('VPath')
  })

  it('renders correctly', () => {
    const draw = [{ moveTo: { x: 10, y: 20 } }, { lineTo: { x: 20, y: 20 } }]
    const wrapper = shallowMount(VPath, {
      propsData: { draw },
      attrs: { fill: 'red' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders d', () => {
    const draw = [{ moveTo: { x: 10, y: 20 } }, { lineTo: { x: 20, y: 20 } }]
    const wrapper = shallowMount(VPath, {
      propsData: { draw }
    })
    expect(wrapper.vm.d).toBe('M10 20 L20 20 Z')
  })

  it('renders attributes', () => {
    const wrapper = shallowMount(VPath, {
      propsData: { draw: [] },
      attrs: { fill: 'red' }
    })
    expect(wrapper.vm.$refs.path.getAttribute('fill')).toBe('red')
  })
})
