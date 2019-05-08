// import {_isNaN} from './../index';

import {_isNaN} from '../index';


describe('number ',()=>{
  it('isNaN 2',()=>{
    expect(_isNaN(2)).toBeFalsy()
  })
  it('isNaN abc',()=>{
    expect(_isNaN('abc')).toBeTruthy()
  })
  it('isNaN boolean true',()=>{
    expect(_isNaN(true)).toBeTruthy()
  })
  it('isNaN boolean false',()=>{
    expect(_isNaN(false)).toBeTruthy()
  })
  it('isNaN ',()=>{
    expect(_isNaN()).toBeTruthy()
  })
  it('isNaN 1.23',()=>{
    expect(_isNaN('1.23')).toBeFalsy()
  })
  it('isNaN 1.23a',()=>{
    expect(_isNaN('1.23a')).toBeTruthy()
  })
})