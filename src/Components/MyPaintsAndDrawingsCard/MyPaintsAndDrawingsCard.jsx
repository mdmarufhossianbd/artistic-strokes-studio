import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyPaintsAndDrawingsCard = ({ item }) => {

    const { _id, photo, item_name, price, rating, processing_time, customization, stock } = item;

    return (
        <div className="bg-slate-400 rounded p-3 flex flex-col gap-2">
            <img className='rounded-t' src={photo} alt="" />
            <h2 className='text-xl font-semibold'>{item_name}</h2>
            <p><span className='font-medium'>Rating</span> : {rating} out of 5.00</p>
            <p><span className='font-medium'>Processing Time</span> : {processing_time}</p>
            <p><span className='font-medium'>Customization</span> : {customization}</p>
            <p><span className='font-medium'>Stock</span> : {stock || `Please Update`}</p>
            <h2><span className='font-medium'>Price</span> : {price}</h2>
            <Link to={`/paintings-and-drawings/${_id}`}><button className='bg-pink-500 w-full rounded py-2 my-2 text-white font-medium'>View</button></Link>
            <Link><button className='bg-pink-500 w-full rounded py-2 my-2 text-white font-medium'>Update</button></Link>
            <Link><button className='bg-pink-500 w-full rounded py-2 my-2'>Update</button></Link>

        </div>
    );
};

MyPaintsAndDrawingsCard.propTypes = {
    item: PropTypes.obj
}

export default MyPaintsAndDrawingsCard;