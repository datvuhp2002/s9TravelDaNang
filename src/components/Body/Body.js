import React, { Component } from 'react'
import Search from '../layout/search/Search'
import Slider from './Slider/Slider'

export default class Body extends Component {
  render() {
    return (
      <main>
            <Slider/>
            <Search/>
      </main>
    
    )
  }
}
