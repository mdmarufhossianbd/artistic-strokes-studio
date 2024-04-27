import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';


const AddPaintingandDrawing = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = e => {
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
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const email = user.email;
        
        const categoryData = { photo, item_name, category, price, short_description, rating, processing_time, customization, stock, user_name, user_email, email}
        console.log(categoryData);

        fetch('http://localhost:5000/paintings-and-drawings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryData)
        })
            .then(res => res.json())
            .then(data => {                
                // console.log(data);
                if (data.acknowledged == true) {
                    const notify = () => toast("Item added Successfully");
                    notify();
                    form.reset();
                }
            })

    }
    return (
        <div>
            <h2 className="text-center font-semibold lg:text-5xl text-3xl py-10">Add Painting and Drawing</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 p-5 border-2 mb-10 rounded-md max-w-4xl mx-auto">
                <div>
                    <label className="text-lg font-medium">Photo</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="photo" placeholder="Enter photo url" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Item Name</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="item_name" placeholder="Enter item name" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Select Category</label>
                    <select name="sub_category" className=" select select-bordered w-[100%] mt-2 border-[#10a58f] focus:outline-none focus:ring-0">
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
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="number" name="price" placeholder="Enter price" id="" />
                </div>
                <div className="col-span-2">
                    <label className="text-lg font-medium">Short description</label>
                    <textarea placeholder="Write short description" className="textarea textarea-lg w-full bg-[#10a58f] mt-2 rounded py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0"
                    name="short_description" ></textarea>
                </div>                
                <div>
                    <label className="text-lg font-medium">Rating</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="rating" placeholder="Enter rating" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Processing Time</label>
                    <input className="bg-[#10a58f] mt-2 rounded w-full py-3 px-3 text-white placeholder:text-white placeholder:pl-3 focus:outline-none focus:ring-0" type="text" name="processing_time" placeholder="Enter Processing Time" id="" />
                </div>
                <div>
                    <label className="text-lg font-medium">Customization</label>
                    <select name="customization" className="select select-bordered w-full mt-2 border-[#10a58f] focus:outline-none focus:ring-0">
                        <option disabled selected>Choose One</option>
                        <option name="Yes">Yes</option>
                        <option name="No">No</option>
                    </select>
                </div>                
                <div>
                    <label className="text-lg font-medium">Stock</label>
                    <select name="stock" className="select select-bordered w-full mt-2 border-[#10a58f] focus:outline-none focus:ring-0">
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

export default AddPaintingandDrawing;