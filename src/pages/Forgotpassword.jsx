import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Forgotpassword = () => {
    const navigate = useNavigate();
    const { editDetails } = useOutletContext();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleIt = () => {
        if (!name || !password || !confirmPassword) {
            alert("fill all the fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("passwords didn't match");
            setConfirmPassword("");
            setPassword("");
            return;
        }

        editDetails(name, password);
        navigate("/")
    }

    return (
        <div className="auth-div">
            <div className="auth-card-pass">
                <label htmlFor="">Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                <label htmlFor="">New Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" />
                <label htmlFor="">Confirm</label>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password" />

                <button onClick={handleIt}>
                    Change Password
                </button>

            </div>
        </div>
    )
}

export default Forgotpassword;