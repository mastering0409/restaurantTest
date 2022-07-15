import React, { useEffect, useState } from "react"
import FoodListItem from "../components/FoodListItem.com"


const LandingPage = () => {
    
    const [items, setItems] = useState([]);

    const gridContainer = {
        'display': 'grid',
        'gridTemplateColumns': 'auto auto',
        'gap' : '10px',
        'padding': '10px'
    }

    useEffect(() => {
        fetch('/get_landing_page_items').then((res) => {
            const data = res.json();
            setItems(items => [...items, data])
        })
    }, [])

    return (
        <>
            <div style={gridContainer}>
                {items.map((item, index) => {
                    return (
                        <FoodListItem key={index} title={item.item_title} description={item.item_description} salary={item.item_price} />    
                    )
                })}
                {/* <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />
                <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />
                <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />
                <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />
                <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />
                <FoodListItem title={"This is First item."} description={"This is First item description."} salary={40.00} />                 */}
            </div>
        </>
    )
}

export default LandingPage;