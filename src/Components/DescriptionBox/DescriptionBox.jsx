import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigation">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(112)</div>
            </div>
            <div className="descriptionbox-description">
                <p>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
                <p>Lower temperature washes and delicate spin cycles are gentler on garments and help to protect the colour, shape and structure of the fabric. Furthermore, they reduce the amount of energy used in care processes.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
