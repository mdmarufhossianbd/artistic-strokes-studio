import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const HomeProducts = ({ item }) => {

    const { _id, photo, item_name, category, price, rating } = item;
    

    return (
        <div>
           <img className='w-full h-[250px] object-cover rounded-md' src={photo} alt="" />
           <h2 className='text-2xl font-medium py-2'>{item_name}</h2>
           <h2>Category : {category}</h2>
           <div className='flex justify-between font-medium py-2'>
            <p>Price : {price} USD</p>
            <p>Rating : {rating} out of 5.00.</p>
           </div>
           <Link to={`/paintings-and-drawings/${_id}`}><button className='bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 py-2 my-2 w-full rounded text-white text-xl font-medium border border-white hover:border hover:border-[#10A58F]'>View Details</button></Link>
        </div>
    );
};

HomeProducts.propTypes = {
    item: PropTypes.obj,
}

export default HomeProducts;