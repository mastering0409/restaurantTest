import React from "react"
import LandingPage from "../subpages/landing.subp"

const MainBody = () => {
    return (
        <>
            <div style={{display: "block"}}>
                <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" style={{width: "100%", height: "350px"}} />
            </div>
            <div style={{display: 'block', padding: "5px 10%", backgroundColor: "#f6f5f1"}}>
                <LandingPage />
            </div>
        </>
    )
}

export default MainBody