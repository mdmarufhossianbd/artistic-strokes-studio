import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarftIemCard = ({ item }) => {
    const { _id, photo, item_name, category, price, rating} = item;
    return (
        <div className='border rounded-md p-4'>
            <img className='rounded-md md:h-[300px] w-full h-[300px] object-cover' src={photo} alt="" />
            <h2 className='text-2xl py-2'>{item_name}</h2>
            <p className='font-medium'>Category : {category}</p>
            <div className='flex justify-between my-2'>
                <p>Price : ${price}</p>
                <p>Rating {rating} Out of 5</p>
            </div>
            <Link to={`/paintings-and-drawings/${_id}`}><button className='bg-purple-500 py-2 my-2 w-full rounded text-white text-xl font-medium'>View Details</button></Link>
        </div>
    );
};

CarftIemCard.propTypes = {
    item: PropTypes.obj
}

export default CarftIemCard;