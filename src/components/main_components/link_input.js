import React from 'react'
import '../../style/main_components_style/link_input.css'

export default () => {
    return(
    <div id="link-input-div">
        <div id="link-div">
            <a href="#">Precisa de ajuda para começar?</a>
        </div>
        <div id="input-div">
            <input type="checkbox" id="conected"/>
            <label for="conected">Mantenha-me conectado</label>
        </div>
    </div>
    )
}