import './../style/main.css';
import Texto from './main_components/texto.js'
import QrCode from './main_components/qrcode.js'
import LinkInput from './main_components/link_input.js'
import TutorialVideo from './main_components/tutorial_video.js'


function Main() {
  return (
    <>
      <div id="container">
        <Texto/>
        <QrCode/>
        <LinkInput/>
        <TutorialVideo/>
      </div>
    </>
  );
}

export default Main;
