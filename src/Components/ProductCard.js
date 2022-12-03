import React from 'react';
import { useProducts } from '../context/ProductProvider';
import { actiontypes } from '../state/productStates/productActionTypes';

const ProductCard = ({ product }) => {
    const { dispatch } = useProducts();

    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={product._id}
        >
            <div className='h-52 w-52 mx-auto'>
                <img src={product.img} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.name}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.ratings}</p>
            {/* <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.map((feature) => {
                        return <li className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div> */}
            <div className='flex gap-2 mt-5'>
                <button
                    className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    onClick={() => dispatch({ type: actiontypes.ADD_TO_CART, payload: product })}
                // onClick={() =>
                //     dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
                //   }
                >
                    Add to cart
                </button>
                <button
                    title='Add to wishlist'
                    className='bg-indigo-500 text-white py-1 px-2 rounded-full'
                    onClick={() => dispatch({ type: actiontypes.ADD_TO_WISHLIST, payload: product })}
                >
                    wishlist
                </button>
            </div>
        </div>
    );
};

export default ProductCard;