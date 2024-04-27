import { useContext, useEffect, useState } from "react";
import MyPaintsAndDrawingsCard from "../../Components/MyPaintsAndDrawingsCard/MyPaintsAndDrawingsCard";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPaintsAndDrawing = () => {
    const { user } = useContext(AuthContext);
    const [userCrafts, setUserCrafts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user-added/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserCrafts(data);
            })
    }, [user])

    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:mx-5 mx-3">
                {
                    userCrafts.map(item => (
                        <MyPaintsAndDrawingsCard key={item._id} item={item}
                        ></MyPaintsAndDrawingsCard>))
                }
            </div>

        </div>
    );
};

export default MyPaintsAndDrawing;