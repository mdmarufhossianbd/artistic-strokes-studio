import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyPaintsAndDrawingsCard from "../../Components/MyPaintsAndDrawingsCard/MyPaintsAndDrawingsCard";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPaintsAndDrawing = () => {
    const { user } = useContext(AuthContext);
    const loadCrafts = useLoaderData();
    const [userCrafts, setUserCrafts] = useState(loadCrafts)


    useEffect(() => {
        fetch(`http://localhost:5000/user-added/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserCrafts(data);
            })
    }, [user])

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="text-center">
                <h2 className="text-3xl font-semibold py-5 text-[#2a2824]">Your Listed Products</h2>
                <h2 className="pb-10">Your Total Products : {userCrafts.length}</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:mx-5 mx-3">
                {
                    userCrafts.map(item => (
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