import React, { Component } from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderMain from './HeaderMain/HeaderMain'
import Slider from './Slider/Slider'

export default class Header extends Component {
  render() {
    return (
      <>
            <HeaderTop/>
            <div>
              <HeaderMain/>
              <Slider/>
            </div>
      </>   
    )

  }
}
