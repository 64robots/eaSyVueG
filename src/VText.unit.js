import { shallowMount } from '@vue/test-utils'
import VText from './VText'

describe('VText.vue', () => {
  it('has a name', () => {
    const wrapper = shallowMount(VText, {
      propsData: {
        position: { x: 0, y: 0 }
      }
    })
    expect(wrapper.name()).toBe('VText')
  })

  it('renders correctly', () => {
    const wrapper = shallowMount(VText, {
      propsData: {
        position: { x: 0, y: 0 }
      },
      attrs: { fill: 'red' },
      slots: {
        default: 'TEXT'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders attributes', () => {
    const wrapper = shallowMount(VText, {
      propsData: {
        position: { x: 0, y: 0 }
      },
      attrs: { fill: 'red' }
    })
    expect(wrapper.vm.$refs.text.getAttribute('fill')).toBe('red')
  })
})
