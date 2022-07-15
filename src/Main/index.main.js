import React, { useState } from "react";
import MainBody from "./MainBody.main";
import MainFooter from "./MainFooter.main";
import MainHeader from "./MainHeader.main";


const Main = () => {
    const [curpage, setCurpage] = useState("landing")

    const change_page = (pageName) => {
        setCurpage(pageName);
    }

    return (
        <>
            <div>
                <MainHeader change_page = {change_page} />
                <MainBody curpage = {curpage} change_page={change_page} />
                <MainFooter />
            </div>
            
        </>
    )
}

export default Main;