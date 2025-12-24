import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

    const { details, setDetails } = useOutletContext();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const checkIt = () => {

        if (!name || !password) {
            alert("enter all fields")
            return;
        }

        const exists = details.find((data) => {
            return data.name === name && data.password === password;
        })

        if (exists) {
            alert("already SignedIn");
            return;
        }

        setDetails([...details, { name, password }])
        return;
    }

    return (
        <div className="auth-div">
            <div className="auth-card">
                <div className="txt">
                    Sign-up
                </div>

                <div className="user">
                    <label className="ok" htmlFor="">Username</label>
                </div>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="init"
                    type="text" />
                <div className="user">
                    <label className="ok" htmlFor="">Password</label>
                </div>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="init"
                    type="password" />

                <button onClick={checkIt} className="butt">
                    sign-up
                </button>
            </div>
        </div>
    )
}

export default Signup;