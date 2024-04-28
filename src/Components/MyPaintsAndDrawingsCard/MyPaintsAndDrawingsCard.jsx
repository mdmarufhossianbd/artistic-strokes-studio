import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyPaintsAndDrawingsCard = ({ item, userCrafts ,setUserCrafts }) => {

    const { _id, photo, item_name, price, rating, processing_time, customization, stock } = item;

    

    const handleDelte = _id => {
            fetch(`http://localhost:5000/paintings-and-drawings/${_id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data){
                    alert("Item Delete Successfully.")
                    const remainingCrafts = userCrafts.filter( crafts=> crafts._id !== _id);
                    setUserCrafts(remainingCrafts)                    
                }
            })
    }

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
            <Link to={`/update-craft/${_id}`}><button className='bg-pink-500 w-full rounded py-2 my-2 text-white font-medium'>Update</button></Link>
            <Link><button onClick={() => handleDelte(_id)} className='bg-pink-500 w-full rounded py-2 my-2'>Delete</button></Link>

        </div>
    );
};

MyPaintsAndDrawingsCard.propTypes = {
    item: PropTypes.object,
    userCrafts: PropTypes.object,
    setUserCrafts: PropTypes.object
}

export default MyPaintsAndDrawingsCard;