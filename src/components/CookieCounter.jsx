import { useEffect, useState } from "react";

// I need TWO state variable to store 2 values --> one state to track the number of cookies, and one state to track the cookies per second (cps)


export default function CookieCounter () {

    const [cookies, setCookies] = useState(0) // useState()
    const [cps, setCps] = useState(0) // useState()

    useEffect(() => {
        const myInterval = setInterval(() => {
            setCookies((currentCookies)=> {
            currentCookies + cps})
        }, 1000);
        return () => {
            clearInterval(myInterval)
        }
        }, [cps]); 

    return (
        <>
            <p>{cps}</p>
        </>
    )
}