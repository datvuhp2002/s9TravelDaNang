import React, { Component } from 'react'
import ImgItem from './HeaderMainItems/ImgItem'
import MenuItems from './HeaderMainItems/MenuItems'

export default class HeaderMain extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between HeaderMain' id='HeaderMain'>
        <ImgItem/> 
        <MenuItems/>
      </div>
    )
  }
}
