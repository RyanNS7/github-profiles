import {useState} from 'react'
import {HeaderContainer, ThemeButton} from './style'
import LogoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'
import searchIcon from '../../assets/icon-search.png'

function Header(){

    const [dark, setDark] = useState(false)

    function switchTheme(){
      setDark(!dark)
    }

    return (
        <HeaderContainer>
            <img src={LogoLight} alt='Logo Github'/>                

            <form>
                <input type='text' placeholder='GitHub Profile'/>
                {/* <input type='submit' value='Procurar' /> */}
                <button className='submit'><img src={searchIcon} alt='search' /></button>
            </form>

            <ThemeButton>
                <button onClick={switchTheme}>{!dark ? 'Light' : 'Dark'}</button>    
            </ThemeButton>
            
        </HeaderContainer>
    )
}


export default Header