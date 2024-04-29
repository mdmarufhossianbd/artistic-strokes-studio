import { useEffect, useState } from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';

const CarftItem = () => {
    const [crafts, setCraft] = useState([]);

    useEffect(() => {

        fetch('https://painting-and-drawing-server-beryl.vercel.app/paintings-and-drawings')
            .then(res => res.json())
            .then(data => {
                setCraft(data)
            })

    }, [])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto">
            {
                crafts?.slice(0, 6).map(item => (
                    <HomeProducts key={item._id}
                        item={item}
                    ></HomeProducts>))
            }
        </div>
    );
};

export default CarftItem;