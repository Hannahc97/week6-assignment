import { useEffect, useState } from "react";
import { cookieData } from "../lib/cookieData";

// I need TWO state variable to store 2 values --> 
// one state to track the number of cookies
// one state to track the cookies per second (cps)


export default function CookieCounter () {

    const [cookies, setCookies] = useState(100) // useState() cookies = number of cookies 
    console.log(`You have ${cookies} cookies`)

    const [cps, setCps] = useState(5) // useState()


    useEffect(() => {
        const myInterval = setInterval(() => {
            setCookies((currentCookies)=> {currentCookies + cps})
        }, 1000);

        return () => {
            clearInterval(myInterval)
        }
        }, [cps, cookies]); 


    

    return (
        <>
            <h1>You have {cookies} cookies</h1>
            <button onClick={() => setCookies((currentCookies) => currentCookies + 1)}>Click me for a cookie 🍪</button>
            <p>You are currently gaining {cps} cookies per second </p>
        </>
    )
}
