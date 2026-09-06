import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { RiStarSLine } from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi2";




function Features() {
  return (
    <div className='features'>
      <div className='feature'>
            < FaShippingFast className='feature-icon' />
            <div className='feature-info'>
                <h3>Hızlı Teslimat</h3>
                <p> 30 dk içinde kapında </p>
            </div>
      </div>

      <div className='feature'>
            <SiCodefresh  className='feature-icon'/>
            <div className='feature-info' >
                <h3>Taze Malzemeler</h3>
                <p> Günlük ve doğal </p>
            </div>

      </div>

        <div className='feature'>
            <RiStarSLine className='feature-icon'/>
            <div className='feature-info'>
                <h3>%100 Memnuniyet</h3>
                <p> Müşteri Memnuniyeti </p>
            </div>

      </div>

        <div className='feature'>
            <HiOutlineCreditCard className='feature-icon' />
            <div className='feature-info'>
                <h3>Güvenli Ödeme</h3>
                <p> SSL ile korumalı </p>
            </div>

      </div>
    </div>
  )
}

export default Features
