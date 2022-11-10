import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from '../../Pages/Reviews/Reviews/Reviews';

const ItemDetails = () => {
    const { img, price, description, flavour, ratings, name, ratingsCount } = useLoaderData();

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
                <figure><img className='h-full' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className='text-2xl text-green-600'>{price}</h3>
                    <p className='font-bold text-orange-600'>Flavour: {flavour}</p>

                    <p>{description}</p>

                    <span className='font-bold me-5 '>Ratings: {ratings}</span>
                    <span className='font-bold'>Total-ratings: {ratingsCount}</span>
                    <div className="">
                        <Link to=''>
                            <button className="btn btn-primary">Order</button>
                        </Link>
                    </div>




                </div>
            </div>
            <div>
                <div>
                    <Link to='/reviews'>
                        <button className="btn btn-primary mb-5">Give Your Review Here!!!</button>
                    </Link>
                </div>
                <Reviews></Reviews>

            </div>
        </div>
    );
};

export default ItemDetails;