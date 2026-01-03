import { useState , useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) =>{
    const [users , setUsers] = useState(()=>JSON.parse(localStorage.getItem("users"))||[])

    const [currentUser, setCurrentUser] = useState(()=>JSON.parse(localStorage.getItem("currentUser"))||"");

    useEffect(()=>{
        localStorage.setItem("users" , JSON.stringify(users));
        localStorage.setItem("currentUser" , JSON.stringify(currentUser));
        console.log(users);
    },[users , currentUser])

    const signup = (name , password) =>{
        if(users.some((detail)=>detail.name === name)) return false;
        setUsers([...users , {name , password , role : "Customer"}])
        setCurrentUser(name);
        return true;
    }

    const subscribeIt = (subscription) =>{
        setUsers((prev)=>prev.map((data)=>data.name === currentUser ? {...data , subscription } : data)
        )
        return true;    
    }

    const login = (name , password) => {
        if(users.find((detail)=>detail.name === name && detail.password === password)){
            setCurrentUser(name);
            return true;
        }else {
            return false;
        }
    }

    const forgotpassword = (name , password) => {
        if(!users.some((detail)=>detail.name === name)) return false;

        setUsers((prev)=>prev.map((data)=>data.name === name ? {...data , password} : data)
        )
        return true;
    }

    return(
        <AuthContext.Provider value={{
            signup,
            login,
            forgotpassword,
            currentUser,
            users,
            subscribeIt
            }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;