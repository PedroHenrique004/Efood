import { HeaderContainer, Text } from './styles'
import logo from '../../images/logo.png'
import Hero from '../Hero'

const HeaderRest = () => (
    <>
        <HeaderContainer>
            <div>
                <Text>Restaurantes</Text>
                <img src={logo} alt="eFood logo" />
                <Text>0 produto(s) no carrinho</Text>
            </div>
        </HeaderContainer> 
        <Hero />
    </>
)

export default HeaderRest