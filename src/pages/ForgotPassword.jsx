import { AuthContext } from "../context/AuthContext"; 
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    const {forgotpassword} = useContext(AuthContext);

    const Navigate = useNavigate();

    const handleIt = () => {
        if(!name || !password || !confirmPassword){
            alert("Enter all the fields...");
            return;
        }

        if(password != confirmPassword){
            alert("passwords didn't match !");
            return;
        }

        if(forgotpassword(name , password)){
            Navigate("/");
        }else{
            alert("Username don't exists")
        }
        return;
    }

    return (
        <div className="auth-card">
            <label htmlFor="">Username</label>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            type="text" />


            <label htmlFor="">Password</label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" />
            <label htmlFor="">Confirm Password</label>
            <input
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)}
            type="password" />

            <button onClick={handleIt}>
                Change Password
            </button>

        </div>
    )
}

export default ForgotPassword;