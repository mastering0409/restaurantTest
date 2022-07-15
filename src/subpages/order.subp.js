import React from "react";


const OrderItem = (props) => {
    const {title, description, imgUrl, salary, orderNum, change_orderCount, orderID} = props;

    const gridContainer = {
        'display': 'grid',
        'gridTemplateColumns': '120px auto 40px',
        'gap' : '0px',
        'padding': '10px',
        'width': "100%",
        'margin' : "5px 0px"
    }

    const title_style = {
        'fontSize': '30px',
        'fontWeight': '700',
        'color': '#2c3033',
        'fontFamily': "Cardo",
        'margin' : 0
    }

    const des_style = {
        'fontFamily': "Lora",
        'lineHeight': '1.7em',
        'fontSize': '20px',
        'marginBottom': '0px',
        'marginTop': '0px',
        'color': '#555555'
    }

    const salary_style = {
        'fontSize': '20px',
        'fontWeight': '700',
        'color': '#ff6426',
        'marginBottom': '0px',
        'marginTop': '20px'
    }

    return (
        <>
            <div style={gridContainer}>
                <div style={{display: "block"}}>
                    <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" width={130} height={130} />
                </div>
                <div style={{display: "block", padding: "5px", paddingLeft: "40px", textAlign: "left", backgroundColor: "white"}}>
                    <h3 style={title_style}>{title}</h3>
                    <p style={des_style}>{description}</p>
                    <h5 style={salary_style}>${salary}</h5>
                </div>
                <div style={{display: "block", backgroundColor: "white"}}> 
                    <label style={{display: "block", width: "30px", height: "30%", margin: "10px 5px"}}>{orderNum}</label>
                    <label style={{display: "block", width: "30px", height: "20%", margin: "5px", backgroundColor: "red"}} onClick={change_orderCount(1, orderID)}>+</label>
                    <label style={{display: "block", width: "30px", height: "20%", margin: "5px", backgroundColor: "blue"}} onClick={change_orderCount(-1, orderID)}>-</label>
                </div>
            </div>
        </>
    )
}

export default OrderItem;