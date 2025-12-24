import { Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'

const Authentication = () => {

    const [details, setDetails] = useState(() => {
        const saved = localStorage.getItem("values");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("values", JSON.stringify(details));
    }, [details]);


    const editDetails = (name, password) => {
        setDetails(prev =>
            prev.map((data) => {
                return data.name === name ? { ...data, password } : data;
            })
        )
    }

    return (
        <>
            <Outlet context={{ details, setDetails, editDetails }} />
        </>
    )
}

export default Authentication
