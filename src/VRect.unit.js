import { shallowMount } from '@vue/test-utils'
import VRect from './VRect'

describe('VRect.vue', () => {
  it('has a name', () => {
    const wrapper = shallowMount(VRect, {
      propsData: {
        rounded: { x: 2, y: 2 },
        dimensions: { width: 100, height: 80 },
        position: { x: 0, y: 0 }
      }
    })
    expect(wrapper.name()).toBe('VRect')
  })

  it('render correctly', () => {
    const propsData = {
      rounded: { x: 2, y: 2 },
      dimensions: { width: 100, height: 80 },
      position: { x: 5, y: 5 }
    }
    const wrapper = shallowMount(VRect, { propsData, attrs: { fill: 'red' } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('render dimensions position and rounded', () => {
    const propsData = {
      rounded: { x: 2, y: 2 },
      dimensions: { width: 100, height: 80 },
      position: { x: 5, y: 5 }
    }
    const wrapper = shallowMount(VRect, { propsData })

    expect(Number(wrapper.vm.$refs.rect.getAttribute('width'))).toBe(
      propsData.dimensions.width
    )
    expect(Number(wrapper.vm.$refs.rect.getAttribute('height'))).toBe(
      propsData.dimensions.height
    )
    expect(Number(wrapper.vm.$refs.rect.getAttribute('x'))).toBe(
      propsData.position.x
    )
    expect(Number(wrapper.vm.$refs.rect.getAttribute('y'))).toBe(
      propsData.position.y
    )
    expect(Number(wrapper.vm.$refs.rect.getAttribute('rx'))).toBe(
      propsData.rounded.x
    )
    expect(Number(wrapper.vm.$refs.rect.getAttribute('ry'))).toBe(
      propsData.rounded.y
    )
  })

  it('render attributes', () => {
    const propsData = {
      rounded: { x: 2, y: 2 },
      dimensions: { width: 100, height: 80 },
      position: { x: 5, y: 5 }
    }
    const wrapper = shallowMount(VRect, { propsData, attrs: { fill: 'red' } })
    expect(wrapper.vm.$refs.rect.getAttribute('fill')).toBe('red')
  })
})
