import React from "react"

export default function CardText(props) {
    return (
        <p className="card-text">
            {props.children}
        </p>
    )
}
