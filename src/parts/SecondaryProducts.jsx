import React, { useState } from 'react'
import '../styles/secondaryproducts.scss'

const Item = ({ title, price, image }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };
    
    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='item'>
            <div className='sale' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className='image' alt='' src={image} />
                <div className='pre-order'>PRE-ORDER</div>
            </div>
            <div className='info'>
            <div className='name-price'>
                <div className='name'>{title}</div>
                {hovered ? <div className='shop'>shop now</div> : <div className='price'>{price} €</div>}
            </div>
            </div>
        </div>
    )
}

const SecondaryProducts = () => {

  const items = [
    {
        id: 1,
        title: 'Monogram Carrying Case',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/20221018_MonogramCC_Case_06_1920x1280_crop_center.jpg?v=1666726898',
        price: 57.95,
    },
    {
        id: 2,
        title: 'Monogram Core',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7_750x500_crop_center.jpg?v=1593651640',
        price: 153.95,
    },
    {
        id: 3,
        title: 'Slider Module',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a_750x500_crop_center.jpg?v=1593651879',
        price: 153.95,
    },
    {
        id: 4,
        title: 'Video Console',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd_750x500_crop_center.jpg?v=1593651769',
        price: 124.95,
    },
    {
        id: 5,
        title: 'Orbiter Module',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c_750x500_crop_center.jpg?v=1593651849',
        price: 153.95,
    },
    {
        id: 6,
        title: 'Dial Module',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6_750x500_crop_center.jpg?v=1593651701',
        price: 124.95,
    },
    {
        id: 7,
        title: 'Console Pack Audio',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-midi-final-august_750x540_crop_center.jpg?v=1661440892',
        price: 28.95,
    },
    {
        id: 8,
        title: 'Console Pack Photo',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-photo-final-august_750x540_crop_center.jpg?v=1661440997',
        price: 37.95,
    },
    {
        id: 9,
        title: 'Console Pack Video',
        image: 'https://cdn.shopify.com/s/files/1/0974/7950/products/SW-box-render-mini-video-final-august_750x540_crop_center.jpg?v=1661441054',
        price: 66.95,
    },
  ]

  return (
    <div className='content-secpro'>
        <div className='items'>
        {items.map(item => 
            (<Item title={item.title} 
                   information={item.information} 
                   image={item.image} 
                   price={item.price} 
                   key={item.id}
            />)
        )}
        </div>
    </div>
  )
}

export default SecondaryProducts