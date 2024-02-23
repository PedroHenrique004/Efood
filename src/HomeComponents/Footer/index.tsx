import logo from '../../images/logo.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import { FooterContainer, LinksList, Paragrafo } from './styles'

const Footer = () => (
    <FooterContainer>
        <img src={logo} alt="eFood logo" className='logo'/>
        <LinksList>
            <li>
                <a href="#"><img src={instagram} alt="Link do instagram" /></a>
            </li>
            <li>
                <a href="#"><img src={facebook} alt="Link do facebook" /></a>
            </li>
            <li>
                <a href="#"><img src={twitter} alt="Link do twitter" /></a>
            </li>
        </LinksList>
        <Paragrafo>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Paragrafo>
    </FooterContainer>
)

export default Footer