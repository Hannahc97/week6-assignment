export default function ShopItemSection (props) {

    console.log(props)

    const {id, name: upgradeName, cost, increase} = props // tried destructuring
    //changed name to 'upgradeName' - reassigned variable (name) to a different name (upgradeName)

    return (
        <>
            <h3>{id}</h3>
            <h3>{upgradeName}</h3>
            <p>Cost: {cost} cookies</p>
            <p>Increase: +{increase}</p>
            <button>Buy</button>
        </>
    )
}

// can also write it as 
// export default function ShopItemSection ({id, name: upgradeName, cost, increase}) {}