import React from "react";
import { BannerContext } from "./Banner";

export default function BannerTitle(props){

    const lines = React.useContext(BannerContext)

    return (
        <h1 className={`banner-title ${lines}`}>{props.children}</h1>
    )
}