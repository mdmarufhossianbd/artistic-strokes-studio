import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto">
            {
                items?.map(item=> (
                    <CategoryCard key={item._id}
                    item={item}
                    ></CategoryCard>
                ))
            }
        </div>
    );
};

export default Category;