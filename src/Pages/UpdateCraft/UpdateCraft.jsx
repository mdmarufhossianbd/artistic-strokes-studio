import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateCraft = () => {
    const currentCraft = useLoaderData();
    const {user} = useContext(AuthContext);

    const {_id, photo, item_name, category, price, short_description, rating, processing_time, customization, stock} = currentCraft;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const item_name = form.item_name.value;
        const category = form.sub_category.value;
        const price = form.price.value;        
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const email = user.email;
        
        const carftData = { photo, item_name, category, price, short_description, rating, processing_time, customization, stock, email}
        console.log(carftData);

        // update data to the server
        fetch(`http://localhost:5000/paintings-and-drawings/${_id}`, {
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(carftData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('Item Update Successfully')
            }
        })
    }
    return (
        <div>
            <h2 className="text-center font-semibold lg:text-5xl text-3xl py-10">Add Painting and Drawing</h2>
            <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-5 p-5 border-2 mb-10 rounded-md max-w-4xl mx-auto">
                <div>
                    <label className="text-lg font-medium">Photo</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Item Name</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="item_name" defaultValue={item_name} placeholder="Enter item name" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Select Category</label>
                    <select name="sub_category" className="select select-bordered w-[100%] mt-2 border-[#10a58f] focus:outline-none focus:ring-0" defaultValue={category}>
                        <option disabled selected>Choose One</option>
                        <option name="Landscape Painting">Landscape Painting</option>
                        <option name="Portrait Drawing">Portrait Drawing</option>
                        <option name="Watercolour Painting">Watercolour Painting</option>
                        <option name="Oil Painting">Oil Painting</option>
                        <option name="Charcoal Sketching">Charcoal Sketching</option>
                        <option name="Cartoon Drawing">Cartoon Drawing</option>
                    </select>
                </div>
                <div>
                    <label className="text-lg font-medium">Price</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="number" name="price" defaultValue={price} placeholder="Enter price" id="" />
                </div>
                <div className="col-span-2">
                    <label className="text-lg font-medium">Short description</label>
                    <textarea placeholder="Write short description" className="textarea textarea-lg w-full bg-[#10a58f] mt-2 rounded py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0"
                    name="short_description" defaultValue={short_description} ></textarea>
                </div>                
                <div>
                    <label className="text-lg font-medium">Rating</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="rating" defaultValue={rating} placeholder="Enter rating" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Processing Time</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="processing_time" defaultValue={processing_time} placeholder="Enter Processing Time" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Customization</label>
                    <select name="customization" defaultValue={customization} className="select select-bordered w-full mt-2 border-[#10a58f] focus:outline-none focus:ring-0">
                        <option disabled selected>Choose One</option>
                        <option name="Yes">Yes</option>
                        <option name="No">No</option>
                    </select>
                </div>                
                <div>
                    <label className="text-lg font-medium">Stock</label>
                    <select name="stock" defaultValue={stock} className="select select-bordered w-full mt-2 border-[#10a58f] focus:outline-none focus:ring-0">
                        <option disabled selected>Choose One</option>
                        <option name="Yes">In Stock</option>
                        <option name="No">Made to Order</option>
                    </select>
                </div>
                <div>
                    <label className="text-lg font-medium">User Name</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="user_name" placeholder="Enter User Name" defaultValue={user.displayName} disabled />
                </div>
                <div>
                    <label className="text-lg font-medium">User E-mail</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="user_email" placeholder="Enter User E-mail" defaultValue={user.email} disabled />
                </div>
                <input className="col-span-2 bg-gradient-to-r from-[#e39396] via-purple-500 to-pink-500 text-white py-2 w-1/2 mx-auto rounded font-semibold text-xl" type="submit" value="Add Item" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default UpdateCraft;