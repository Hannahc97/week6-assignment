//! Disclaimer: I will write all the comments here, but it is your job to put each part of the app in a different component/ folder/file 

// We need an element to store our upgrades --> either a local file (like I did in a list & keys demo) or fetch them for the API (stretch goal)

import { useEffect, useState } from "react";
// import CookieButton from "./components/CookieButton";
import ShopItems from "./components/ShopItems";
import ShopItemSection from "./components/ShopItemSection";
import CookieCounter from "./components/CookieCounter";

export default function App () {
  // I need TWO state variable to store 2 values --> one state to track the number of cookies, and one state to track the cookies per second (cps)

  
  const [cookies, setCookies] = useState(0) // useState()
  const [cps, setCps] = useState(0) // useState()

  // this block of code is very useful. What does it do?



  // We need some logic for the shop upgrades (cookies go down, cps goes up )
  // Write you logic here 

  return (
    <>
      <h1>Cookie Clicker Game </h1>
      <CookieCounter/>
      <ShopItems/>

      {/* We need an element to interact with the user */}
      {/* We need elements to render our cookies and cps for the user to see the values displayed */}
      {/* We need the shop upgrades rendered here! */}
    </>
  )
}