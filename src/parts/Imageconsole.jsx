import React from 'react'
import '../styles/imageconsole.scss'

const Imageconsole = () => {
  return (
    <div className='image-box'>
        <div className='img-div'>
          <img className='img-box' alt='' src='https://monogramcc.com/static/fb6b98aa90bbce383e12a09c50936e96/9ee2a/shop-banner-module.webp' />
        </div>
        <div className='text-box'>
            <h1 className='img-title'>Create your own console</h1>
            <div className='img-text'>Add-on to make it perfect.</div>
        </div>
    </div>
  )
}

export default Imageconsole