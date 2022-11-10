import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            customer: name,
            email,
            message

        }

    }

    return (

        <div >

            <form onSubmit={handleSubmitReview}>
                <div className='ml-20'>
                    {
                        user?.photoURL ?

                            <img className="w-10 rounded-full " src={user?.photoURL
                            } alt="" />
                            :
                            <img className="w-10 rounded-full" src="https://placeimg.com/192/192/people" alt='' />
                    }

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>

                    <input name='name' type="text" placeholder="Your name" className="input input-ghost w-full input-bordered " />
                    <input name='email' type="text" placeholder="Your Email"
                        defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-24" placeholder="Your Review"></textarea>
                <input className='btn' type="submit" value="place your review" />

            </form>

        </div>

    );
};

export default Reviews;






