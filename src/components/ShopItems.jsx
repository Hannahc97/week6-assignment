import { cookieData } from "../lib/cookieData"
import ShopItemSection from "./ShopItemSection"

export default function ShopItems () {

    console.log(cookieData)

    return ( 
        <>
            {
                cookieData.map((cookieDataItem) => {
                    return (
                        <ShopItemSection
                        key={cookieDataItem.id}
                        name={cookieDataItem.name}
                        cost={cookieDataItem.cost}
                        increase={cookieDataItem.increase}
                        // {...cookieDataItem} --> alternative way, using spreading 
                        />
                    )
                })
            }
        </>
    )
} 


