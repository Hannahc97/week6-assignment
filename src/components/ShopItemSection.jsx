import "./ShopItemSection.css"

export default function ShopItemSection (props) {

    console.log(props)

    const {id, upgradeName, upgradeCost, upgradeIncrease, cookies, setCookies, setCps} = props 
    // tried destructuring
    //changed name to 'upgradeName' - reassigned variable (name) to a different name (upgradeName)

    // We need some logic for the shop upgrades (cookies go down, cps goes up )
    // Write you logic here 

    function handlePurchase() {
        if (cookies >= upgradeCost) {
            setCookies((prevCookies) => prevCookies - upgradeCost); //  Deduct the cost of the upgrade
            setCps((prevCps) => prevCps + upgradeIncrease); // Increase the CPS (cookies per second)
        }
    }

    return (
            <div className="shop-container">
                <h3>{id}</h3>
                <h3>{upgradeName}</h3>
                <p>Cost: {upgradeCost} cookies</p>
                <p>Increase: +{upgradeIncrease}</p>
                <button onClick={handlePurchase}>Buy</button>
            </div>
    )
}

// can also write it as 
// export default function ShopItemSection ({id, name: upgradeName, cost, increase}) {}