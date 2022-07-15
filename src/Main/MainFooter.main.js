import React from "react"


const MainFooter = () => {
    
    const FooterStyle ={
        'display': 'grid',
        'gridTemplateColumns': 'auto auto auto auto',
        'gap' : '10px',
        'backgroundColor' : "white",
        'padding': "10px 10%"
    }

    return (
        <>
            <div style={FooterStyle}>
                <div style={{display: "block", textAlign: "left"}}>
                    <h3>About Us</h3>
                    <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping seasons sad behold beari ath of it fly signs bearing be one blessed after.</p>
                </div>
                <div style={{display: "block", textAlign: "left"}}>
                    <h3>Important Link</h3>
                    <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping seasons sad behold beari ath of it fly signs bearing be one blessed after.</p>
                </div>
                <div style={{display: "block", textAlign: "left"}}>
                    <h3>Contact Us</h3>
                    <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping seasons sad behold beari ath of it fly signs bearing be one blessed after.</p>
                </div>
                <div style={{display: "block", textAlign: "left"}}>
                    <h3>Newsletter</h3>
                    <p>Heaven fruitful doesn't over for these theheaven fruitful doe over days appear creeping seasons sad behold beari ath of it fly signs bearing be one blessed after.</p>
                </div>
                <div style={{gridColumn: "1/5", borderTop: '2px solid grey', padding: '10px'}}>
                    Copyright ©2022 All rights reserved | This template is made with  by Colorlib
                </div>  
            </div>
        </>
    )
}

export default MainFooter