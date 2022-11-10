import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ItemCard = ({ item }) => {
    const { _id, img, name, price, description } = item;

    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className='text-2xl text-green-600'>{price}</h3>
                <p className='p-0 m-0'>{description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/items/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;