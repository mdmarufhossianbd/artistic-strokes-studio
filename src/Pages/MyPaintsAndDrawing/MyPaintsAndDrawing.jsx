import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPaintsAndDrawing = () => {
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/user-added/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    },[user])

    return (
        <div>
            This is my paintings and drawings.
        </div>
    );
};

export default MyPaintsAndDrawing;