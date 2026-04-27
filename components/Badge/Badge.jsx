import React from "react";
import "./badgeStyles.css"


export default function Badge(props){

    const availableShapes = ["square", "pill"]
    const availableColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

    const variants = props.variant.split(" ")

    function validateVariant(){

        let variantsToReturn = []

        if (availableColors.includes(variants[0])){
            variantsToReturn.push(variants[0])
        } else if (availableColors.includes(variants[1])){
            variantsToReturn.push(variants[1])
        } else {
            console.error("Invalid color variant. 'gray' chosen as fallback color")
            variantsToReturn.push("gray")
        }

        if (availableShapes.includes(variants[0])){
            variantsToReturn.push(variants[0])
        } else if (availableShapes.includes(variants[1])){
            variantsToReturn.push(variants[1])
        } else {
            console.error("Invalid shape variant. 'square' chosen as fallback shape")
            variantsToReturn.push("square")
        }
        
        return variantsToReturn.join(" ")
    }

    // console.log(variant)

    return <div className={`badge ${validateVariant()}`}>
        {props.children}
    </div>
}