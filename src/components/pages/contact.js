import React from 'react'
import contactPicture from "../../../static/assets/images/img-3758.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
    return (
        <div className="contact-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column-contact">
                <h1>Contact Information</h1>
                <div className="Address">Orlando, Florida<FontAwesomeIcon icon="map-pin" />
                    <div className="Phone">555-5555<FontAwesomeIcon icon="mobile-alt" />
                        <div className="Email">EstronzaNicole@gmail.com<FontAwesomeIcon icon="paper-plane" />
                            <h2>Social Media</h2>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}