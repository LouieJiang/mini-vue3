import { add } from '../index'
it('init', () => {
  expect(true).toBe(true)
})
it('import', () => {
  expect(add(1, 2)).toBe(3)
})
