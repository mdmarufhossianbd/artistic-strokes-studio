import { useLoaderData } from "react-router-dom";

const PaintingAndDrawingDetails = () => {
    const paintingAndDrawing = useLoaderData()
    const { photo, item_name, category, price, short_description, rating, processing_time, customization } = paintingAndDrawing;
    return (
        <div className="max-w-7xl mx-auto mt-10 px-10">
            
            <div className="md:grid grid-cols-2 items-center my-5 pb-5 border-b-8 border-pink-400 rounded-[10%]">
                <img className="md:w-[90%] rounded-md mx-auto" src={photo} />
                <div className="py-5 flex flex-col gap-2 items-center">
                    <h2 className="font-medium text-2xl">Name : {item_name}</h2>
                    <p className="font-medium text-xl">Price : ${price}</p>
                    <p className="font-medium">Category : {category}</p>
                    <button className="bg-pink-500 md:w-1/2 w-[80%] py-2 text-white rounded-md hover:bg-slate-950">Order Now</button>
                </div>
            </div>
            <p><span className="text-xl font-medium">Product Details : </span><br /> <br /> {short_description}</p>
            <div className="md:flex justify-between font-medium py-5">
                <p>Rating : {rating} out of 5.00</p>
                <p>Processing Time : {processing_time}</p>
                <p>Customization : {customization}</p>
            </div>
        </div>
    );
};

export default PaintingAndDrawingDetails;