import { HeaderContainer, Title } from './styles'
import logo from '../../images/logo.png'


const Header = () => (
    <>
        <HeaderContainer>
            <img src={logo} alt="eFood logo" />
            <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
        </HeaderContainer> 
    </>
)

export default Header