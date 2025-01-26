export default function ShopItemSection (props) {

    console.log(props)

    const {id, name: upgradeName, cost, increase, cookies, setCookies, setCps} = props // tried destructuring
    //changed name to 'upgradeName' - reassigned variable (name) to a different name (upgradeName)

    // function handlePurchase (){
    //     if (cookies >= cost) {
    //         setCookies((prevCookies) => prevCookies - cost)
    //         setCps((prevCps)=>prevCps + increase)
    //     }
    // }

    function handlePurchase() {
        if (cookies >= cost) {
            // Deduct the cost of the upgrade
            setCookies((prevCookies) => prevCookies - cost);
            // Increase the CPS (cookies per second)
            setCps((prevCps) => prevCps + increase);
        }
    }

    return (
        <>
            <h3>{id}</h3>
            <h3>{upgradeName}</h3>
            <p>Cost: {cost} cookies</p>
            <p>Increase: +{increase}</p>
            <button onClick={handlePurchase}>Buy</button>
        </>
    )
}

// can also write it as 
// export default function ShopItemSection ({id, name: upgradeName, cost, increase}) {}