import React from 'react';
import Slide from '../components/header/Home/Slide.jsx';

const productData = [
    {
        id: '1',
        url: 'https://media.gettyimages.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=gi&k=20&c=JjXuAnR-VdnZLEaCx4kt8aCRg-gA94Cl1xfRy2KJb-c=',
        title: { shortTitle: 'Product 1' },
        discount: '20% Off',
        tagline: 'Best Seller'
    },
    {
        id: '2',
        url: 'https://media.gettyimages.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?s=612x612&w=gi&k=20&c=JjXuAnR-VdnZLEaCx4kt8aCRg-gA94Cl1xfRy2KJb-c=',
        title: { shortTitle: 'Product 2' },
        discount: '15% Off',
        tagline: 'Top Rated'
    },
    {
        id: '3',
        url: 'https://media.istockphoto.com/id/1203599963/photo/food-background-with-assortment-of-fresh-organic-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=JKjEfvVa0ZieiyDbvhbUaCRgZ0MQJcx7cf35k-vRftY=',
        title: { shortTitle: 'Product 3' },
        discount: '30% Off',
        tagline: 'Hot Deal'
    }
    // Add more products as needed
];


export default function Shop() {
    return (
        <div>
            <Slide
                products={productData}    // Pass the array of products
                title="Best Deals"         // Pass a title
                timer={true}               // Optionally pass a timer
            />
        </div>
    );
}
