import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyPaintsAndDrawingsCard from "../../Components/MyPaintsAndDrawingsCard/MyPaintsAndDrawingsCard";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPaintsAndDrawing = () => {
    const { user } = useContext(AuthContext);
    const loadCrafts = useLoaderData();
    const [userCrafts, setUserCrafts] = useState(loadCrafts)
    const [customization, setCustomization] = useState([])

    const handleFilter = filter => {
        if(filter === 'all'){
            setCustomization(userCrafts);
        }
        else if(filter === 'yes'){
            const customizationYes = userCrafts.filter(craft => craft.customization === "Yes");
            setCustomization(customizationYes);
        }
        else if (filter === 'no'){
            const customizationNo = userCrafts.filter(craft => craft.customization === "No")
            setCustomization(customizationNo);
        }
    }

    useEffect(() => {
        fetch(`https://painting-and-drawing-server-beryl.vercel.app/user-added/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserCrafts(data);
                setCustomization(data);
            })
    }, [user])

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="text-center">
                <h2 className="text-3xl font-semibold py-5 text-[#2a2824]">Your Listed Products</h2>
                <h2 className="pb-10">Your Total Products : {userCrafts.length}</h2>

            </div>
            <div className="dropdown mb-5">
                <div tabIndex={0} role="button" className="btn m-1">Filter by Customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All</a></li>
                    <li onClick={() => handleFilter('yes')}><a>Yes</a></li>
                    <li onClick={() => handleFilter('no')}><a>No</a></li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:mx-5 mx-3">
                {
                    customization.map(item => (
                        <MyPaintsAndDrawingsCard key={item._id} item={item}
                            userCrafts={userCrafts}
                            setUserCrafts={setUserCrafts}
                        ></MyPaintsAndDrawingsCard>))
                }
            </div>

        </div>
    );
};

export default MyPaintsAndDrawing;