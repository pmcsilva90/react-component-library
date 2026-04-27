import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card(props){
    return (
        <div className="card">
            <div className="icon">
                <IoCloudUploadOutline/>
            </div>
            {props.children}
        </div>
    )
}