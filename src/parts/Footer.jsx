import React from 'react'
import '../styles/footer.scss'
import { BiLogoFacebook } from "react-icons/bi"
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import CookieBar from '../components/CookieBar'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-items'>
                <div className='footer-item'>
                    <div className='footer-title'>
                        <div>Monogram</div>
                    </div>
                    <div className='footer-options'>
                        <div className='options'>305 King St. W.</div>
                        <div className='options'>Suite 502</div>
                        <div className='options'>Kitchener, ON</div>
                        <div className='options'>Canada</div>
                    </div>
                </div>
            </div>
            <div className='footer-items'>
                <div className='footer-item'>
                    <div className='footer-title'>
                        <div>Quick links</div>
                    </div>
                    <div className='footer-options'>
                        <div className='options space'>Home</div>
                        <div className='options space'>How it Works</div>
                        <div className='options space'>Shop</div>
                        <div className='options space'>Download</div>
                    </div>
                </div>
            </div>
            <div className='footer-items'>
                <div className='footer-item'>
                    <div className='footer-title'>
                        <div>Help</div>
                    </div>
                    <div className='footer-options'>
                        <div className='options space'>FAQs</div>
                        <div className='options space'>Support Center</div>
                        <div className='options space'>Shipping and Sales</div>
                    </div>
                </div>
            </div>
            <div className='footer-items'>
                <div className='footer-item'>
                    <div className='footer-title'>
                        <div>Information</div>
                    </div>
                    <div className='footer-options'>
                        <div className='options space'>About Us</div>
                        <div className='options space'>Work with us</div>
                        <div className='options space'>Privacy Policy</div>
                        <div className='options space'>Terms of Use</div>
                        <div className='options space'>Terms of Sale</div>
                        <div className='options space'>Press Kit</div>
                    </div>
                </div>
            </div>
            <div className='footer-items subscribe'>
                <div className='footer-item'>
                    <div className='footer-title'>
                        <div>Subscribe to monogram</div>
                    </div>
                    <div className='footer-options'>
                        <div className='footer-subs'>
                            <div>Master productivity with Creative Console and get all the latest Monogram news.</div>
                        </div>
                        <div className='footer-email'>
                            <input className='input-tag' placeholder='Email Address'/>
                            <button className='button-tag'>Submit</button>
                        </div>
                        <div className='menu-icons'>
                            <a href='https://www.google.com/' className='icons instagram'><AiOutlineInstagram /></a>
                            <a href='https://www.google.com/' className='icons twitter'><AiOutlineTwitter /></a>
                            <a href='https://www.google.com/' className='icons facebook'><BiLogoFacebook /></a>
                            <a href='https://www.google.com/' className='icons youtube'><AiFillYoutube /></a>
                        </div>
                    </div>
                    <div className='footer-2023'>
                        <div>© Monogram 2023</div>
                    </div>
                </div>
            </div>
        </div>
        <CookieBar/>
    </div>
  )
}

export default Footer