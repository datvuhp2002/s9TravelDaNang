import React, { Component } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

export default class MenuItems extends Component {
  render() {
    return (
        <ul className='d-flex align-items-center '>
            <li><a className = "text-white" href="/#">Trang chủ</a></li>
            <li><a className = "text-white" href="/#">Giới thiệu</a></li>
            <li><a className = "text-white" href="/#">Tour quốc tế</a></li>
            <li><a className = "text-white" href="/#">Tour trong nước</a></li>
            <li><a className = "text-white" href="/#">Cảm nang du lịch</a></li>
            <li><a className = "text-white" href="/#">Liên hệ</a></li>
            <li><AiOutlineSearch className = "icon"/></li>
        </ul>
    )
  }
}
