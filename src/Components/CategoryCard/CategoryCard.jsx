import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CategoryCard = ({item}) => {
    console.log(item);
const {photo, category, origins, keyElements} = item;
    return (
        <Link to={`/category/${category}`}>
            <div>
            <img className='rounded-xl' src={photo} />
            <h2 className='font-semibold text-2xl py-2'>{category}</h2>
            <p>{origins}</p>
            <p>{keyElements}</p>
        </div>
        
        </Link>
    );
};
CategoryCard.propTypes = {
    item: PropTypes.obj
}

export default CategoryCard;