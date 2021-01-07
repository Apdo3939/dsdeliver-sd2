import './styles.css'
import {ReactComponent as InstagramIcon} from './Instagram.svg'
import {ReactComponent as LinkedinIcon} from './Linkedin.svg'
import {ReactComponent as YoutubeIcon} from './Youtube.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª edição do evento semana DevSuperior
            <div className="footer-icons"> 
                <a href=""><YoutubeIcon/></a>
                <a href=""><LinkedinIcon/></a>
                <a href=""><InstagramIcon/></a>
            </div>
        </footer>
    )
}
export default Footer