import React, { useState } from 'react'
import '../styles/MainProducts.scss'

const Item = ({ title, price, information, image, image2 }) => {
  const [hovered, setHovered] = useState(false);
  const [isOpacity, setIsOpacity] = useState(0);
  if(isOpacity){}
  const opacity = hovered ? 0 : 1

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

    return (
        <div className='item'>
            <div className='sale' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img className='image' alt='' src={hovered ? image2 : image} />
              <div className='pre-order'>PRE-ORDER</div>
            </div>
            <div className='info'>
              <div className='name-price'>
                <div className='name'>{title}</div>
                {hovered ? <div className='shop'>shop now</div> : <div className='price'>{price} €</div>}
              </div>
              <div className='extrainfo'>{information}</div>
            </div>
        </div>
    )
}

const MainProducts = () => {

  const items = [
    {
        id: 1,
        title: 'Mini console',
        information: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_750x500_crop_center.jpg?v=1660013247',
        image2: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_750x500_crop_center.jpg?v=1668446709',
        price: 240.95,
    },
    {
        id: 2,
        title: 'Audio console',
        information: 'Ideal for music & audio. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_750x500_crop_center.jpg?v=1623682377',
        image2: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_750x500_crop_center.jpg?v=1668433146',
        price: 482.95,
    },
    {
        id: 3,
        title: 'Photo console',
        information: 'Ideal for photo & video. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_750x500_crop_center.jpg?v=1623269261',
        image2: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_750x500_crop_center.jpg?v=1668433210',
        price: 579.95,
    },
    {
        id: 4,
        title: 'Video console',
        information: 'Ideal for video & film. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_750x500_crop_center.jpg?v=1623682600',
        image2: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_MasterBracket1_Monogram_May2020_4555_750x500_crop_center.jpg?v=1668433240',
        price: 869.95,
    }
  ]

  return (
    <div className='content' id='itemsID'>
        <div className='items'>
        {items.map(item => 
            (<Item 
                   key={item.id}
                   title={item.title} 
                   information={item.information} 
                   image={item.image} 
                   image2={item.image2}
                   price={item.price} 
            />)
        )}
        </div>
    </div>
  )
}

export default MainProducts