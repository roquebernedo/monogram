import React from 'react'
import '../styles/header.scss'
import { BsBag } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai"

const Header = () => {
  return (
    <header>
        <div className='menu-up'>
          <div className='menu-up-sides'>
            <div className='monogram'>
              <div className='icon'>
                <svg className='icon-mono' height="38" viewBox="0 0 150 114" fill="currentColor">
                  <path d="M150,36V0H0V114H150ZM144,6V36H78V6ZM6,6H72V72H6ZM72,108H6V78H72Zm72,0H78V78h0V42h66Z"></path>
                  <rect x="35.5" y="17" width="6" height="44"></rect>
                  <rect x="53" y="17" width="6" height="44"></rect>
                  <rect x="18" y="17" width="6" height="44"></rect>
                  <path d="M111.5,50a25,25,0,1,0,25,25A25,25,0,0,0,111.5,50Zm0,44a19,19,0,1,1,19-19A19,19,0,0,1,111.5,94Z"></path>
                </svg>
              </div>
              <div className='monogram-text'>MONOGRAM</div>
            </div>
            <div className='menu'>
              <ul className='right-menu'>
                <li className='li-menu-main'><a href='https://www.google.com/' className='bold'>How it Works</a></li>
                <li className='li-menu-main'><a href='https://www.google.com/' className='grey'>Workflows<IoMdArrowDropdown /></a></li>
                <li className='li-menu-main'><a href='https://www.google.com/' className='bold'>Download</a></li>
                <li className='li-menu-main'><a href='https://www.google.com/' className='bold'>Blog</a></li>
                <li className='li-menu-main'><a href='https://www.google.com/' className='bold'>Support</a></li>
                <li className='li-menu-main'><a href='https://www.google.com/' className='bold shop'>Shop</a></li>
                <li className='menu-responsive'><AiOutlineMenu /></li>
                <li className='li-bag'><button className='button-bag'><BsBag className='icon-bag'/></button></li>
                <li className='euro'>
                  <a className='EUR grey' href='https://www.google.com/'>
                    EUR
                    <IoMdArrowDropdown className='coin-button'/>
                  </a>
                </li>
                <ul className='coin-menu'>
                  <li className='coni-options'>USD ($)</li>
                  <li className='coni-options'>CAD ($)</li>
                  <li className='coni-options'>EUR (€)</li>
                  <li className='coni-options'>AUD ($)</li>
                  <li className='coni-options'>GBP (£)</li>
                  <li className='coni-options'>KRW (₩)</li>
                  <li className='coni-options'>JPY (¥)</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className='div-img'>
          <div className='div-left'></div>
          <div className='div-right'></div>
          <div className='dropdown'>
            <AiOutlineDown className='dropdown-left' />
          </div>
          <div className='text-center'>
            <h1 className='text-up'>A console for every workflow</h1>
            <div className='text-down'>Discover the perfect console for yours</div>
          </div>
          <img alt='' src="https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/91943/shop_cta_xl_896f6b8270.webp" className='img'/>
        </div>
      </header>
  )
}

export default Header