export default function ShopItemSection (props) {

    console.log(props)

    const {id, upgradeName, upgradeCost, upgradeIncrease, cookies, setCookies, setCps} = props 
    // tried destructuring
    //changed name to 'upgradeName' - reassigned variable (name) to a different name (upgradeName)

    function handlePurchase() {
        if (cookies >= upgradeCost) {
            setCookies((prevCookies) => prevCookies - upgradeCost); //  Deduct the cost of the upgrade
            setCps((prevCps) => prevCps + upgradeIncrease); // Increase the CPS (cookies per second)
        }
    }

    return (
        <>
            <h3>{id}</h3>
            <h3>{upgradeName}</h3>
            <p>Cost: {upgradeCost} cookies</p>
            <p>Increase: +{upgradeIncrease}</p>
            <button onClick={handlePurchase}>Buy</button>
        </>
    )
}

// can also write it as 
// export default function ShopItemSection ({id, name: upgradeName, cost, increase}) {}