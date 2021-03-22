import './../style/header.css';
import whatsapp_icon from './../images/whatsapp_icon.png'

function Header() {
  return (
    <header>
      <div id="icon-div">
        <img id="whatsapp-icon" src={whatsapp_icon}/>
        <span id="text-whats-icon">whatsapp web</span>
      </div> 
    </header>
  );
}

export default Header;
