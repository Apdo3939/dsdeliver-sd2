import './styles.css'
import { ReactComponent as InstagramIcon } from './Instagram.svg'
import { ReactComponent as LinkedinIcon } from './Linkedin.svg'
import { ReactComponent as YoutubeIcon } from './Youtube.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª edição do evento semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="new"><YoutubeIcon /></a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="new"><LinkedinIcon /></a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="new"><InstagramIcon /></a>
            </div>
        </footer>
    )
}
export default Footer