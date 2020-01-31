import React from 'react'
import aboutPicture from "../../../static/assets/images/MyStory/mystory.jpg"

export default function () {
    return (
        <div className="about-page-wrapper ">
            <div
                className="left-column"
                style={{
                    background: "url(" + aboutPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                {/* //this is where the bio goes */}



            </div>
        </div>
    );
}
