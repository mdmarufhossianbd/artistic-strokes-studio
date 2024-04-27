import { useLoaderData } from "react-router-dom";
import CarftIemCard from "../../Components/CarftIemCard/CarftIemCard";

const PaintingAndDrawing = () => {
    const paintingsAndDrawings = useLoaderData();

    return (
        <div className="grid grid-cols-4 gap-4 max-w-7xl my-10 mx-auto">
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