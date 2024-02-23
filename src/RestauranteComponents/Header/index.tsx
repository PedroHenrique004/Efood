import { HeaderContainer, Text } from './styles'
import logo from '../../images/logo.png'
import Hero from '../Hero'


const HeaderRest = () => (
    <>
        <HeaderContainer>
            <Text>Restaurantes</Text>
            <img src={logo} alt="eFood logo" />
            <Text>0 produto(s) no carrinho</Text>
        </HeaderContainer> 
        <Hero />
    </>
)

export default HeaderRest