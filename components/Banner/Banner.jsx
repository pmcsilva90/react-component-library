import React from "react"
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaTimesCircle,
    FaInfoCircle,
} from "react-icons/fa"

const BannerContext = React.createContext()

export {BannerContext}

export default function Banner(props) {

    const lines = props.children.length === 2 ? "multiline" : "singleline"

    function validateVariant(){
        if (["success", "warning", "error", "neutral"].includes(props.variant)){
            return props.variant
        } else {
            console.error("Invalid variant. 'neutral' variant chosen as fallback")
            return "neutral"
        }
    }
    
    function determineIcon() {
        switch (props.variant) {
            case "success":
                return <FaCheckCircle />
            case "warning":
                return <FaExclamationTriangle />
            case "error":
                return <FaTimesCircle />
            case "neutral":
                return <FaInfoCircle />
            default:
                return <FaInfoCircle />

        }
    }

    return (
        <BannerContext.Provider value={lines}>
            <div className={`banner ${validateVariant()}`}>
                <div className="banner-icon">{determineIcon()}</div>
                <div className="banner-content">{props.children}</div>
            </div>
        </BannerContext.Provider>
    )
}
