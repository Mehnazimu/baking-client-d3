import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';




const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-green-400 mt-10 mb-3'>Available Baking Items</p>
                <h2 className='text-3xl font-semibold mb-5'>Pleace check our Available Cake Flavours!!!</h2>
            </div>
            <div>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                    {
                        items.map(item => <ItemCard
                            key={item._id}
                            item={item}
                        ></ItemCard>)

                    }
                </div>


            </div>
        </div>
    );
};

export default Items;