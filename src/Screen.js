import React from "react";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import "./App.css"

const Screen=()=>{
    return (
        <>
            <div className="app__page">
                <Sidebar />
                <Recommended />
            </div>
        </>
    );
}

export default Screen;