import { useLoaderData } from "react-router-dom";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";

const Category = () => {
    const crafts = useLoaderData();
    
    return (
        <div className="my-10">            
            {crafts.length}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto">
                {
                    crafts.map(item => (
                        <HomeProducts key={item._id}
                            item={item}
                        ></HomeProducts>))
                }
            </div>
        </div>
    );
};

export default Category;