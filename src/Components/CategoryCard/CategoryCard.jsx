import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CategoryCard = ({ item }) => {
    
    const { photo, category, origins} = item;
    return (
        <Link className='' to={`/category/${category}`}>
            <div className='hover:bg-[#f2f2f2] p-3 hover:rounded-xl border rounded-xl'>
                <img className='rounded-xl' src={photo} />
                <h2 className='font-semibold text-2xl py-2'>{category}</h2>
                <p>{origins}</p>                
            </div>
        </Link>
    );
};
CategoryCard.propTypes = {
    item: PropTypes.obj
}

export default CategoryCard;