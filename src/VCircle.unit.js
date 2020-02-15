import { shallowMount } from '@vue/test-utils'
import VCircle from './VCircle'

describe('VCircle.vue', () => {
  it('has a name', () => {
    const wrapper = shallowMount(VCircle, {
      propsData: {
        position: { x: 0, y: 0 },
        radius: 1
      }
    })
    expect(wrapper.name()).toBe('VCircle')
  })

  it('renders a circle correctly', () => {
    const wrapper = shallowMount(VCircle, {
      propsData: {
        position: { x: 0, y: 0 },
        radius: 1
      },
      attrs: { fill: 'red' }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a ellipse correctly', () => {
    const wrapper = shallowMount(VCircle, {
      propsData: {
        position: { x: 0, y: 0 },
        radius: { x: 2, y: 2 }
      },
      attrs: { fill: 'red' }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders attributes for circle', () => {
    const wrapper = shallowMount(VCircle, {
      propsData: {
        position: { x: 0, y: 0 },
        radius: 1
      },
      attrs: { fill: 'red' }
    })
    expect(wrapper.vm.$refs.circle.getAttribute('fill')).toBe('red')
  })

  it('renders attributes for ellipse', () => {
    const wrapper = shallowMount(VCircle, {
      propsData: {
        position: { x: 0, y: 0 },
        radius: { x: 1, y: 1 }
      },
      attrs: { fill: 'red' }
    })
    expect(wrapper.vm.$refs.ellipse.getAttribute('fill')).toBe('red')
  })
})
