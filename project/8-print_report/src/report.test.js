const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages', () => {
  const input = {
    url1: 5,
    url2: 1,
    url3: 3,
    url4: 10,
    url5: 7 
  }
  const actual = sortPages(input)
  const expected = [
    [ 'url4', 10 ],
    [ 'url5', 7 ],
    [ 'url1', 5 ],
    [ 'url3', 3 ],
    [ 'url2', 1 ]
  ]
  expect(actual).toEqual(expected)
})

test('sortPages null case', () => {
  const input = {}
  const actual = sortPages(input)
  const expected = []
  expect(actual).toEqual(expected)
})
