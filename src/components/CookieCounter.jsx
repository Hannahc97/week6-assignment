import "./CookieCounter.css"
import { useEffect, useState } from "react";
// import { cookieData } from "../lib/cookieData";
import ShopItemSection from "./ShopItemSection"
import ShopFromApi from "./ShopFromApi";



// I need TWO state variable to store 2 values --> 
// one state to track the number of cookies
// one state to track the cookies per second (cps)


export default function CookieCounter () {

    const [cookies, setCookies] = useState(1000) // useState() cookies = number of cookies 
    const [cps, setCps] = useState(0) // useState() --> cookies per second 
    
    console.log(`You have ${cookies} cookies`)
    console.log(`The CPS is: ${cps}`)


    useEffect(() => {
        const myInterval = setInterval(() => {
            setCookies((currentCookies) => currentCookies + cps);
            }, 1000);
            return () => {
                clearInterval(myInterval);};
            }, [cps]);


        function handleClick(){
            setCookies((currentCookies) => currentCookies + 1)
        }

        function reset() {
            setCookies(0)
            setCps(0)
        }

    return (
        
        <div>
            <div className="text-container">
            <h1 className="cookies">You have {cookies} cookies</h1>
            <button onClick={handleClick}>Click me for a cookie 🍪</button>
            <p className="cps">You are currently gaining {cps} cookies per second </p>
            <button onClick={reset}>Reset</button>
            </div>
        
            <>
            <ShopFromApi
                cookies={cookies}
                setCookies={setCookies}
                setCps={setCps}
            />
            </>
        </div>
        
    )
}

                        {/* {cookieData.map((cookieDataItem) => {
                            return (
                                <ShopItemSection
                                key={cookieDataItem.id}
                                name={cookieDataItem.name}
                                cost={cookieDataItem.cost}
                                increase={cookieDataItem.increase}
                                cookies={cookies} // Pass cookies as a prop
                                setCookies={setCookies} // Pass setCookies as a prop
                                setCps={setCps}
                                // {...cookieDataItem} --> alternative way, using spreading
                                />
                            )
                        })
                    } */}

