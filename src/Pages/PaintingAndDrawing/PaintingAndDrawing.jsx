import { useLoaderData } from "react-router-dom";
import CarftIemCard from "../../Components/CarftIemCard/CarftIemCard";

const PaintingAndDrawing = () => {
    const paintingsAndDrawings = useLoaderData();

    return (
        <div className="max-w-7xl mx-5 mt-10 md:mx-auto">
            <h2 className="text-3xl font-semibold py-5 text-center">All Arts and Crafts</h2>
            <table className="table mb-10">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paintingsAndDrawings?.map((item, index) => (
                            <CarftIemCard key={item._id}
                                item={item}
                                index={index}
                            ></CarftIemCard>))
                    }

                </tbody>
            </table>


        </div>
    );
};

export default PaintingAndDrawing;