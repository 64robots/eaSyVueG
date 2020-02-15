import { shallowMount } from '@vue/test-utils'
import VPolygon from './VPolygon'

describe('VPolygon.vue', () => {
  it('has a name', () => {
    const wrapper = shallowMount(VPolygon, {
      propsData: {
        points: []
      }
    })
    expect(wrapper.name()).toBe('VPolygon')
  })

  it('render correctly', () => {
    const propsData = {
      points: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 20, y: 20 }]
    }
    const wrapper = shallowMount(VPolygon, {
      propsData,
      attrs: { fill: 'red' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render points', () => {
    const propsData = {
      points: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 20, y: 20 }]
    }
    const wrapper = shallowMount(VPolygon, { propsData })

    expect(wrapper.vm.$refs.polygon.getAttribute('points')).toBe(
      '0,0 10,0 20,20'
    )
  })

  it('render attributes', () => {
    const propsData = { points: [] }
    const wrapper = shallowMount(VPolygon, {
      propsData,
      attrs: { fill: 'red' }
    })
    expect(wrapper.vm.$refs.polygon.getAttribute('fill')).toBe('red')
  })
})
