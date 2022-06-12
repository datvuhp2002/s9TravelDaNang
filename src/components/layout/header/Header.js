import React, { Component } from 'react'
import HeaderMain from './HeaderMain/HeaderMain'
import HeaderTop from './HeaderTop/HeaderTop'
export default class Header extends Component {
  render() {
    return (
      <header className='position-absolute w-100'>
        <HeaderTop/>
        <HeaderMain/>
        
      </header>   
    )

  }
}
