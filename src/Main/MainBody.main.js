import React, {useEffect, useState} from "react"
import LandingPage from "../subpages/landing.subp"
import OrderItem from "../subpages/order.subp"
import DeliveredOrderItem from "../components/deliveredItem.com"

const deliveredState = ["preparing", "delivered", "completed"]

const MainBody = ({curpage, change_page}) => {

    const [allitems, setAllItems] = useState([])
    const [itemState, setItemState] = useState([])
    const [orderitems, setOrderItems] = useState([])
    const [orderItemState, setOrderItemState] = useState([])
    
    const BtnStyle = {
        'display': 'inline-block',
        'padding': '9.5px 28px',
        'borderRadius': '50px',
        'backgroundColor': '#ff6426',
        'fontSize': '14px',
        'fontWeight': '400',
        'color': '#fff',
        'transition': '0.5s',
        'textTransform': 'capitalize',
        'border': '2px solid transparent',
        'textDecoration': 'none',
        'marginTop': 'auto',
        'marginBottom': 'auto'
    }

    const change_orderCount = (delt, orderID) => {
        setItemState(state => {
            const temp = state;
            temp[orderID] = temp[orderID] == 0 && delt == -1 ? 0 : temp[orderID] + delt;
            return temp
        })
    }

    const order_foods = () => {
        // send items state and get all show items
        change_page("delivered_order")
        //when you get orderItems
        const temp=[]
        setOrderItems(temp)
    }

    const change_orderState = (delt, index) => {
        setOrderItemState(state => {
            const temp = state;
            temp[index] = delt;
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
                            return (
                                <OrderItem key={index} title={item.item_title} description={item.item_description}  salary={item.item_price} orderNum={itemState[index]} change_orderCount={change_orderCount} orderID={index} />
                            )
                        })}
                        <div style={{display: "block", textAlign: "center"}}>
                            <a style={BtnStyle} onClick={order_foods}>Submit</a>
                        </div>
                    </div>
                </>
            ) : null}

            {curpage == "delivered_order" ? (
                <>
                    <div style={{display: 'block', padding: "5px 10%", backgroundColor: "#f6f5f1"}}>
                        {orderitems.map((item, index) => {
                            return (
                                <DeliveredOrderItem key={index} title={item.item_title} description={item.item_description} salary={item.item_price} orderState={itemState[index]} change_orderState={change_orderState} orderID={index} />
                            )
                        })}
                    </div>
                </>
            ) : null}
            
        </>
    )
}

export default MainBody