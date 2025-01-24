//! Disclaimer: I will write all the comments here, but it is your job to put each part of the app in a different component/ folder/file 

// We need an element to store our upgrades --> either a local file (like I did in a list & keys demo) or fetch them for the API (stretch goal)

import { useEffect } from "react";

export default function App () {
  // I need TWO state variable to store 2 values --> one state to track the number of cookies, and one state to track the cookies per second (cps)

  // useState()
  // useState()

  // this block of code is very useful. What does it do?

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies)=> {
        currentCookies + cps})
    }, 1000);
    return () => {
      clearInterval(myInterval)
    }
  }, [cps]); 

  // We need some loic for the shop upgrades (cookies go down, cps goes up )
  // Write you logic here 

  return (
    <>
      <h1>Cookie Clicker </h1>
      {/* We need an element to interact with the user */}
      {/* We need elements to render our cookies and cps for the user to see the values displayed */}
      {/* We need the shop upgrades rendered here! */}
    </>
  )
}