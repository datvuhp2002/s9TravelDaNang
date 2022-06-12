import React, { Component } from 'react'
import { AiFillHome } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
export default class HeaderTop extends Component {
  render() {
    return (
      <div className='HeaderTop d-flex bg-warning '>
        <ul className='d-flex text-white ps-0'>
            <li><AiFillHome className='icon'/>CÔNG TY TNHH THƯƠNG MẠI & DỊCH VỤ DU LỊCH S9 ĐÀ NẴNG</li>
            <li><a href="mailto:s9traveldn@gmail.com" className='text-white'><HiOutlineMail/>s9traveldn@gmail.com</a></li>
            <li><a href="tel: 0935 327 969 " className='text-white'><BsTelephoneFill/>0935 327 969</a></li>
            <li><a href="tel: 0979 324 821" className='text-white'><BsTelephoneFill/>0979 324 821</a></li>
            
        </ul>
      </div>
    )
  }
}
