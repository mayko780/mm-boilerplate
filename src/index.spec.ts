import { Hello } from './index'

describe('Index test', () => {
  test('Hello world works', () => {
    const hello = new Hello()
    expect(hello.greeting()).toEqual('Hello world! 🚀')
  })
})
