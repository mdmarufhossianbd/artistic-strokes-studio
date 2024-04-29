import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyPaintsAndDrawingsCard = ({ item, userCrafts ,setUserCrafts }) => {

    const { _id, photo, item_name, price, rating, processing_time, customization, stock } = item;

    const handleDelte = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
            fetch(`https://painting-and-drawing-server-beryl.vercel.app/paintings-and-drawings/${_id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                          });
                        }
                      });

                    const remainingCrafts = userCrafts.filter( crafts=> crafts._id !== _id);
                    setUserCrafts(remainingCrafts)                    
                }
            })
    }

    return (
        <div className="bg-[#e7f4f2] rounded p-3 flex flex-col gap-2">
            <img className='rounded-t' src={photo} alt="" />
            <h2 className='text-xl font-semibold'>{item_name}</h2>
            <p><span className='font-medium'>Rating</span> : {rating} out of 5.00</p>
            <p><span className='font-medium'>Processing Time</span> : {processing_time}</p>
            <p><span className='font-medium'>Customization</span> : {customization}</p>
            <p><span className='font-medium'>Stock</span> : {stock || `Please Update`}</p>
            <h2><span className='font-medium'>Price</span> : {price}</h2>
            <Link to={`/paintings-and-drawings/${_id}`}><button className='bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 w-full rounded py-2 my-2 text-white font-medium'>View</button></Link>
            <Link to={`/update-craft/${_id}`}><button className='bg-[#4e4feb] w-full rounded py-2 text-white font-medium'>Update</button></Link>
            <Link><button onClick={() => handleDelte(_id)} className='bg-red-400 w-full text-white font-medium rounded py-2 my-2'>Delete</button></Link>

        </div>
    );
};

MyPaintsAndDrawingsCard.propTypes = {
    item: PropTypes.object,
    userCrafts: PropTypes.object,
    setUserCrafts: PropTypes.object
}

export default MyPaintsAndDrawingsCard;