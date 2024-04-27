import PropTypes from 'prop-types';
const CategoryCard = ({item}) => {
const {photo, category, origins, keyElements} = item;
    return (
        <div>
            <img className='rounded-xl' src={photo} />
            <h2 className='font-semibold text-2xl py-2'>{category}</h2>
            <p>{origins}</p>
            <p>{keyElements}</p>
        </div>
    );
};
CategoryCard.propTypes = {
    item: PropTypes.obj
}

export default CategoryCard;