import React from "react";
import "./Sidebar_row.css"


const Sidebar_row=({Selected,title, Icon})=>
{
    return (<>
        <div className={`sidebar_row ${Selected && "selected"}`}>
            <Icon className="sidebar_row__icon" /> 
            <h2 className="Title">{title}</h2>
        </div>
    </>);
}

export default Sidebar_row;