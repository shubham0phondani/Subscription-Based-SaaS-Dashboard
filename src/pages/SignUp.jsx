import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const SignUp = () =>{

    const {signup} = useContext(AuthContext);
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const handleIt = () => {
        if(!name || !password){
            alert("Enter all fields...");
            return;
        }
        if(signup(name , password)){
            navigate("/pricing")
        }else{
            alert("already Signedin")
        }
        return;
    }

    return (
        <div className="auth-card">
            <label htmlFor="">Username</label>
            <input
            className="border-2"
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            type="text" />
            <label htmlFor="">Password</label>
            <input
            className="border-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" />

            <button className="border-2" onClick={handleIt}>
                SignUp
            </button>
        </div>
    )
}
export default SignUp;