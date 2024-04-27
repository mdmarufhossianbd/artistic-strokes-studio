import { useEffect, useState } from 'react';
import CarftIemCard from '../CarftIemCard/CarftIemCard';

const CarftItem = () => {

    const [cafts, setCarft] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/paintings-and-drawings')
        .then(res=>res.json())
        .then(data=>{
            setCarft(data)
        })
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto">
            {
                cafts?.slice(0, 6).map(item=> (
                <CarftIemCard key={item._id}
                item={item}
                ></CarftIemCard>))
            }
        </div>
    );
};

export default CarftItem;