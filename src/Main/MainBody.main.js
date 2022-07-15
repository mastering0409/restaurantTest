import React, {useEffect, useState} from "react"
import LandingPage from "../subpages/landing.subp"
import OrderItem from "../subpages/order.subp"


const MainBody = ({curpage}) => {

    const [allitems, setAllItems] = useState([])
    const [itemState, setItemState] = useState([])
    const change_orderCount = (delt, orderID) => {
        setItemState(state => {
            const temp = state;
            temp[orderID] = temp[orderID] == 0 && delt == -1 ? 0 : temp[orderID] + delt;
            return temp
        })
    }
    
    useEffect(() => {
        //get all of Items
        const temp=[];
        setAllItems(temp)
        setItemState(temp)
    }, [])

    return (
        <>
            {curpage == "landing" ? (
                <>
                    <div style={{display: "block"}}>
                        <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" style={{width: "100%", height: "350px"}} />
                    </div>
                    <div style={{display: 'block', padding: "5px 10%", backgroundColor: "#f6f5f1"}}>
                        <LandingPage />
                    </div>
                </>
            ) : null}
            {curpage == "order" ? (
                <>
                    <div style={{display: 'block', padding: "5px 10%", backgroundColor: "#f6f5f1"}}>
                        {allitems.map((item, index) => {
                            <OrderItem key={index} title={item.item_title} description={item.item_description}  salary={item.item_price} orderNum={itemState[index]} change_orderCount={change_orderCount} orderID={index} />
                        })}
                    </div>
                </>
            ) : null}
            
        </>
    )
}

export default MainBody