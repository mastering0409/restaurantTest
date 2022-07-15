import React from "react";
import MainBody from "./MainBody.main";
import MainFooter from "./MainFooter.main";
import MainHeader from "./MainHeader.main";


const Main = () => {
    return (
        <>
            <div>
                <MainHeader />
                <MainBody />
                <MainFooter />
            </div>
            
        </>
    )
}

export default Main;