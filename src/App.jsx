//! Disclaimer: I will write all the comments here, but it is your job to put each part of the app in a different component/ folder/file 

// We need an element to store our upgrades --> either a local file (like I did in a list & keys demo) or fetch them for the API (stretch goal)
import "./App.css"

// import ShopFromApi from "./components/ShopFromApi"
// import ShopItems from "./components/ShopItems";
// import ShopItemSection from "./components/ShopItemSection";
import CookieCounter from "./components/CookieCounter";

export default function App () {

  return (
    <>
      <h1 className="header">🍪 Cookie Clicker Game 🍪</h1>
      <CookieCounter/>


      {/* We need an element to interact with the user */}
      {/* We need elements to render our cookies and cps for the user to see the values displayed */}
      {/* We need the shop upgrades rendered here! */}
    </>
  )
}