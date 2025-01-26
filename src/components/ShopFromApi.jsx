import { useEffect, useState  } from "react";
import ShopItemSection from "./ShopItemSection";


export default function ShopFromApi ({cookies, setCookies, setCps}){

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
                const data = await response.json();
                console.log("EFFECT!!! : Shop Data fetched successfully!")
                setShopItems(data)
            } catch(error){
                console.error(`"SIDE EFFECT!! : Failed to fetch" ${error}`)
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