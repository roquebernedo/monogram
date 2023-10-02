import React from 'react'
import '../styles/MainProducts.scss'

const Item = ({ title, price, information, image }) => {
    return (
        <div className='item'>
            <div className='sale'>
              <img className='image' alt='' src={image} />
              <div className='pre-order'>PRE-ORDER</div>
            </div>
            <div className='info'>
              <div className='name-price'>
                <div className='name'>{title}</div>
                <div className='price'>{price} €</div>
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
        price: 240.95,
    },
    {
        id: 2,
        title: 'Audio console',
        information: 'Ideal for music & audio. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_750x500_crop_center.jpg?v=1623682377',
        price: 482.95,
    },
    {
        id: 3,
        title: 'Photo console',
        information: 'Ideal for photo & video. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_750x500_crop_center.jpg?v=1623269261',
        price: 579.95,
    },
    {
        id: 4,
        title: 'Video console',
        information: 'Ideal for video & film. Adaptable to any workflow.',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_750x500_crop_center.jpg?v=1623682600',
        price: 869.95,
    }
  ]

  return (
    <div className='content'>
        <div className='items'>
        {items.map(item => 
            (<Item title={item.title} 
                   information={item.information} 
                   image={item.image} 
                   price={item.price} 
            />)
        )}
        </div>
    </div>
  )
}

export default MainProducts