import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [name , setName] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleIt = () => {
        if(!name || !password){
            alert("Enter all fields...");
            return;
        }
        if(login(name , password)){
            navigate("/dashboard")
        }else{
            alert("Invalid Credentials!");
        }
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
            <Link to={"/forgotpassword"}>
                <label htmlFor="">forgotpassword?</label>
            </Link>

            <button className="border-2" onClick={handleIt}>
                login
            </button>

            <Link to={"/signup"}>
                <label htmlFor="">SignUp</label>
            </Link>

        </div>
    )
}

export default Login;