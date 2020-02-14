import VRect from './VRect'

test('exports a valid component', () => {
  expect(VRect).toBeAComponent()
})

test('renders the text "VRect"', () => {
  const { element } = shallowMount(VRect)
  expect(element.textContent.trim()).toBe('VRect')
})

test('adds a "hello" class on the root element', () => {
  const { element } = shallowMount(VRect)
  expect(element.classList.contains('hello')).toBe(true)
})
