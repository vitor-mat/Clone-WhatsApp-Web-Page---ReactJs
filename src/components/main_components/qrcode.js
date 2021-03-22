import React from 'react'
import QrCodeImage from '../../images/main_components_images/qrcode_image.png'
import '../../style/main_components_style/qrcode.css'

export default () => {
    return(
        <div id="qrcode-div">
            <img id="qrcode-image" src={QrCodeImage} />
        </div>
    )
}