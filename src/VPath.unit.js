import VPath from './VPath'

test('exports a valid component', () => {
  expect(VPath).toBeAComponent()
})

test('renders the text "VPath"', () => {
  const { element } = shallowMount(VPath)
  expect(element.textContent.trim()).toBe('VPath')
})

test('adds a "hello" class on the root element', () => {
  const { element } = shallowMount(VPath)
  expect(element.classList.contains('hello')).toBe(true)
})
