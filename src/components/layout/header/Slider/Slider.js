import React, { Component } from 'react'
import HeaderMain from '../HeaderMain/HeaderMain'

export default class Slider extends Component {
  render() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide position-relative" data-bs-ride="carousel">
            <div className='position-absolute w-100'>
              <HeaderMain/>
            </div>
            <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://s9traveldanang.com/wp-content/uploads/2022/04/cuoc-xay-dung-kinh-thanh-cuoi-cung-cua-viet-nam-040809.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://s9traveldanang.com/wp-content/uploads/2022/04/du-lich-cu-lao-cham-island.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://s9traveldanang.com/wp-content/uploads/2022/04/cover-1601542663-368-width1920height1279.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
      </div>
    )
  }
}
