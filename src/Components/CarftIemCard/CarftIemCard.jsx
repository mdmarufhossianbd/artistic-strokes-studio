import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarftIemCard = ({ item, index }) => {
    const { _id, item_name, category, price, rating } = item;
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{item_name}</td>
            <td>{category}</td>
            <td>{price} USD</td>
            <td>{rating} out of 5.00</td>
            <td><Link to={`/paintings-and-drawings/${_id}`}><button className='bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 py-2 my-2 w-full rounded text-white text-xl font-medium border border-white hover:border hover:border-[#10A58F]'>View Details</button></Link></td>
        </tr>
    );
};

CarftIemCard.propTypes = {
    item: PropTypes.obj,
    index: PropTypes.obj
}

export default CarftIemCard;