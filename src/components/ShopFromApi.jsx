import { useEffect, useState  } from "react";
import ShopItemSection from "./ShopItemSection";


export default function ShopFromApi ({cookies, setCookies, setCps}){

    const [shopItems, setShopItems] = useState([]);
    const [message, setMessage] = useState("Fetching items..."); 

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
                const data = await response.json();
                console.log("EFFECT!!! : Shop Data fetched successfully!")
                setShopItems(data)
                setMessage(`SIDE EFFECT!! : Fetched ${data.length} items successfully!`);
            } catch(error){
                console.log("SIDE EFFECT!! : Failed to fetch")
                setMessage("SIDE EFFECT!! : Failed to fetch")
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {shopItems.map((items) => (
                <ShopItemSection
                key={items.id}
                upgradeName={items.name}
                upgradeCost={items.cost}
                upgradeIncrease={items.increase}
                cookies={cookies}
                setCookies={setCookies}
                setCps={setCps}/>
                ))
            }        
        </>
    )
}