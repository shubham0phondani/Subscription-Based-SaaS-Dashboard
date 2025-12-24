import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const {details} = useOutletContext();
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");

    const handleIt = ()=>{
        const userExists =  details.find((data)=>data.name === name && data.password === password);

        if(userExists){
            alert("logged in");
        }else{
            alert("invalid credentials")
        }

    }

    return (
        <div className="auth-div">

            <div className="auth-card">
                <div className="txt">
                    Login
                </div>

                <div className="user">
                    <label className="ok" htmlFor="">Username</label>
                </div>
                <input
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name"
                    className="init"
                    type="text" />
                <div className="user">
                    <label className="ok" htmlFor="">Password</label>
                </div>
                <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    className="init"
                    type="password" />

                <div className="pass">
                    <Link className="link" to={"/forgotpassword"}>
                        <label className="ok" htmlFor=""> forgot password ?</label>

                    </Link>
                </div>

                <button onClick={handleIt}>
                    Login
                </button>

                <div className="sign">
                    <Link className="link" to={"/signup"}>
                        <label className="" htmlFor=""> Sign-up ?</label>
                    </Link>
                </div>


            </div>
        </div>
    )
}
export default Login;