import { useLoaderData } from "react-router-dom";
import CarftIemCard from "../../Components/CarftIemCard/CarftIemCard";

const PaintingAndDrawing = () => {
    const paintingsAndDrawings = useLoaderData();

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 max-w-7xl mx-5 mt-10 md:mx-auto">
            {   
                paintingsAndDrawings?.map(item => (
                <CarftIemCard key={item._id}
                    item={item}
                ></CarftIemCard>))
            }
        </div>
    );
};

export default PaintingAndDrawing;